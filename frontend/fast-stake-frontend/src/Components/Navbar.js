import React, { useState} from 'react';
import './styles.css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [NavBar, setNavBar] = useState(false);

  function handleNavbar() {
    setNavBar(true)
  }

  function handlexNavbar(){
    setNavBar(false)
  }

  return (
    <div>
        { NavBar === true ? (
            <div className='XmarkDiv'>
            <div className='Topxbar'>
              <div>
              <div className='LogoX'><h1 id='LogoX'>P2P GAMING</h1></div>
              </div>
              <div className='xmark'>
              <i class="fa-solid fa-xmark fa-2xl" onClick={handlexNavbar} style={{ color: '#6023d1' }}></i>
              </div>
            </div>

            <div className='Xcontent'>
            <Link className='LinkXmarkP' to='/Home'>
            <p>Home</p>
            </Link>
              
              <Link className='LinkXmarkP' to='/About'>
              <p>About</p>
              </Link>
        
              <Link className='LinkXmarkP' to='/Services'>
              <p>Services</p>
              </Link>
              
              <Link className='LinkXmarkP' to='/Contact'>
              <p>Contact</p>
              </Link>
             
              <Link className='LinkXmarkP' to='/Login'>
              <p>Login</p>
              </Link>

              <Link className='LinkXmarkP' to='/Register'>
              <p className='Registerxmark'>Register</p>
              </Link>
              
            </div>
              
            </div>
        ) : (
          <div className='HandbugerDiv'>
          <div className='NavbarParent'>
          <div className='Navbar'>
          <div className='Logo'><h1 id='Logo'>P2P GAMING</h1></div>
          <div className='Handbuger' onClick={handleNavbar} ><FontAwesomeIcon className='navicon' icon={faBars} style={{ color: '#6023d1' }} /></div>
          
          </div>
        </div>
        </div>
        )}


    </div>
  )
}

export default Navbar