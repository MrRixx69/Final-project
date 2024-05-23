import './LoginPage.css';

import Alert from 'react-bootstrap/Alert';

import EmailIcon from '../Imgs/EmailIcon.png';
import PassIcon from '../Imgs/PassIcon.png';
import axios from 'axios';
import { useState } from 'react';

function LoginPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();

        let response = await axios.post('http://143.198.156.185/api/auth/login', {
            "email": email,
            "password": password
        }).then(function (value) {
            setSuccess(`Seja bem vindo, ${value.data.user.name}!`);
            setError(null);
            setTimeout(() => {
                window.location.href = '/movies';


            },3000)
          })
          .catch(function (value) {
            console.log(value);
            setError("Senha/Email equivocados");
            setSuccess(null);
          });
        }

    return(

        <>
        
        <div className='Cima'>

<h3 className='title'>FilmFinder</h3>
<h4 className='contact'> Contate-nos</h4>

</div>

<div className='containerCad'>

<div className='header'>

    <div className='text'>Login</div>
    <div className='underline'></div>

</div>

<form onSubmit={handleSubmit}>
    <div className='input'>
        <img src={EmailIcon} alt='' className='size'></img>
        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
    </div>

    <div className='input'>
        <img src={PassIcon} alt='' className='size'></img>
        <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}></input>
    </div>

<div className='forget-pass'>Esqueceu sua senha? <span>Clique Aqui</span></div>

<div className='submit-conteiner'>
   <a href='/register'> <button className='submit'>Register</button></a>
   <a href='/PrincipalPage'><input type='submit' className='submit' placeholder='Enviar' value={"Concluido"}></input></a>
</div>

</form>

{error && <Alert variant="primary">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}


</div>


        </>

    )

}
export default LoginPage;