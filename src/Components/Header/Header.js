import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useAuth();
  return (
    <div className="top-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid px-5">
          <a className="navbar-brand text-warning brand-logo" href="/">
            <i class="fas fa-2x fa-campground"></i> Trip Tale
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="d-flex align-items-center justify-content-center navbar-nav ms-auto mb-2 mb-lg-0 fs-5 ">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link">
                  Trips
                </a>
              </li>
              {user.email && (
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <small className="text-white">{user.displayName}</small>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/bookedEvents">
                        My Booked Trips
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/manageEvents">
                        Manage All Trips
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/addService">
                        Host A New Trip
                      </a>
                    </li>
                  </ul>
                </li>
              )}
              {/* {user.email && (
                <li className="nav-item">
                  <small className="nav-link fs-5">{user.displayName}</small>
                </li>
              )} */}
              {!user.email ? (
                <li className="nav-item">
                  <a href="/login" className="nav-link">
                    Log In
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <button onClick={handleSignOut} className="btn btn-warning">
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
