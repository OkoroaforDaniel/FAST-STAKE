import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Styles/OpenAds.css';

const OpenAds = () => {
  return (
    <div className='OpenAds'>
        <div>
        <div className='PostAdTop'>
                <Link className='PostAdBackIcon' to='/Ads'>
                <i class="fa-solid fa-arrow-left-long" style={{ color: '#6023d1' }}></i>
                </Link>
                <h4 className='PostAdH3'>
                PES Console
                </h4>
            </div>
            
            {/* <p className='Price'>Price 100 USD</p>
            <p className='OpenAdsTime'>Wait time 30mins</p> */}
            <div className='InputButton'>
            <p className='GameId'>Game Id</p>
            <input className='OpenAdsInput' type='number' placeholder='Enter your Game id e.g ( PES id, COD id)'></input>
            <div className='AmountDiv'>
              <p>Amount</p>
              <p>100 USD</p>
            </div>
            <Link to='/Processing'>
            <button className='OpenAdsStake'>Stake</button>
            </Link>
            
            </div>

            <div className='TermsFeedback'>
            <h4 className='h4Terms'>Terms</h4>
            <h4 className='h4Feedback'>Feedback</h4>
            </div>
            <hr className='hrTerms'/>
            <p className='AdTerm'>Advertiser's Terms</p>
            <p className='Terms'>Pls let play fair game</p>
            

        </div>
    </div>
  )
}

export default OpenAds