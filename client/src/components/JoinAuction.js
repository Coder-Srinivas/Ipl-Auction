import Input from '../components/Input';
const { handleChange } = require('../utilities/handleChanges');

const JoinAuction = () => {

    const [room, setRoom] = useState('');

    const joinRoom = () => {
        
    }
    return (
        <>
            <div>
                <Input
                    type="id"
                    placeholder="Enter your the room id" 
                    onChange={(value) => setRoom(value)}
                    icon=''
                    error=''
                    title='Room id'
                >
                </Input>
                <button className="button" onClick={}>
                    Join Auction
                </button>
            </div>
        </>
    )
}

export default JoinAuction