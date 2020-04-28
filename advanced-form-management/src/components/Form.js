import React from 'react';
import styled from './styled-components';

const FormDiv = styled.div`
display: flex;
flex-direction: column;
`;

const Form = () => {
  return (
    <FormDiv>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" name="name" />
      </label>

      <label htmlFor="email">
        Email:
        <input id="email" type="text" name="email" />
      </label>
    </FormDiv>
  );
}

export default Form;
