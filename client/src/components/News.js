import { useEffect, useState } from "react";
import Slider from "react-slick";
import NewsCard from "./NewsCard";
import Loading from "./Loading.component";
import Error from "./Error";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fetchNews } from "../services/news.service";

const News = () => {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchNews()
      .then((response) => {
        setNews(response);
      })
      .catch((error) => {
        setNews([]);
        console.log(error.message);
        setError(true);
      });
  }, []);

  if (!news) {
    return (
      <div className="news-loader">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <Error text="Sorry, unable to fetch the news, please try reloading the page." />
    );
  }

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
    <Slider {...settings}>
      {news.map((article, index) => {
        return <NewsCard key={index} {...article} />;
      })}
    </Slider>
  );
};

export default News;
