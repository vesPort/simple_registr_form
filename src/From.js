import React, { useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  let user = {};

  function signUpUser(email, pass, evt) {
    evt.preventDefault();
    user = {
      email: email,
      pass: pass,
    };

    console.log(user);
  }
  return (
    <form>
      <div className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={evt => setPass(evt.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(evt) => signUpUser(email, pass,evt )}>
          Submit
        </button>
      </div>
    </form>
  );
};
