import React from 'react';

import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';


export default function Footer() {
    return (
        <div className="footer">
            <div className="links">
                <a href="https://www.linkedin.com/in/leandrotrombini/" target="_blank" rel="noopener noreferrer" ><img src={Linkedin} alt="linkedin-img" className="img-linkedin" /></a>

                <a href="https://github.com/LeandroTrombini" target="_blank" rel="noopener noreferrer" ><img src={Github} alt="github-img" className="img-github" /></a>

            </div>
            <p>&copy; - Leandro Trombini</p>
        </div>
    )
}