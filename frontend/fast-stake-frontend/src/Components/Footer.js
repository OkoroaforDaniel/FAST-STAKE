import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {

  const [isHomeRoute, setIsHomeRoute] = useState(false);
  const [isFilterRoute, setIsFilterRoute] = useState(false);
  const [isMatchRoute, setIsMatchRoute] = useState(false);
  const [isAdsRoute, setIsAdsRoute] = useState(false);
  const [isProfileRoute, setIsProfileRoute] = useState(false);

  const location = useLocation();

  // Use the location.pathname to determine the current route
  useEffect(() => {
    setIsHomeRoute(location.pathname === '/Home');
    setIsFilterRoute(location.pathname === '/Filter');
    setIsMatchRoute(location.pathname === '/Match');
    setIsAdsRoute(location.pathname === '/Ads');
    setIsProfileRoute(location.pathname === '/Profile');
  }, [location.pathname]);

  return (
    <div className='Footer'>
      <div className='FooterNav'>
      <Link className='FooterIcon1' to="/Home" style={{ color: isHomeRoute ? '#6023d1' : '#b5bbc4'}}>
      <i class="fa-solid fa-house" ></i>
      </Link>
      <Link className='FooterIcon' to="/Filter" style={{ color: isFilterRoute ? '#6023d1' : '#b5bbc4' }}>
      <i class="fa-solid fa-filter" ></i>
      </Link>
      
      <Link className='FooterIcon' to="/Match" style={{ color: isMatchRoute ? '#6023d1' : '#b5bbc4' }}>
      <i class="fa-solid fa-gamepad fa-xl" ></i>
      </Link>
      
      <Link className='FooterIcon' to="/Ads" style={{ color: isAdsRoute ? '#6023d1' : '#b5bbc4' }}>
      <i class="fa-solid fa-rectangle-ad fa-xl" ></i>
      </Link>

      <Link className='FooterIcon' to="/Profile" style={{ color: isProfileRoute ? '#6023d1' : '#b5bbc4' }}>
      <i class="fa-solid fa-user fa-xl" ></i>
      </Link>
      </div>
    </div>
  )
}

export default Footer;