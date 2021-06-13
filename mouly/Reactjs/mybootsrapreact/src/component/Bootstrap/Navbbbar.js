import React, { useState } from 'react';
import Linnk from '../Linnk';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import '../../css/Mynew.css'


function Navbbbar() {
    const [click,setClick]= useState(false);
    const [button,setButton]= useState(true);
    const handleClick =()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton = ()=>{
        if(window.innerWidth  <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);

    return (
        
        <>
            <nav className='navbar'>
                <div className='navbar-content'>
                    <Link to='/' className='navbar-logo'>
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick} >
                        <i className={click?'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className-={click?'nav-menu active':'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMobileMenu}>Home</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/service' className='nav-link' onClick={closeMobileMenu}>Service</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/product' className='nav-link' onClick={closeMobileMenu}>Products</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-link' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle = 'btn--outline'>Sign Up</Button>}
                </div>
            </nav>

        </>
    )
}

export default Navbbbar;
