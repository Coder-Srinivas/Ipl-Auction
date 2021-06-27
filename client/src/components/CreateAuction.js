import { v4 as uuidv4 } from 'uuid';

const CreateAuction = ({socket, user, setCreated, setJoin, setRoom}) => {

    const newAuction = () => {
        const room = uuidv4();
        socket.emit("createAuction", {
            username: user.username,
            room
        })
        setCreated(true);
        setRoom(room);
    }

    const joinAuction = () => {
        setJoin(true);
    }

    return (
        <>
            <div className="create-auction-holder">
                <button onClick={() => {newAuction()}} className="button">Create Auction</button>
                <button onClick={() => {joinAuction()}} className="button">Join Auction</button>
            </div>
        </>
    )
}

export default CreateAuction;