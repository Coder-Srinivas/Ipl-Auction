import PlayerStats from "./PlayerStats";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlayerCard = ({ image, name, squad, stats }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="playerCard">
      <div className="playerCard-image">
        <img src={image} alt="player profile"></img>
        <h2 className="playerCard-info-name">{name}</h2>
      </div>

      <div className="playerCard-info">
        <div className="playerCard-info-role">{stats.role}</div>
        {stats.batting && stats.bowling ? (
          <div className="playerCard-info-slider">
            <Slider {...settings}>
              <PlayerStats stats={stats.batting} role="Batting" />
              <PlayerStats stats={stats.bowling} role="Bowling" />
            </Slider>
          </div>
        ) : stats.batting ? (
          <PlayerStats stats={stats.batting} role="Batting" />
        ) : (
          <PlayerStats stats={stats.bowling} role="Bowling" />
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
