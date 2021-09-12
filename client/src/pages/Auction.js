//Hooks
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../hooks/UserContext";

// Components
import JoinAuction from "../components/JoinAuction";
import CreateAuction from "../components/CreateAuction";
import Game from "../components/Game";
import Lobby from "../components/Lobby";
import Loader from "./Loading";

import io from "socket.io-client";

const url = process.env.NODE_ENV === "production"? 
"https://ipl-mega-auction.herokuapp.com/" 
: "http://localhost:8000/";

const Auction = (props) => {
  const { user } = useContext(UserContext);
  const [socket] = useState(io(url));
  const [room, setRoom] = useState("");
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState(false);
  const [errors, setErrors] = useState({
    form: "",
    room: "",
    lobby: "",
  });
  const [users, setUsers] = useState([]);
  const [created, setCreated] = useState(false);
  const [join, setJoin] = useState(false);
  const [me, setMe] = useState("");
  const [initial, setInitial] = useState(true);
  const [defaultPlayer, setDefaultPlayer] = useState('');

  useEffect(() => {
    socket.emit("check-user", {
      user: user
    });

    socket.on("existing-user", (data) => {
      setUsers(data.users);
      setRoom(data.room);
      const myself = data.users.find((u) => u.user === user.username);
      setMe(myself);
      setInitial(false);
      setDefaultPlayer(data.initial);
      setPlay(true);
    });

    socket.on("no-existing-user", () => {
      setInitial(false);
    })

    socket.on("join-result", (message) => {
      if (message.success) {
        console.log(message);
        setRoom(message.room);
        return setCreated(true);
      }
      return setErrors((prev) => ({
        ...prev,
        form: message.error,
      }));
    });

    socket.on("start", () => {
      console.log("Started");
      setPlay(true);
    });
  }, [socket, user]);

  useEffect(() => {
    socket.on("users", (data) => {
      setUsers(data.users);
      const myself = data.users.find((u) => u.user === user.username);
      setMe(myself);
    });
  }, [user, socket]);

  return (
    <div className="auction">
      {initial ? (
        <Loader />
      ) : play ? (
        <Game room={room} socket={socket} users={users} user={user} me={me} initial={defaultPlayer} />
      ) : !created && !join ? (
        <CreateAuction
          socket={socket}
          user={user}
          setCreated={setCreated}
          setJoin={setJoin}
          setRoom={setRoom}
        />
      ) : created ? (
        <Lobby
          socket={socket}
          userCount={users.length}
          code={room}
          setPlay={setPlay}
          setErrors={setErrors}
          error={errors.lobby}
        />
      ) : (
        <JoinAuction
          socket={socket}
          user={user}
          room={room}
          setRoom={setRoom}
          errors={errors}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};

export default Auction;
