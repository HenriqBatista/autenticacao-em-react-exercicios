import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import useForm from "../../hooks/useForm"
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const {form, onChange} = useForm({email:"", senha:""})
  
  const login = (event) => {
    event.preventDefault();
    console.log(form);
    const body = {email:form.email, password: form.senha}
    axios.post(`https://api-cookenu.onrender.com/user/login
    `, body)
    .then(
        (res)=>{
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            goToFeed(navigate)
        }
    )
    .catch((err)=>{
        console.log(err.response)
    })
    
};

  
  return (
    <main>
      <h1>Login</h1>
      <FormContainer>
        <InputContainer >
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            required
            name="email"
            type="text"
            value={form.email}
            onChange={onChange}
            placeholder="email"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            required
            name="senha"
            type="text"
            value={form.senha}
            onChange={onChange}
            placeholder="senha"
          />
        </InputContainer>
        <button onClick={login}>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
      
    </main>
  );
}

export default LoginPage;
