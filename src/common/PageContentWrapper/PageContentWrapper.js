import React, { Component } from 'react';

const PageContentWrapper = props => {
  return (
    <React.Fragment>
      <div id={'main-page-content-wrapper'}>{props.children}</div>
    </React.Fragment>
  );
};

export default PageContentWrapper;
