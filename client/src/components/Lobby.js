const Lobby = ({
  socket,
  code,
  setErrors,
  error,
  users,
  main,
  user,
  setCreated,
  setJoin,
}) => {
  const copyToClipboard = () => {
    if ("clipboard" in navigator) navigator.clipboard.writeText(code);
    else document.execCommand("copy", true, code);
    alert("Code successfully copied to the clipboard!");
  };

  const start = () => {
    if (users.length < 2) {
      return setErrors((prev) => ({
        ...prev,
        lobby: "At least two users should join for the auction to start.",
      }));
    }
    socket.emit("requestPlay", {
      room: code,
    });
    socket.emit("start", {
      room: code,
    });
  };

  const exit = () => {
    socket.emit("exit", {
      room: code,
      user: user.username,
    });
    setCreated(false);
    setJoin(false);
  };

  return (
    <>
      <div className="lobby">
        <div className="lobby--container">
          <div className="lobby--container--content">
            <div className="lobby--container--content-1">
              Share the code{" "}
              <span className="lobby--container--content-1-copy">
                <p className="code" onClick={copyToClipboard}>
                  {code}
                </p>
              </span>{" "}
              with your friends to join the auction.
            </div>
            <div className="lobby--container--content-2">
              Users joined:{" "}
              {users.map((user) => {
                return <div key={user.user}>{user.user}</div>;
              })}
            </div>
          </div>
          <div className="lobby--container--button">
            {main ? (
              <button
                className="button"
                onClick={() => {
                  start();
                }}
              >
                Start
              </button>
            ) : (
              ""
            )}
            <button
              style={{ marginTop: "1rem" }}
              className="button"
              onClick={() => {
                exit();
              }}
            >
              Exit
            </button>
            {error ? <div className="error">{error}</div> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lobby;
