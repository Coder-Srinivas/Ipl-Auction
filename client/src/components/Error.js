const Error = ({ text }) => {
  return (
    <div className="error-component">
      <div className="error-component-image-container">
        <img
          alt="Indicates an error"
          class="error-component-image"
          src="Images/error.svg"
        />
      </div>
      <div className="error-component-text">{text}</div>
    </div>
  );
};

export default Error;
