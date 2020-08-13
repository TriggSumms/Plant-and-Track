
import React, { useState, useEffect } from 'react';
import JumboUserCard from './JumboUserCard';
import UserManager from '../../modules/UserManager';

const JumboUserList = (props) => {
  // The initial state is an empty array
  const [user, setUser] = useState([]);
  const id = sessionStorage.getItem("activeUser")
  const getUser = (id) => {
    // After the data comes back from the API, we
    //  use the setUsers function to update state
    return UserManager.getUser(id).then(userFromAPI => {
      setUser(userFromAPI)
    });
  };

  // got the users from the API on the component's first render
  useEffect(() => {
    getUser(id);
  }, []);

  // Finally we use map() to "loop over" the users array to show a list of animal cards
  return (
      <div>
      <JumboUserCard 
      key={user.id}
      user={user}
      name={user.name}
      id={user.id}
      {...props} 
       />
    </div>
   
  );
};
export default JumboUserList;