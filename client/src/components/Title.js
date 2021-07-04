const Title = ({ title, fadeAnimation }) => {
  return (
    <div
      className={`title ${fadeAnimation === "left" ? "fadeLeft" : "fadeRight"}`}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
