const Lobby = ({ socket, userCount, code, setPlay, setErrors, error }) => {
  const start = () => {
    if (userCount < 2) {
      return setErrors((prev) => ({
        ...prev,
        lobby: "At least four users should join for the auction to start.",
      }));
    }
    socket.emit("requestPlay", {
      room: code,
    });
    socket.emit("start", {
      room: code,
    });
  };
  return (
    <>
      <div className="lobby">
        Share the code {code} with your friends to join the auction. Users
        Joined: {userCount}
        <button
          className="button"
          onClick={() => {
            start();
          }}
        >
          Start
        </button>
        {error ? <div className="error">{error}</div> : ""}
      </div>
    </>
  );
};

export default Lobby;
