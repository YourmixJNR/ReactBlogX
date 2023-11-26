import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import AuthContext from "../../Context/AuthContext";
import "./Layouts.css";

const Header = () => {
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      // Set user session using stored tokens
      supabase.auth.setSession(accessToken);
    }
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
        <div className="container px-4 px-lg-5">
          <Link to="#" className="navbar-brand">
            Start Bootstrap
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <Link to="#" className="nav-link px-lg-3 py-3 py-lg-4">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link px-lg-3 py-3 py-lg-4">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link px-lg-3 py-3 py-lg-4">
                  Sample Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link px-lg-3 py-3 py-lg-4">
                  Contact
                </Link>
              </li>
              <li style={{ color: 'white' }} className="nav-item">
                {user === null ? (
                  <p>
                    <Link to="/login">Sign In</Link>
                  </p>
                ) : (
                  <div>
                    {user.email} <br />
                    <p onClick={handleSignOut}>Sign Out</p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
