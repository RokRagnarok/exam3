import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import{ Link } from 'react-router-dom';

const Header = (props) => {

const {title, url} = props;




    
        return (
          <header className="App-Header">
              <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
        </a>
   <h1>{title}</h1>
          
          <ul>
            <li><Link to='/Foto'/>Foto</li>
            <li><Link to='/'>Nombre</Link> </li>
            <li><Link to='/Curriculum'>Curriculum</Link> </li>
            <li><Link to='/Person'>contacto</Link> </li>
            <li><Link to='/Inicio'>Nombre</Link> </li>
            <li><Link to='/Game'>GuesMyNumber</Link> </li>
            <li><Link to='/Animation'>Animation</Link> </li>
            <li><Link to='/Todo'>Todolist</Link> </li>
            <li><Link to='/Numbers'/>Numbers</li>
            <li><Link to='/Crypto'>Crypto</Link> </li>
          </ul>
          
          </header>
        );
    
        }
Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;