import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      {/* Add more user details here */}
    </div>
  );
}

export default UserProfile;