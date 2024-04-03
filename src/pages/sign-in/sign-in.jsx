import React, { useState } from 'react'
import './sign-in.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import axios from 'axios'

export const SignIn = () => {
    const [action, setAction] = useState("Registrarse");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/SignIn', {name,email, password})
        .then(res => console.log(res))
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
                    <img src={user_icon} alt=""/>
                    <input type="user" placeholder='Nombre' onChange={e => setName(e.target.value)}/>
                </div>
                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder='Correo Electrónico' onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder='Contraseña' onChange={e => setPassword(e.target.value)}/>
                </div>
            </div>
            <br></br>
           <button className='bttn-enviar' type="submit" onClick={handleSubmit}>Enviar Información</button>
        </form>
    </div>
  )
}
