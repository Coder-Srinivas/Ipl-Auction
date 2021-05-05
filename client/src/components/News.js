import { useEffect, useState } from "react";
import Slider from "react-slick";
import NewsCard from './NewsCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { fetchNews } = require('../services/news.service');

const News = () => {

    const [news, setNews] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchNews().then((response) => {
            setNews(response);
        }).catch((error) => {
            setError(true);
        })
    }, [])

    if(!news){
        return <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem repudiandae labore animi a reiciendis dignissimos voluptate, enim saepe pariatur commodi deserunt, beatae minus, impedit soluta hic rem ab provident nesciunt.</h1>
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
    <Slider {...settings}>
        {news.map((article) => {
            return <NewsCard {...article} />
        })}
    </Slider>
    )
}

export default News
