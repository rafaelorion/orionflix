import React from 'react';
import Logo from '../../assets/img/logo.png';
import ButtonLink from './components/ButtonLink'
import Button from './components/Button'
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {

    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="OrionFlix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>    
        </nav>

    );
}

export default Menu;