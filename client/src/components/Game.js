import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import UserAccordian from "./UserAccordian";
import { useHistory } from "react-router-dom";
const Game = ({ users, socket, room, user, initial }) => {
  const [timer, setTimer] = useState(-1);
  const [bidder, setBidder] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(0);
  const [player, setPlayer] = useState(initial);
  const [displayNext, setNext] = useState(false);
  let history = useHistory();

  useEffect(() => {
    socket.emit("fetch-details");
    socket.on("server-details", (data) => {
      setBidder(data.bidder);
      setAmount(data.amount);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("display", (data) => {
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

    socket.on("game-over", () => {
      history.push("/auctions/played");
    });
  }, [socket, history]);

  useEffect(() => {
    if (timer === 0) {
      setBidder("");
      setAmount(0);
      setNext(true);
    } else {
      setNext(false);
    }
  }, [timer]);

  const bid = () => {
    if (timer > 0) {
      socket.emit("bid", {
        room,
        user: user.username,
      });
    }
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
      <div className="game-main">
        {player ? <PlayerCard {...player} /> : ""}
        <div className="game-main-content">
          <div
            className={`game-timer ${timer > 0 ? "animate-timer" : ""} 
          ${
            timer < 7 && timer >= 4
              ? "timer-yellow"
              : timer < 4
              ? "timer-red"
              : ""
          }`}
          >
            {timer}
          </div>
          <div className="game-info">
            <div className="game-info-bidder">
              <div className="same-line">
                <p>Highest Bidder :</p> <p className="bidder">{bidder}</p>
              </div>
              <div className="same-line">
                <p>Bid Amount :</p> <p className="amount">{amount}cr</p>
              </div>
            </div>
            <div className="game-info-budgets">
              Budgets Remaining :
              {users.map((user, index) => {
                return (
                  <div className="same-line" key={index}>
                    <p className="bidder">{user.user}</p>{" "}
                    <p className="amount">{user.budget}cr</p>
                  </div>
                );
              })}
            </div>
            <div className="game-buttons">
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
            </div>
          </div>
        </div>
      </div>
      <div className="users-info">
        {users.map((user) => {
          return <UserAccordian key={user.user} {...user} />;
        })}
      </div>
      {error ? <div className="error">{error}</div> : ""}
    </div>
  );
};

export default Game;
