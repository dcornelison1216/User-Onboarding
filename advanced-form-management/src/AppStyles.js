import styled from 'styled-components'

export const AppContainer = styled.div`
text-align: center;
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column
`;

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

export const UserCard = styled.div`
background: linear-gradient(90deg, #b2c1ff 0%,#fffba3 80%);
width: 100%;
max-width: 250px;
box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, .5), 5px 5px 5px rgba(0, 0, 0, .25);
padding: 10px;
margin: 1rem;
text-align: left;
border-radius: 5px;
`;

export const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
flex-direction: row;
`;

export const Name = styled.h2`
text-transform: capitalize;
`;

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
`;

export const SubmitButton = styled.button`
font-size: 1.6rem;
background-color: lightgray;
border-radius: 5px;
width: 150px;
margin: auto;
`;

export const Label = styled.label`
font-size: 1.5rem;
margin: .5rem;
`;

export const Input = styled.input`
background-color: lightskyblue;
margin-left: .5rem;
border-radius: 3px;
`;
