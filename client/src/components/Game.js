import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Game = ({ users, socket, room, user, me, initial }) => {
  const [timer, setTimer] = useState(0);
  const [bidder, setBidder] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(0);
  const [player, setPlayer] = useState(initial);
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
      {error ? <div className="error">{error}</div> : ""}
      <div className="game--players">
        <h2 className="game--players-head">Player status</h2>
        {users.map(({ user }) => {
          return (
            <div key={user} className="game--players-in">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3 className="game--players-in-1">{user.name}</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <h3 className="game--players-in-2">
                      <span className="game--players-in-a">Name:</span>
                      <span className="game--players-in-b">{user.name}</span>
                    </h3>
                  </Typography>
                  <Typography>
                    <h3 className="game--players-in-3">
                      <span className="game--players-in-a">Budget:</span>{" "}
                      <span className="game--players-in-b">{user.budget}</span>
                    </h3>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
        /*needs implementation*/
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

      <div className="game--bidding">
        {player ? <PlayerCard {...player} /> : ""}
        <div className="game--bidding-btn">
          <button
            onClick={() => {
              bid();
            }}
            className="button game--bidding-btn-1"
          >
            Bid
          </button>
          {displayNext ? (
            <button
              onClick={() => {
                next();
              }}
              className="button game--btn-2"
            >
              Next
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="game--status">
        <h2 className="game--status-head">Status</h2>
        <br />
        <h3 className="game--status-budget">Budget - {me.budget}</h3>
        {timer < 4 ? (
          <h3 className="game--status-timer-red">Time is ticking - {timer}</h3>
        ) : timer < 7 ? (
          <h3 className="game--status-timer-yellow">
            Time is ticking - {timer}
          </h3>
        ) : (
          <h3 className="game--status-timer-normal">Time left - {timer}</h3>
        )}

        {bidder ? <h3 className="game--status-bidder">bidder</h3> : ""}
        {amount !== 0 ? <h3 className="game--status-amount">amount</h3> : ""}
      </div>
    </div>
  );
};

export default Game;
