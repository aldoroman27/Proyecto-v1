import React, { useState } from 'react'
import './login.css'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Payment } from '../../pages/Payment/payment.jsx'

export const Login = () => {
    const [action, setAction] = useState('Iniciar Sesión');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/Login', { email, password });
            console.log(res);
            if (res.data === 'Login Success') {
                console.log('Inicio de sesión exitoso');
                setLoginSuccess(true);
                setLoginError('');
            } else {
                console.log('Credenciales incorrectas');
                setLoginSuccess(false);
                setLoginError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error(error);
            setLoginSuccess(false);
            setLoginError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <div className='input'>
                        <img src={email_icon} alt='' />
                        <input type='email' placeholder='Correo Electrónico' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <input type='password' placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <br></br>
                <button className='bttn-enviar' type='submit'>
                    Verificar información
                </button>
                {loginError && <div className='error-message'>{loginError}</div>}
                {loginSuccess && (
                    <div>
                        <div className='success-message'>¡Inicio de sesión exitoso, Ya puedes acceder a la tienda!</div>
                        <button onClick={() => navigate("/")}>Ir a la tienda</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Login;
