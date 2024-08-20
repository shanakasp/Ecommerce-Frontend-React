import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Register = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  function signUp() {
    console.log(name, email, password);
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
