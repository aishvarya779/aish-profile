import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = 'React-App Projects';
  });
  return (
    <div>
      <h1>This is Projects</h1>
    </div>
  );
};

export default Projects;
