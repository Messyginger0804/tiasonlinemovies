import React, { useEffect, useState } from 'react'
import './Navbar.css'

const logo = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'

const avatar = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'

function Navbar() {
    const [show, handleShow] = useState(false);

    const transistionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transistionNavbar);
        return () => window.removeEventListener('scroll', transistionNavbar)
    }, []);


    return (

        <div className={`nav ${show && 'nav-black'}`}>
            <div className="nav-content">

                <img className='nav-logo' src={logo} alt='netflix logo' />
                {/* <h1>this is the navbar</h1> */}

                <img className='nav-avatar' src={avatar} alt="avatar" />
            </div>

        </div>
    )
}

export default Navbar