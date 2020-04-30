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
max-width: 350px;
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
width: 100vw;
`;

export const Name = styled.h2`
text-transform: capitalize;
font-size: 2rem;
color: #282c34;
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
margin: .5rem 2.5rem .5rem .5rem;
`;

export const NameLabel = styled.label`
font-size: 1.5rem;
margin: .5rem 2.5rem .5rem 2.9rem;
`;

export const EmailLabel = styled.label`
font-size: 1.5rem;
margin: .5rem 2.5rem .5rem 3.2rem;
`;

export const Input = styled.input`
background-color: lightskyblue;
margin-left: .5rem;
border-radius: 3px;
`;

export const Email = styled.p`
font-size: 1.5rem;
color: #282c34;
`;

export const Password = styled.p`
font-size: 1.5rem;
color: #282c34;
`;

export const FormHeader = styled.h2`
background: linear-gradient(270deg, #b2c1ff 0%,#fffba3 80%);
color: #282c34;
width: 30rem;
margin: 2rem auto;
`;
