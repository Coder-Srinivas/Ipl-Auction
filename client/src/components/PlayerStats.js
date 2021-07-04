const PlayerStats = ({ stats, role }) => {
  return (
    <div className="playerCard-info-stats">
      <div className="playerCard-info-stats-title">{role}:</div>
      {stats
        ? stats.map((stat, index) => {
            return (
              <div key={index} className="playerCard-info-stat-container">
                <span className="playerCard-info-stat-label">
                  {stat.label}:
                </span>
                <span className="playerCard-info-stat-value">{stat.value}</span>
              </div>
            );
          })
        : "First Timer"}
    </div>
  );
};

export default PlayerStats;
