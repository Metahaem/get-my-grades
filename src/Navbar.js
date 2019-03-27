import React from 'react';
import {Link} from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to={`/people`} className='headerText'>People</Link>
            <Link to={`/`}> <Logo /> </Link>
            <Link to={`/about`} className='headerText'>About</Link>
        </div>
    )
}

export default Navbar