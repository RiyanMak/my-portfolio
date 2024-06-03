import React from 'react';

const Header = () => {
    return(
        <header>
            <nav>
                <div className="logo">{
                    <a href="#">My Portfolio</a>
                }</div>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>


    );
};

export default Header;