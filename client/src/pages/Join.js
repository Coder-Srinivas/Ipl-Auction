import { useContext, useState } from "react";
import Input from "../components/Input";
import { UserContext } from "../hooks/UserContext";

const io = require("socket.io-client");
const socket = io.connect("http://localhost:8000");
const { handleChange } = require("../utilities/handleChanges");

const Join = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>
        <h1>Join Page</h1>
        <button className="button">Create Auction</button>
        <button className="button">Join</button>
      </div>
    </>
  );
};

export default Join;
