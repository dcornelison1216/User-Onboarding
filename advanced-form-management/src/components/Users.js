import React from 'react';
import { UserCard, CardsContainer, Name } from '../AppStyles';

const Users = props => {
  var uniqueUsers = props.users.filter(function(item, index){
    return props.users.indexOf(item) >= index;
  })
  console.log("uniqueUsers", uniqueUsers);
  return (
    <CardsContainer>
      {uniqueUsers.map(user => (
        <UserCard key={user.id}>
          <Name>{user.name}</Name>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </UserCard>
      ))}
    </CardsContainer>
  );
};

export default Users;
