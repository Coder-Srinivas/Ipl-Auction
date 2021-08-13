const NewsDate = ({ weekDate, date }) => {
  return (
    <div className="news-content-date">
      <div>{weekDate}</div>
      <div>{date}</div>
    </div>
  );
};

export default NewsDate;
