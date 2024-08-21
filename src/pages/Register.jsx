import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    let item = { name, email, password };
    console.log(item);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        item,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response", response.data);
      localStorage.setItem("userName", response.data.name);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("userID", response.data.id);

      navigate("/add");
    } catch (error) {
      console.error("There was a problem with your Axios request:", error);
    }
  }

  return (
    <div class=" col-6 offset-sm-3">
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        className="form-control"
      ></input>
      <br></br>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        className="form-control"
      ></input>
      <br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        className="form-control"
      ></input>
      <br></br>

      <Button onClick={signUp}>Sign up</Button>
    </div>
  );
};

export default Register;
