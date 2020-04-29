import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { StyledForm, SubmitButton, Label, Input } from './formStyles'
import { SchemaShape } from './SchemaShape';

const Form = () => {

  const [post, setPost] = useState([]);
  const [formState, setFormState] = useState({name: "", email: "", password: "", terms: ""});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({name: "", email: "", password: "", terms: ""});
  const [users, setUsers] = useState([]);

  const formSchema = yup.object().shape(SchemaShape);

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
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(response => {
        setPost(response.data);
        setFormState({name: "", email: "", password: "", terms: ""});
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


  return (
    <StyledForm onSubmit={formSubmit}>
      <Label htmlFor="name">
        Name:
        <Input id="name" type="text" name="name" onChange={inputChange} value={formState.name} />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </Label>

      <Label htmlFor="email">
        Email:
        <Input id="email" type="text" name="email" onChange={inputChange} value={formState.email} />
        {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
      </Label>

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

      <pre>{JSON.stringify(post, null, 2)}</pre>

    </StyledForm>
  );
}

export default Form;
