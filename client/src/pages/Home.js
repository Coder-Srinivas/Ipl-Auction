import News from '../components/News';

const Home = () => {

    return(
        <div className="home">
            <div className="home-title home-title--1">
                <h1>Welcome</h1>
            </div>
            <div className="home-title home-title--2">
                <h1>To</h1>
            </div>
            <div className="home-title home-title--4">
                <h1>Ipl</h1>
            </div>
            <div className="home-title home-title--5">
                <h1>Auction</h1>
            </div>

            <News />
        </div>
    )
}

export default Home