import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    document.title = 'React-App ' + 'Profile';
  });
  return (
    <div>
      <h1>This is Profile</h1>
    </div>
  );
};

export default Profile;
