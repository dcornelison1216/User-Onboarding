import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

const FormDiv = styled.div`
display: flex;
flex-direction: column;
`;

const SubmitButton = styled.button`
font-size: 1.6rem;
background-color: lightgray;
border-radius: 5px;
`;

const Label = styled.label`
font-size: 1.5rem;
margin: .5rem;
`;

const Input = styled.input`
background-color: lightskyblue;
margin-left: .5rem;
border-radius: 3px;
`;

const Form = () => {
  return (
    <FormDiv>
      <Label htmlFor="name">
        Name:
        <Input id="name" type="text" name="name" />
      </Label>

      <Label htmlFor="email">
        Email:
        <Input id="email" type="text" name="email" />
      </Label>

      <Label htmlFor="password">
        Password:
        <Input id="password" type="text" name="password" />
      </Label>

      <Label htmlFor="terms">
        Terms & Conditions
        <Input type="checkbox" name="terms" id="terms" checked={false} />
      </Label>

      <Label htmlFor="submit">
        <SubmitButton type="submit" disabled={false}>Submit</SubmitButton>
      </Label>
    </FormDiv>
  );
}

export default Form;
