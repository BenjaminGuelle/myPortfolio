import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const Header = ({ siteTitle }) => {
    return (
        <header>
            <nav className="nav">
                <div className="nav-logo">
                    <span>B.G</span>
                </div>
                <div className="ctn-links_L">
                    <Link to="#" className="nav-link">Accueil</Link>
                    <Link to="#" className="nav-link">Bio</Link>
                    <Link to="#" className="nav-link">Compétences</Link>
                    <Link to="#" className="nav-link">Portfolio</Link>
                    <Link to="#" className="nav-link">Contact</Link>
                </div>
                
                <button
                    type="button"
                    className="btn-menu"
                    onClick={
                        () => {
                            document.querySelector('.ctn-links').classList.toggle('opened');
                            document.querySelector('.btn-menu span').classList.toggle('active');
                        }
                    }>
                    <span></span>
                </button>                
            </nav>
            <div className="ctn-links">
                <Link to="#" className="nav-link">Accueil</Link>
                <Link to="#" className="nav-link">Bio</Link>
                <Link to="#" className="nav-link">Compétences</Link>
                <Link to="#" className="nav-link">Portfolio</Link>
                <Link to="#" className="nav-link">Contact</Link>
            </div>
        </header>
    )
}

export default Header;