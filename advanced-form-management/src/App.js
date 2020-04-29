import React, { useState } from 'react';
import Form from './components/Form';
import Users from './components/Users';
import { AppContainer, FormContainer } from './AppStyles';

function App() {
const [users, setUsers] = useState([]);
const addNewUser = user => {
  const newUser = {
    id: Date.now(),
    name: user.name,
    email: user.email,
    password: user.password,
    terms: user.terms
  };
  setUsers([...users, newUser]);
};

  return (
    <AppContainer>
      <FormContainer>
        <Form addNewUser={addNewUser} />
      </FormContainer>
      <Users users={users} />
    </AppContainer>
  );
}

export default App;
