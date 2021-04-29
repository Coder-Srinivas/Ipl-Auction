import { useEffect, useState } from "react";
import { authorization } from '../services/auth.service';
import { Redirect } from 'react-router-dom';

const Auction = (props) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);

    useEffect(() => {
        authorization().then((response) => {
            if(response.success){
                setUser(true);
            }
            setTimeout(() => {
                setLoading(false);
            }, 5000)
        })
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    if(!user){
        props.history.push("/");
    }
    return(
        <div>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
            <h1>
            Auction Page
            </h1>
        </div>
    )
}

export default Auction