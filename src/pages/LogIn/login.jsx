import React, { useState } from 'react'
import './login.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import axios from 'axios'

export const Login = () => {
    const [action, setAction] = useState("Iniciar Sesión");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);


    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/Login', {email, password})
        .then(res => {
            console.log(res);
            setLoginSuccess(true);
            setEmail('');
            setPassword('');
        })
        .catch(err => console.log(err));
    }
    
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder='Correo Electrónico' onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder='Contraseña' onChange={e => setPassword(e.target.value)}/>
                </div>
            </div>
           <div className='forgot-password'>¿Olvidaste tu contraseña?<span>Haz click aqui</span></div>
           <br></br>
           <button className='bttn-enviar' type="submit" onClick={handleSubmit}>Verificar información</button>
           {loginSuccess && <div className='success-message'>¡Inicio de sesión exitoso, Bienvenido!</div>}
        </form>
    </div>
  )
}
