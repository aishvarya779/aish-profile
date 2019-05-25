import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.css';
import userPhoto from './../../assets/images/user.png';
const MainMenu = props => {
  return (
    <div id="top-menu-wrapper">
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div onClick={props.toggleSideMenu}>
            <span className="navbar-toggler-icon" />
          </div>
          <div className="container-fluid g-menu-links">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/" exact>
                  kenya
                </NavLink>
              </li>
              <li className="nav-item float-sm-right">
                <NavLink className="nav-link text-uppercase" to="/" exact>
                  uganda
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li>
                <div className="d-flex flex-row">
                  <div className="p-0 g-profile-text-container">
                    <div className="navbar-text text-right text-capitalize p-0 m-0 g-profile-pic-text">
                      {props.adminEmail}
                    </div>
                    <div className="p-0 m-0" style={{ TextAlign: 'right' }}>
                      <NavLink
                        to="/logout"
                        className="g-profile-logout text-right"
                      >
                        Logout
                      </NavLink>
                    </div>
                  </div>

                  <div className="p-0 m-0">
                    <img
                      className="rounded-circle g-userprofile"
                      src={userPhoto}
                      alt="profile-pic"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MainMenu;
