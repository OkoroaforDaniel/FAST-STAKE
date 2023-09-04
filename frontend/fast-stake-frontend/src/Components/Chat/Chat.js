import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Chat.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Onlineuser1 from '../images/profile1.jpeg'

const Chat = () => {
  return (
    <div>
        <div className='ChatApp'>
        <div className='TopChatItem'>
            <Link to='/Home'>
            <div>
            <i class="fa-solid fa-arrow-left-long" style={{ color: '#6023d1' }}></i>
            </div>
            </Link>

            <div>
                <h3>Spartacus</h3>
                <p className='Online'>Online</p>
            </div>
            <Link className="ChatLinkDiv" to='/Profile'>
            <div className='OpenChatDiv'>
            <img className='OpenChatImg' src={Onlineuser1} alt='online-user1' />
            </div>
            </Link>

        </div>
        <div className='MainChat'>
            <div className='SampleChat1'>
                <p>Hi can we stake?</p>
            </div>
            <div className='SampleChat2'>
                <p>Sure i'm here</p>
            </div>
        </div>
        <footer className='ChatFooter'>

        <div className='PlusIcon'>
        <i class="fa-solid fa-plus fa-xl" style={{ color: '#6023d1' }}></i>
        </div>
        
        <input className='ChatMesssage'  placeholder='Type Your Message' />

        <div className='ShareIcon' >
        <i class="fa-solid fa-share" style={{ color: 'white' }}></i>
        </div>
        
        </footer>
        </div>
    </div>
  )
}

export default Chat