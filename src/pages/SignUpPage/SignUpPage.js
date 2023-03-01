import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";

function SignUpPage() {
  const navigate = useNavigate();
  const {form, onChange} = useForm({nome:"",email:"", senha:""})

  const singUp = (event) => {
    event.preventDefault();
    console.log(form);
    const body = {name:form.nome, email:form.email, password: form.senha}
    axios.post(`https://api-cookenu.onrender.com/user/signup`, body)
    .then(
        (res)=>{
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            alert("Usuário cadastrado com sucesso! Seja Bem vindo :)")
            goToFeed(navigate)
        }
    )
    .catch((err)=>{
        console.log(err.response)
    })
    
};

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            required
            name="nome"
            type="text"
            value={form.nome}
            onChange={onChange}
            placeholder="Nome"
          />
        </InputContainer>
        <InputContainer>
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

        <button onClick={singUp}>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;