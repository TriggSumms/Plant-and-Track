import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import UserManager from '../../modules/UserManager';





const UserList = (props) => {
  const [user, setUser] = useState([]);
  const id = sessionStorage.getItem("activeUser")
  const getUser = (id) => {
    return UserManager.getUser(id).then(userFromAPI => {
      setUser(userFromAPI)
    });
  };




  // got the users from the API on the component's first render
  useEffect(() => {
    getUser(id);
  }, []);

  return (
    <div>
      <UserCard
        key={user.id}
        user={user}
        name={user.name}
        id={user.id}
        {...props}
      />
    </div>

  );
};
export default UserList;