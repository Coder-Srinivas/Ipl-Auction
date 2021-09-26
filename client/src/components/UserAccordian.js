import AccordianComponent from "./AccordianComponent";
import { useState } from "react";
const UserAccordian = ({
  user,
  batsmen,
  wicketKeepers,
  allRounders,
  bowlers,
  unknown,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`user-accordian ${show ? "user-accordian-increase-2" : ""}`}
    >
      <div className="user-accordian-name">
        {user}
        <img
          src="/Images/arrow.svg"
          alt="an-arrow"
          className={`arrow ${show ? "rotate" : ""}`}
          onClick={() => setShow((prev) => !prev)}
        ></img>
      </div>
      <div
        className={`user-accordian-players ${
          show ? "user-accordian-increase" : ""
        }`}
      >
        {batsmen.length > 0 ? (
          <AccordianComponent title="Batsmen" players={batsmen} />
        ) : (
          ""
        )}
        {wicketKeepers.length > 0 ? (
          <AccordianComponent title="Wicket Keepers" players={wicketKeepers} />
        ) : (
          ""
        )}
        {allRounders.length > 0 ? (
          <AccordianComponent title="All Rounders" players={allRounders} />
        ) : (
          ""
        )}
        {bowlers.length > 0 ? (
          <AccordianComponent title="Bowlers" players={bowlers} />
        ) : (
          ""
        )}
        {unknown.length > 0 ? (
          <AccordianComponent title="Unknown" players={unknown} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserAccordian;
