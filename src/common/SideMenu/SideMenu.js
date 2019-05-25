import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = () => {
  return (
    <div id="side-menu-wrapper">
      <div id="side-menu">
        <h1>Aishvarya</h1>
        <div className="g-logo-background text-center pt-3 pb-3">
          <h2 className={'font-weight-bold'}>Logo</h2>
        </div>

        <ul className="g-side-menu-ul pl-0 mb-0">
          <li>
            <NavLink exact className="pt-2 d-block" to="/">
              <span className="mr-3">
                <i className="fa fa-dashboard" />
              </span>
              <span className="text-capitalize">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact className="pt-2 d-block" to="/profile">
              <span className="mr-3">
                <i className="fa fa-users" />
              </span>
              <span className="text-capitalize">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact className="pt-2 d-block" to="/projects">
              <span className="mr-3">
                <i className="fa fa-address-card" />
              </span>
              <span className="text-capitalize">Projects</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
