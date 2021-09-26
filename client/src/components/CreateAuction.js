import { v4 as uuidv4 } from "uuid";

const CreateAuction = ({
  socket,
  user,
  setCreated,
  setJoin,
  setRoom,
  setMain,
}) => {
  const newAuction = () => {
    const room = uuidv4();
    socket.emit("createAuction", {
      username: user.username,
      room,
    });
    setCreated(true);
    setRoom(room);
    setMain(true);
  };

  const joinAuction = () => {
    setJoin(true);
  };

  return (
    <div className="form">
      <div className="form-container">
        <button
          onClick={() => {
            newAuction();
          }}
          className="create-auction-button button"
        >
          Create Auction
        </button>
        <button
          onClick={() => {
            joinAuction();
          }}
          className="create-auction-button button"
        >
          Join Auction
        </button>
      </div>
    </div>
  );
};

export default CreateAuction;
