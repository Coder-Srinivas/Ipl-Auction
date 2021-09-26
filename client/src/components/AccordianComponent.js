const AccordianComponent = ({ title, players }) => {
  return (
    <div className="accordian-helper">
      <div className="accordian-helper-title">{title}:</div>
      <div className="accordian-helper-players">
        {players.map((player) => {
          return <div className="accordian-helper-player">{player.name}</div>;
        })}
      </div>
    </div>
  );
};

export default AccordianComponent;
