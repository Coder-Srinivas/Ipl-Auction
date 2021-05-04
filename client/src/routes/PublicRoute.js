import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

const PublicRoute = ({ component: Component, ...rest }) => {
    const { user, loading } = useContext(UserContext);
    if(loading){
        return (<div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem non quas, natus pariatur, expedita aliquid ullam doloribus sint itaque doloremque! Quaerat accusamus explicabo autem ullam fuga maxime harum quisquam! Loading</h1>
        </div>)
    }
    return ( !user ? <Route {...rest} render={(props) => (<Component {...props} />)}/> : <Redirect to='/'/> )
}

export default PublicRoute