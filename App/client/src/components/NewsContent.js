import NewsTitle from "./NewsTitle";
import NewsDescription from "./NewsDescription";
import NewsDate from "./NewsDate";

const NewsContent = ({ title, description, weekDate, date }) => {
  return (
    <div className="news-container">
      <div className="news-content">
        <NewsTitle title={title} />
        <NewsDescription description={description} />
        <NewsDate weekDate={weekDate} date={date} />
      </div>
    </div>
  );
};

export default NewsContent;
