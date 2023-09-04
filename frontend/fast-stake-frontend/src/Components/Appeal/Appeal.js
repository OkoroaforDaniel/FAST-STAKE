import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Appeal.css'

const Appeal = () => {
  return (
    <div>
        <div className='BackIconChat'>
            <Link className='AppealAdBackIcon' to='/Match'>
            <i class="fa-solid fa-arrow-left-long" style={{ color: '#6023d1' }}></i>
            </Link>
            <Link className='ProcessingChat' to='/Chat'>
            <div className='ProcessingChatIcon'>
            <i class="fa-regular fa-message fa-xl" style={{ color: '#6023d1' }}></i>
            </div>
            <p className='ProcessingChatText'>CHAT</p>
            </Link>
       </div>
       <h3 className='h3Appeal'>Appeal</h3>
       <div className='AppealText'>
       <p className='CS'>CS: Using another phone to record your screen, both users, open your playstore or app store, search for the game you played, open the game, login and go to your match history</p>
       <p className='NOTE'>NOTE : The process should be recorded with another camera or phone screen record is not allowed</p>
       <p className='Click'>Click on the link below to see a sample video on how to record the video https://video-recording</p>
       <p className='After'>After recording the video send it here in this page for validation.</p>
       </div>
       
       <form className='AppealForm' action="your-upload-endpoint" method="POST" enctype="multipart/form-data">
       <textarea className='AppealTextArea' placeholder='State your complain'></textarea>
        <label className='AppealLabel' for="file">Upload Video:</label>
        <input  type="file" className='file-label' id="file" name="file" accept="image/*, video/*" />
        <button className='AppealButton' type="submit">File Appeal</button>
        </form>

    </div>
  )
}

export default Appeal