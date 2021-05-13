import PlayerStats from './PlayerStats';

const PlayerCard = ({image, name, squad, stats}) => {
    return(
        <div className="playerCard">
            <div className="playerCard-image">
                <img src={image} alt="player profile"></img>
                <h2 className="playerCard-info-name">{name}</h2>
            </div>
            
            <div className="playerCard-info">
                <div className="playerCard-info-role">
                    {stats.role}
                </div>
                <PlayerStats stats={stats.batting}/>
                <PlayerStats stats={stats.batting}/>
            </div>
        </div>
    )
}

export default PlayerCard;
