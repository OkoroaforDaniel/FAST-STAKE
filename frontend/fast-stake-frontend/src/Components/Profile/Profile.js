import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Profile.css';
import GreenIcon from '../images/green-icon.png';
import Onlineuser1 from '../images/profile1.jpeg';
import Onlineuser2 from '../images/profile2.avif';
import Onlineuser3 from '../images/profile6.jpeg';
import Onlineuser4 from '../images/profile3.jpeg';
import Onlineuser5 from '../images/profile4.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Footer';

const Profile = () => {
  return (
    <div>
        <div className='AvaterRatingChat'>
            <div className='UsersProfile'>
            <div className='FirstOnlineUserProfile'>
            <img className='OnlineUser1Profile' src={Onlineuser1} alt='online-user1' />
            </div>
            <div>
            <img className='OnlineIcon' src={GreenIcon} alt='GreenIcon' />
            </div>
            </div>

            <div className='RatingChatP'>
                <div className='RatingChat'>
                    <div>
                    <i class="fa-solid fa-certificate fa-xs" style={{ color: '#FFCD3C' }}></i>
                    <i class="fa-solid fa-certificate fa-xs" style={{ color: '#FFCD3C' }}></i>
                    <i class="fa-solid fa-certificate fa-xs" style={{ color: '#FFCD3C' }}></i>
                    <i class="fa-solid fa-certificate fa-xs" style={{ color: '#FFCD3C' }}></i>
                    <i class="fa-solid fa-certificate fa-xs" style={{ color: '#FFCD3C' }}></i>
                    </div>
                    <Link className='Chat' to='/Chat'>
                    <div className='ChatIcon'>
                    <i class="fa-regular fa-message fa-xl" style={{ color: '#6023d1' }}></i>
                    </div>
                    </Link>
                </div>
                <p className='Game'> PES | COD | CHESS| FIFA </p>
            </div>
        </div>
        <div className='FeedbackDiv'>
            <div>
            <h3>FEEDBACK</h3>
            <h4 className='Feed'>All | Positive(5) | Negative(0)</h4>
            </div>
            <hr className="hr-custom" />
            <div className='FeedBack'>
                <img className='OnlineUser1Feedback' src={Onlineuser2} alt='online-user1' />
                <p className='FeedbackText'>Nice Game</p>
            </div>
            <div className='FeedBack'>
                <img className='OnlineUser1Feedback' src={Onlineuser3} alt='online-user1' />
                <p  className='FeedbackText'>Polite, Safe, Honest</p>
            </div>
            <div className='FeedBack'>
                <img className='OnlineUser1Feedback' src={Onlineuser4} alt='online-user1' />
                <p className='FeedbackText'>patient, trustworthy, Nice Game</p>
            </div>
            <div className='FeedBack'>
                <img className='OnlineUser1Feedback' src={Onlineuser5} alt='online-user1' />
                <p  className='FeedbackText'>Nice Game, Polite, Honest, Friendly</p>
            </div>
        </div>
        
    </div>
  )
}

export default Profile;