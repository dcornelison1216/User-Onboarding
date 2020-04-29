import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div`
background: linear-gradient(90deg, #b2c1ff 0%,#fffba3 80%);
width: 100%;
max-width: 250px;
box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, .5), 5px 5px 5px rgba(0, 0, 0, .25);
padding: 10px;
margin: 1rem;
text-align: left;
border-radius: 5px;
`;

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
flex-direction: row;
`;

const Name = styled.h2`
text-transform: capitalize;
`;

const Users = props => {
  return (
    <CardsContainer>
      {props.users.map(user => (
        <UserCard key={Date.now()}>
          <Name>{user.name}</Name>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </UserCard>
      ))}
    </CardsContainer>
  );
};

export default Users;
