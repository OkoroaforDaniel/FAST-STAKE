import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Processing.css';

const Processing = () => {
  return (
    <div className='Processing'>
       <div className='BackIconChat'>
            <Link className='OpenAdBackIcon' to='/Match'>
            <i class="fa-solid fa-arrow-left-long" style={{ color: '#6023d1' }}></i>
            </Link>
            <Link className='ProcessingChat' to='/Chat'>
            <div className='ProcessingChatIcon'>
            <i class="fa-regular fa-message fa-xl" style={{ color: '#6023d1' }}></i>
            </div>
            <p className='ProcessingChatText'>CHAT</p>
            </Link>
       </div>
       <p className='ProcessingText'>Processing...</p>
            <div className='StakePes'>
                <p className='ProcessingStake'>STAKE</p>
                <p className='PesText'>PES</p>          
            </div>
            <div className='AmountUsd'>
                <p>Amount</p>
                <p>100 USD</p>
            </div>
            <div className='PriceUsd'>
                <p>Win Price</p>
                <p>180 USD</p>
            </div>

            <div className='PriceUsd'>
                <p>Order Number</p>
                <p>238976386272638978</p>
            </div>

            <div className='PriceUsd'>
                <p>Created Time</p>
                <p>2023-08-30 23:10:10</p>
            </div>

            <div className='PriceUsd'>
                <p>Seller's Nickname</p>
                <Link to='/Profile'>
                <p>Bizzy</p>
                </Link>
            
            </div>

            <hr className='HrWarning' />
            <p className='Note'>
                Only click i won if you are the winner, Only click i loss if you were defeated <br /> Note : clicking on i won when you aren't the when might lead to a suspension
            </p>
            <p className='warningTitle'>
            WARNING :
            </p>
            <p className='Warning'>
             Failure to accept defeat will lead to negative feedback and your rating will be affected too
            </p>
            <hr className='HrWarning' />
            <p className='warningTitle'>
                NOTE :
            </p>
            <p className='Warning'>
            Once one user click on i loss and the other user click on i won the fund will automatically tranfered to the person who clicked i won. Note:  you can all ways Appeal if user is not responding or contact support if any issue arise
            </p>
            {/* <hr className='HrWarning' /> */}
            <div className='ProcessingButton'>
                <button className='ILoss'>I LOSS </button>
                <button className='IWon'>I WON</button>
            </div>
    </div>
  )
}

export default Processing