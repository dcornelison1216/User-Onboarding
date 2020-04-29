import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { StyledForm, SubmitButton, Label, Input, NameLabel, EmailLabel, FormHeader } from '../AppStyles';
import { SchemaShape } from './SchemaShape';
import Users from './Users';

const Form = () => {

  const [formState, setFormState] = useState({name: "", email: "", password: "", terms: ""});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({name: "", email: "", password: "", terms: ""});
  const formSchema = yup.object().shape(SchemaShape);
  const [users, setUsers] = useState([]);

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.type === "checkbox" ? e.target.checked : e.target.value)
      .then(valid => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch(err => setErrors({ ...errors, [e.target.name]: err.errors[0] }));
  };

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setIsButtonDisabled(!valid);
    });
  }, [formState, formSchema]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(response => {
        setFormState({name: "", email: "", password: "", terms: ""});
        addNewUser(response.data);
        return response;
      })
      .catch(err => console.log(err.response));
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
  };

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
    <div className="form">
      <StyledForm onSubmit={formSubmit}>
        <FormHeader>Become a new user!</FormHeader>
        <NameLabel htmlFor="name">
          Name:
          <Input id="name" type="text" name="name" onChange={inputChange} value={formState.name} />
          {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        </NameLabel>

        <EmailLabel htmlFor="email">
          Email:
          <Input id="email" type="text" name="email" onChange={inputChange} value={formState.email} />
          {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
        </EmailLabel>

        <Label htmlFor="password">
          Password:
          <Input id="password" type="text" name="password" onChange={inputChange} value={formState.password} />
          {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
        </Label>

        <Label htmlFor="terms" className="terms">
          <Input type="checkbox" name="terms" id="terms" checked={formState.terms} onChange={inputChange} />
          Terms & Conditions
          {errors.terms.length > 0 ? <p className="error">{errors.terms}</p> : null}
        </Label>

        <SubmitButton type="submit" disabled={isButtonDisabled}>Submit</SubmitButton>

      </StyledForm>

      <Users users={users} />

    </div>
  );
}

export default Form;
