import React from 'react';
import './payment.css';
import user_icon from '../../assets/person.png';
import email from '../../assets/email.png';
import home from '../../assets/house.png';
import hashtag from '../../assets/hashtag-2.png';
import phone from '../../assets/telefono.png';
import { useNavigate } from 'react-router-dom'

export const Payment = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
        <h1>Proceder al pago</h1>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt=''/>
                <input type='name' placeholder='Nombre Completo'/>
            </div>
            <div className='input'>
                <img src={email} alt=''/>
                <input type='email' placeholder='Correo Electronico'/>
            </div>
            <div className='input'>
                <img src={phone} alt=''/>
                <input type='phone' placeholder='Número Telefonico'/>
            </div>
            <div className='input'>
                <img src={home} alt=''/>
                <input type='adress' placeholder='Domicilio'/>
            </div>
            <div className='input'>
                <img src={hashtag} alt=''/>
                <input type='adreesNumber' placeholder='# Numero de Casa'/>
            </div>
            <div className='botones'>
                <button onClick={() => navigate("/Cart")}>Regresar al carrito</button>
                <button>Pagar</button>
            </div>
        </div>
    </div>
 )
}
