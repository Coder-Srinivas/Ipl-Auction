const Bars = (props) => {
  const { barState, setBarState } = props;
  return (
    <div
      className="bars"
      onClick={() => {
        setBarState((prev) => !prev);
      }}
    >
      <div className={barState ? "bars-main bars-main-top" : "bars-main"}></div>
      <div
        className={barState ? "bars-main bars-main-center" : "bars-main"}
      ></div>
      <div
        className={barState ? "bars-main bars-main-bottom" : "bars-main"}
      ></div>
    </div>
  );
};

export default Bars;
