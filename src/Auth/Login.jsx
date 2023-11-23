import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [error, setError] = useState(null);
  const[message, setMessage] = useState("")
  
  return (
    <div className="text-center div">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
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
        <Link to="/signup">SignUp</Link>
      </form>
    </div>
  );
};

export default Login;
