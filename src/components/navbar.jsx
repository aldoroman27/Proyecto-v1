import React from 'react';
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { Bag } from 'phosphor-react'
import {User} from 'phosphor-react'
import { Check } from 'phosphor-react'
import { House } from 'phosphor-react'
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h1>El ChivaPuma</h1>
        <div className='links'>
            <Link to = "/Home"><House size={32}/></Link>
            <Link to="/"><Bag size={32}/></Link>
            <Link to="/cart"><ShoppingCart size={32}/></Link>
            <Link to="/Login"><User size={32}/></Link>
            <Link to="/SignIn"><Check size={32}/></Link>
        </div>
    </div>
  );
};