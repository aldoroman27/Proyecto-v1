import React from 'react'
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import liga from "../../assets/liga-mx.jpg";
import chivas from "../../assets/chivas-logo.png";
import pumas from "../../assets/pumas-logo.jpeg";

export const Home = () => {
  return (
    <div className='container'>
        <h1 className='title'>¡Conoce más sobre nosotros y nuestro mercado!</h1>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={liga} alt="Liga MX" />
                <br></br>
                <br></br>
                <h5>Todos los jerseys de los equipos de la liga Mx</h5>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={chivas} alt="Chivas" />
                <br></br>
                <br></br>
                <h5>Conoce la nueva piel del rebaño temporada 23-24</h5>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={pumas} alt="Pumas" />
                <br></br>
                <br></br>
                <h5>Conoce la nueva vestimenta de los universitarios</h5>
            </Carousel.Item>
      </Carousel>
      <br></br>
      <h2>Esta página está pensada en aquellos amantes de sus equipos, que realmente sienten la pasión del futbol</h2>
    </div>
  )
}
