import React from 'react';

import './style.scss';

const Banner = () => {
    return (
        <section id="banner">
            <div className="hero">
                <h1>BENJAMIN GUELLE</h1>
                <p>DEVELOPPEUR WEB</p>
                <p>FRONT-END / UX</p>
                <p>BASE A CAEN, FRANCE</p>
            </div>
            <div className="ctn-btn-mob">
                <button type="button" className="btn-mob btn-C">Contact</button>
                <button type="button" className="btn-mob btn-P">Portfolio</button>
            </div>
        </section>
    )
}

export default Banner;