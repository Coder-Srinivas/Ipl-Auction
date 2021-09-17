const Lobby = ({ socket, userCount, code, setPlay, setErrors, error, userNames }) => {
  userNames = "Sample name1, Sample name2" //dummy value
   
    const copyToClipboard = () => {
      if ('clipboard' in navigator)
      navigator.clipboard.writeText(code);
      else
      document.execCommand('copy', true, code);
       alert("Code successfully copied to the clipboard!");
    }
    
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
      <div className="lobby--container">
        <div className="lobby--container--content">
          <div className="lobby--container--content-1">
            Share the code <span className="lobby--container--content-1-copy">
            <a onClick={copyToClipboard}>{code}</a>
            </span> with your friends to join the auction.
          </div>
          <div className="lobby--container--content-2">Users joined: {userNames}</div>
          </div>
          <div className="lobby--container--button">
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
      </div>
      </div>
    </>
  );
};

export default Lobby;
