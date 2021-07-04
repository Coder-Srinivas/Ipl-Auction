//Hooks
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../hooks/UserContext";

// Components
import JoinAuction from "../components/JoinAuction";
import CreateAuction from "../components/CreateAuction";
import Game from "../components/Game";
import Lobby from "../components/Lobby";

import io from "socket.io-client";

const url = process.env.BACKEND_URL || "http://localhost:8000";

const Auction = (props) => {
  const { user } = useContext(UserContext);
  const [socket] = useState(io(url), { user });
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

  useEffect(() => {
    console.log(socket);
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
  }, [socket]);

  useEffect(() => {
    socket.on("users", (data) => {
      setUsers(data.users);
      const myself = data.users.find((u) => u.user === user.username);
      setMe(myself);
      console.log(user.username, data.users);
    });
  }, [user, socket]);

  return (
    <div className="auction">
      {play ? (
        <Game room={room} socket={socket} users={users} user={user} me={me} />
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
