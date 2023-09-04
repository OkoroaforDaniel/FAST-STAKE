import React from 'react';
import './styles.css/Home.css';
import Onlineuser1 from './images/profile1.jpeg';
import Onlineuser2 from './images/profile2.avif';
import Onlineuser3 from './images/profile6.jpeg';
import Onlineuser4 from './images/profile3.jpeg';
import Onlineuser5 from './images/profile4.jpeg';
import Onlineuser6 from './images/profile9.png';
import Onlineuser7 from './images/profile8.png';
import Onlineuser8 from './images/profile7.webp';
import ChatIcon from './images/chat-icon.png';
import GreenIcon from './images/green-icon.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='Body'>
      <div className='BodyHome'>
      
        <div className='Users'>
        <div className='first-online-user'>
        <img className='online-user1' src={Onlineuser1} alt='online-user1' />
        </div>
        <div>
        <Link to='/Profile'>
        <img className='green-icon' src={GreenIcon} alt='GreenIcon' />
        </Link>
        </div>
        </div>

      <div className='Users'>
      <div className='first-online-user'>
      <img className='online-user1' src={Onlineuser2} alt='online-user1' />
      </div>
      <div>
      <img className='green-icon' src={GreenIcon} alt='GreenIcon' />
      </div>
      </div>

      <div className='Users'>
      <div className='first-online-user'>
      <img className='online-user1' src={Onlineuser3} alt='online-user1' />
      </div>
      <div>
      <img className='green-icon' src={GreenIcon} alt='GreenIcon' />
      </div>
      </div>

      <div className='Users'>
      <div className='first-online-user'>
      <img className='online-user1' src={Onlineuser4} alt='online-user1' />
      </div>
      <div>
      <img className='green-icon' src={GreenIcon} alt='GreenIcon' />
      </div>
      </div>

      <div className='Users'>
      <div className='first-online-user'>
      <img className='online-user1' src={Onlineuser5} alt='online-user1' />
      </div>
      <div>
      <img className='green-icon' src={GreenIcon} alt='GreenIcon' />
      </div>
      </div>

      <p className='VIewMore'>More ...</p>

      </div>

      {/* when the user has no chat history */}

      {/* <div className='ChatIcon'>
      <img className='ChatIconImage' src={ChatIcon} alt='chat-icon' />
      <p>You have no chat history</p>

      </div> */}

      <div className='Chatted'>
        <div className='fisrtCahatDiv'>
        <Link className="LinkDiv" to="/Chat">
          <div className='ChatDiv'>
            <div className='first-chat-div'>
            <img className='online-user-chat' src={Onlineuser1} alt='online-user1' />
            </div>
            <div>
              <p className='UserName'>Spartacus</p>
              <p className='ChatText'>Are you ready</p>
            </div>
          </div>
        </Link>
        </div>

        <div className='ChatDiv'>
          <div className='first-chat-div'>
          <img className='online-user-chat' src={Onlineuser6} alt='online-user1' />
          </div>
          <div>
          <p className='UserName'>Winner</p>
            <p className='ChatText'>Hi</p>
          </div>
        </div>

        <div className='ChatDiv'>
          <div className='first-chat-div'>
          <img className='online-user-chat' src={Onlineuser4} alt='online-user1' />
          </div>
          <div>
          <p className='UserName'>King123</p>
            <p className='ChatText'>I'm ready to stake</p>
          </div>
        </div>

        <div className='ChatDiv'>
          <div className='first-chat-div'>
          <img className='online-user-chat' src={Onlineuser8} alt='online-user1' />
          </div>
          <div>
          <p className='UserName'>Emma247</p>
            <p className='ChatText'>I'm free now</p>
          </div>
        </div>

        <div className='ChatDiv'>
          <div className='first-chat-div'>
          <img className='online-user-chat' src={Onlineuser3} alt='online-user1' />
          </div>
          <div>
          <p className='UserName'>Gamer247</p>
            <p className='ChatText'>Let's go  ...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home