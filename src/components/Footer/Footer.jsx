import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import minilogo from '../../images/logo_mini_white.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logomini-wrapper">
          <img src={minilogo} alt="Logotipo" />
        </div>
        <div className="footerRight">
          <p className="name">feito por Alexandre Mariano</p>
          <div className="iconsContainer">
            <a className="iconLink" href="https://github.com/devmariano" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a className="iconLink" href="https://www.linkedin.com/in/alexandre-mariano-04103012b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <img className="img" src="https://avatars.githubusercontent.com/u/86934710?v=4" alt="Avatar" />
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
