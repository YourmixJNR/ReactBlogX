import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Simplified signUp call
    const { data, error } = await signIn({ email, password });

    if (error) {
      setMessage(error.message);
      return;
    } else {
      navigate("/");
    }
  };

  return (
    <div className="text-center div">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          ref={emailRef}
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
       <Link to="/signup">SignUp</Link>
      {message}
    </div>
  );
};

export default Login;
