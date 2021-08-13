import NewsImage from "./NewsImage";
import NewsContent from "./NewsContent";

const NewsCard = ({ image, ...remaining }) => {
  return (
    <div className="news">
      <NewsImage image={image} />
      <NewsContent {...remaining} />
    </div>
  );
};

export default NewsCard;
