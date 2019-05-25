import React, { Component } from 'react';
import './Mainpagewrapper.css';

const Mainpagewrapper = props => {
  return (
    <div id={'main-page-wrapper'} className={props.toggleClass ? 'hide' : null}>
      {props.children}
    </div>
  );
};

export default Mainpagewrapper;
