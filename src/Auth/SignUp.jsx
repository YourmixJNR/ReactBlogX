import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import AuthContext from "../Context/AuthContext";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Simplified signUp call
    const { error } = await signUp({ email, password });

    if (error) {
      setError(error);
      setMessage("Error with email or password");
      return;
    }

    navigate("/");
  };

  return (
    <div className="text-center div">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          ref={emailRef}
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign up
        </button>
        <Link to="/login">Login</Link>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
