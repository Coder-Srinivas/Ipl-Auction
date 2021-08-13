import Form from "./Form";

const JoinAuction = ({
  socket,
  user,
  room,
  setRoom,
  errors,
  loading,
  setLoading,
}) => {
  const data = [
    {
      type: "room",
      title: "Room Id",
      placeholder: "Enter the auction room id",
      onChange: (value) => {
        setRoom(value);
      },
      icon: "",
      error: errors.room,
    },
  ];

  const message = () => {
    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    socket.emit("joinAuction", {
      username: user.username,
      room,
    });
    setLoading(false);
  };

  return (
    <div>
      <Form
        title="Join Auction"
        data={data}
        onFormSubmit={handleSubmit}
        message={message}
        error={errors.form}
        loading={loading}
      />
    </div>
  );
};

export default JoinAuction;
