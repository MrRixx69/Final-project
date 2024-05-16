import './LoginPage.css';



import UserIcon from '../Imgs/UserIcon.png';
import EmailIcon from '../Imgs/EmailIcon.png';
import PassIcon from '../Imgs/PassIcon.png';
import Netflix from '../Imgs/Netflix.jpg';

function LoginPage(){

return(


<>


    <div className='Cima'>

        <h3 className='title'>FilmFinder</h3>
        <h4 className='contact'> Contate-nos</h4>

    </div>

    <div className='container'>

        <div className='header'>

            <div className='text'>Novo Usuário</div>
            <div className='underline'></div>

        </div>

        <div className='inputs'>
            <div className='input'>
                <img src={UserIcon} alt='' className='size'></img>
                <input type='text' placeholder='Nome'></input>
            </div>

            <div className='input'>
                <img src={EmailIcon} alt='' className='size'></img>
                <input type='email' placeholder='Email'></input>
            </div>

            <div className='input'>
                <img src={PassIcon} alt='' className='size'></img>
                <input type='password' placeholder='Senha'></input>
            </div>

        <div className='forget-pass'>Esqueceu sua senha? <span>Clique Aqui</span></div>

        <div className='submit-conteiner'>
            <div className='submit'>Logar</div><div className='submit'>Entrar</div>
        </div>

        </div>

    </div>

</>

    
    
)

}
export default LoginPage;