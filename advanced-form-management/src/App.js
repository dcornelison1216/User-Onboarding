import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Users from './components/Users';

function App() {
const [users, setUsers] = useState([
  {
    id: 1,
    name: 'Derek',
    email: 'dcornelison1216@gmail.com',
    password: '************',
    terms: true
  }
]);
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
    <div className="App">
      <header className="App-header">
        <Form addNewUser={addNewUser} />
        <Users users={users} />
      </header>
    </div>
  );
}

export default App;
