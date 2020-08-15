import React from 'react';
import Logo from '../../assets/img/logo.png';
import ButtonLink from './components/ButtonLink'
import Button from './components/Button'
import './Menu.css';

function Menu() {

    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="OrionFlix" />
            </a>

            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>    
        </nav>

    );
}

export default Menu;