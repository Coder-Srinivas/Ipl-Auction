import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

const Game = ({ users, socket, room, user, me }) => {
  const [timer, setTimer] = useState(10);
  const [bidder, setBidder] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(0);
  const [player, setPlayer] = useState("");
  const [displayNext, setNext] = useState(false);

  useEffect(() => {
    socket.on("display", (data) => {
      console.log(data);
      setTimer(data.time);
    });

    socket.on("bid", (data) => {
      setBidder(data.currentBidder.bidder);
      setAmount(data.currentBidder.bid);
    });

    socket.on("bid-error", (data) => {
      setError(data.message);
    });

    socket.on("player", (data) => {
      setPlayer(data.player);
    });
  }, [socket]);

  useEffect(() => {
    if (timer === 0) {
      setBidder("");
      setAmount(0);
      setNext(true);
    }
  }, [timer]);

  const bid = () => {
    socket.emit("bid", {
      room,
      user: user.username,
    });
  };

  const next = () => {
    socket.emit("next", {
      room,
      user: user.username,
    });
    setNext(false);
  };
  return (
    <div className="game">
      Budget:{me.budget}
      Let the game start
      {timer}
      {bidder ? bidder : ""}
      {amount !== 0 ? amount : ""}
      {users.map(({ user }) => {
        return <div key={user}>{user}</div>;
      })}
      {player ? <PlayerCard {...player} /> : ""}
      <button
        onClick={() => {
          bid();
        }}
        className="button"
      >
        Bid
      </button>
      {displayNext ? (
        <button
          onClick={() => {
            next();
          }}
          className="button"
        >
          Next
        </button>
      ) : (
        ""
      )}
      {error ? <div className="error">{error}</div> : ""}
      {me.players.map((player, index) => {
        return (
          <div key={index}>
            {console.log(player)}
            {player.player.name}
            {player.amount}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
