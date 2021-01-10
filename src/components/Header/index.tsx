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
               document.querySelector('.nav-bar_mob').classList.toggle('active-nav');
           } }>
               <div className="line"></div>
           </div>
           <nav className="nav-bar_mob">
               <Link to="#" className="nav-link_mob">Accueil</Link>
               <Link to="#" className="nav-link_mob">Bio</Link>
               <Link to="#" className="nav-link_mob">Compétences</Link>
               <Link to="#" className="nav-link_mob">Portfolio</Link>
               <Link to="#" className="nav-link_mob">Contact</Link>
           </nav>
           <nav className="nav-bar">
               <Link to="#" className="nav-link">Accueil</Link>
               <Link to="#" className="nav-link">Bio</Link>
               <Link to="#" className="nav-link">Compétences</Link>
               <Link to="#" className="nav-link">Portfolio</Link>
               <Link to="#" className="nav-link">Contact</Link>
           </nav>
        </header>
    )
}

export default Header;
