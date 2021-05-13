const PlayerStats = ({stats}) => {

    return(
        <div className="playerCard-info-stats">
            {stats.map((stat, index) => {
                return(
                    <div key={index} className="playerCard-info-stat-container">
                        <span>{stat.label}:</span>
                        <span>{stat.value}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerStats