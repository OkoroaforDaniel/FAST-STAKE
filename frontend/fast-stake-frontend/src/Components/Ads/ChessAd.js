import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Ads.css';
import Onlineuser1 from '../images/profile1.jpeg';
import Onlineuser2 from '../images/profile2.avif';
import Onlineuser3 from '../images/profile6.jpeg';
import Onlineuser4 from '../images/profile3.jpeg';

import Onlineuser6 from '../images/profile9.png';

import '@fortawesome/fontawesome-free/css/all.min.css';

const ChessAd = () => {
  return (
    <div>
        <div className='GameAds'>
            <p className='AdsGame'> 
            <Link className='AdLink' to="/Ads" >PES </Link>
            <Link className='AdLink' to="/CodAds">COD </Link> 
            <Link className='AdLink1' to="/ChessAd">CHESS</Link>  
            <Link className='AdLink' to="/FifaAd">FIFA</Link>
                
            </p>
            <Link to='/PostAds'>
            <i class="fa-solid fa-plus fa-xl" style={{ color: '#6023d1' }}></i>
            </Link>

        </div>
        <hr className='hr-Ads' />
        <div>

            <div className='AdsDiv'>
                <div className='ImgStarMeduim'>
                    <div className='first-ads-div'>
                    <img className='online-user-Ads' src={Onlineuser3} alt='online-user1' />
                    </div>
                    <div className='AdsStar'>
                    <i class="fa-solid fa-certificate fa-xs" style={{ color: '#6023d1' }}></i>
                    <i class="fa-solid fa-certificate fa-xs" style={{ color: '#6023d1' }}></i>
                    <i class="fa-solid fa-certificate fa-xs" style={{ color: '#6023d1' }}></i>
                    <i class="fa-solid fa-certificate fa-xs" style={{ color: '#6023d1' }}></i>
                    </div>
                    <p className='AdsMedium'>MOBILE</p>
                </div>
                <div className='Stake'>
                    <p className='AdsStake'>Stake : CHESS 50 USD</p>
                    <button className='StakeButton'>Stake</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ChessAd