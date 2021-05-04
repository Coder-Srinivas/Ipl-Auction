import { useEffect, useState } from "react";
import Slider from "react-slick";
import NewsCard from './NewsCard';
const { fetchNews } = require('../services/news.service');

const News = () => {

    const [news, setNews] = useState(null)

    useEffect(() => {
        fetchNews().then((response) => {
            //console.log(response);
            setNews(response);
        })
    }, [])

    if(!news){
        return <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem repudiandae labore animi a reiciendis dignissimos voluptate, enim saepe pariatur commodi deserunt, beatae minus, impedit soluta hic rem ab provident nesciunt.</h1>
    }
    return (
    <Slider>
        {news.map((article) => {
            return <NewsCard {...article} />
        })}
    </Slider>
    )
}

export default News