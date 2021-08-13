const NewsImage = ({ image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="news-image"
    ></div>
  );
};

export default NewsImage;
