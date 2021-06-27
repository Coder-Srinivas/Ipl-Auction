import { useEffect, useState } from "react";

const Game = ({users, socket, room}) => {
    const [timer, setTimer] = useState(0);

    useEffect(()=>{
        socket.on('display', (data) => {
            console.log(data);
            setTimer(data.time)
        })
    }, [socket])

    return (
        <div className="game">
            Let the game start
            {timer}
            {
                users.map(({user}) => {
                    return(<div key={user}>{user}</div>)
                })
            }
        </div>
    )
}

export default Game;