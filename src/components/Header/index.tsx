import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const Header = ({ siteTitle }) => {
    return (
        <header>
           <div className="logo">
               <span>B.G</span>
           </div>
           <div id="btn-menu" onClick={ () => {
               document.getElementById('btn-menu').classList.toggle('active-btn-toggle');
               document.querySelector('.nav-bar').classList.toggle('active-nav');
           } }>
               <div className="line"></div>
           </div>
           <nav className="nav-bar">
               <Link to="#" className="nav-link">Accueil</Link>
               <Link to="#" className="nav-link">Bio</Link>
               <Link to="#" className="nav-link">Compétences</Link>
               <Link to="#" className="nav-link">Portfolio</Link>
           </nav>
        </header>
    )
}

export default Header;