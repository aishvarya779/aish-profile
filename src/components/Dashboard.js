import React, { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'React-App ' + 'Dashboard';
  });
  return (
    <div>
      <h1>This is Dashboard</h1>
    </div>
  );
};

export default Dashboard;
