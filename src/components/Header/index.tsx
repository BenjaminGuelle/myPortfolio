import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const Header = ({ siteTitle }) => {
    return (
        <header>
            <nav className="nav">
                <div className="nav-logo">
                    LOGO
                </div>
                <div className="ctn-links">
                    <Link to="#" className="nav-link">Accueil</Link>
                    <Link to="#" className="nav-link">Bio</Link>
                    <Link to="#" className="nav-link">Compétences</Link>
                    <Link to="#" className="nav-link">Portfolio</Link>
                    <Link to="#" className="nav-link">Contact</Link>
                </div>
                <button type="button" className="btn-mob btn-menu">
                    Menu
                </button>
                <button type="button" className="btn-mob btn-contact">
                    Contact
                </button>
            </nav>
        </header>
    )
}

export default Header;