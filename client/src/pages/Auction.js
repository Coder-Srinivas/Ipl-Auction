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
            {squads? <PlayerCard {...squads.squads[0].players[0]}/> : ''}
            
        </div>
    )
}

export default Auction