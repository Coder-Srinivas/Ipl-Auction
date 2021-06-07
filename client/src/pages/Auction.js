import { useEffect, useState } from "react";
import PlayerCard from '../components/PlayerCard';
const { fetchSquads } = require('../services/players.service');
const Auction = (props) => {

    const [squads, setSquads] = useState(null);
    useEffect(() => {
        fetchSquads().then((response) => {
            setSquads(response);
        })
    }, [])

    return(
        <div className="auction">
            {squads? <PlayerCard {...squads.squads[5].players[2]}/> : ''}
            <button className="button">Bid</button>
        </div>
    )
}

export default Auction