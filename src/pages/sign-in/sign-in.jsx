import React, { useState } from 'react'
import './sign-in.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import axios from 'axios'

export const SignIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/SignIn', { email, password, name })
            .then(res => {
                console.log(res.data); // Mostrar el mensaje enviado por el servidor
                setMessage(res.data.message); // Establecer el mensaje en el estado
            })
            .catch(err => {
                console.error(err); // Manejar errores en la consola
                setMessage('Error interno del servidor'); // Establecer mensaje de error en el estado
            });
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Registrarse</div>
                <div className='underline'></div>
            </div>
            {message && <div className='message'>{message}</div>}
            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <div className='input'>
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder='Nombre' value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder='Correo Electrónico' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt=""/>
                        <input type="password" placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <br />
               <button className='bttn-enviar' type="submit">Enviar Información</button>
            </form>
        </div>
    );
};

