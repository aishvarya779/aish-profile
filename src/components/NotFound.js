import React, { useEffect } from 'react';

const NotFound = ({ location }) => {
  useEffect(() => {
    document.title = 'React-App' + location.pathname.split('/')[1];
  });
  return (
    <div>
      <h1>
        404: Page{' '}
        <span style={NotFoundCss.path}>{location.pathname.split('/')[1]}</span>
        not found
      </h1>
    </div>
  );
};

const NotFoundCss = {
  path: {
    textDecoration: 'underline',
    color: 'red'
  }
};
export default NotFound;
