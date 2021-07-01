import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-head">About Us</h1>
      <div className="about-content">
        
        <img className="about-content-img" alt="about-svg" src="Images/about.jpg"></img>
        <div className="about-content-txt">
          <h2 className="about-content-txt-1">M. Srinivas(the ultimate dog)</h2>
          <h4 className="about-content-txt-2">
            Competitive Coder | Full Stack Developer
          </h4>
          <h3 className="about-content-txt-3">Find me on</h3>
          <div className="about-content-social">
            <a
              href="https://github.com/coder-srinivas"
              target="_blank"
              rel="noreferrer"
              className="about-content-social-1"
            >
              <FontAwesomeIcon
                className="about-content-social-icon"
                icon={faLinkedin}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/srinivas-m-298764191/"
              target="_blank"
              rel="noreferrer"
              className="about-content-social-2"
            >
              <FontAwesomeIcon
                className="about-content-social-icon"
                icon={faGithub}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="about-proj">
        <h1 className="about-proj-head">What is the IPL auction?</h1>
        <p className="about-proj-para">
          in nibh mauris cursus mattis molestie a iaculis at erat pellentesque
          adipiscing commodo elit at imperdiet dui accumsan sit amet nulla
          facilisi morbi tempus iaculis urna id volutpat lacus laoreet non
          curabitur gravida arcu ac tortor dignissim convallis aenean et tortor
          at risus viverra adipiscing at in tellus integer feugiat scelerisque
          varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget
          dolor morbi non arcu risus quis varius quam quisque id diam vel quam
          elementum pulvinar etiam non quam lacus suspendisse faucibus interdum
          posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis
          tristique sollicitudin nibh sit amet commodo nulla facilisi nullam
          vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel
          elit scelerisque mauris pellentesque pulvinar pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis egestas
          maecenas pharetra convallis posuere morbi leo urna molestie at
          elementum eu facilisis sed odio morbi quis commodo odio h
        </p>
      </div>
    </div>
  );
};

export default About;
