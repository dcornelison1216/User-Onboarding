import React from 'react';
import { UserCard, CardsContainer, Name, Email, Password } from '../AppStyles';

const Users = props => {
  return (
    <CardsContainer>
      {props.users.map(user => (
        <UserCard key={user.id}>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
          <Password>Password: {user.password}</Password>
        </UserCard>
      ))}
    </CardsContainer>
  );
};

export default Users;
