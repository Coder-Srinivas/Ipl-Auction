const NewsCard = ({ title, image, description, weekDate, date}) => {

    console.log(title, image, description, weekDate, date)
    return (
    <div>
        {title}
        <img src={image}></img>
        {description}
        {weekDate}
        {date}
    </div>
    )
}

export default NewsCard
