import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledMenu = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative; /* Dodajemy */
  }

  li {
    margin: 10px;
    position: relative;
    flex: 1;
    text-align: center;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 15px;
    transition: color 0.3s ease;
    display: block;
    position: relative; /* Dodajemy */
  }

  a:hover {
    color: #ff4500;
  }

  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #ff4500;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  /* Dodajemy linie oddzielającą na dole */
  ul::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      position: absolute;
      top: 0;
      left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
      width: 100%;
      background-color: #fff;
      transition: left 0.3s ease;
      z-index: 1;
    }

    li {
      margin: 10px 0;
    }
  }

  .burger {
    display: none;
  }

  @media (max-width: 768px) {
    .burger {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }

    .burger div {
      width: 25px;
      height: 3px;
      background-color: #333;
      margin: 5px;
      transition: all 0.3s ease;
    }
  }
`;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicjalizacja biblioteki AOS
  }, []);

  return (
    <StyledMenu isOpen={isOpen}>
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li data-aos="fade-right"><Link to="/horyzont" onClick={closeMenu}>O Nas</Link></li>
        <li data-aos="fade-left"><Link to="/czartery" onClick={closeMenu}>Czartery</Link></li>
        <li data-aos="fade-up"><Link to="/terminy" onClick={closeMenu}>Terminy</Link></li>
        <li data-aos="fade-down"><Link to="/cennik" onClick={closeMenu}>Cennik</Link></li>
        <li data-aos="fade-right"><Link to="/jachty" onClick={closeMenu}>Jachty</Link></li>
        <li data-aos="fade-left"><Link to="/zdjecia-lodzi" onClick={closeMenu}>Galeria</Link></li>
        <li data-aos="fade-up"><Link to="/regulamin" onClick={closeMenu}>Regulamin</Link></li>
        <li data-aos="fade-down"><Link to="/napisz-do-nas" onClick={closeMenu}>Kontakt</Link></li>
      </ul>
    </StyledMenu>
  );
}

export default Menu;
