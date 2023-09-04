import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Styles/PostAds.css';

function PostAds() {
    const options = ['COD', 'PES', 'CHESS', 'FIFA'];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const AssetOptions = ['USDT', 'NGN'];
    const [selectedAssetOption, setSelectedAssetOption] = useState(AssetOptions[0]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleAssetSelectChange = (event) => {
        setSelectedAssetOption(event.target.value);
    };

    return(
        <div className='PostAd'>
            <div className='PostAdTop'>
                <Link className='PostAdBackIcon' to='/Ads'>
                <i class="fa-solid fa-arrow-left-long" style={{ color: '#6023d1' }}></i>
                </Link>
                <h4 className='PostAdH3'>
                    Post Normal Ad
                </h4>
            </div>

            <div className='GameAsset'>
            <div className='GameSelectorDiv'>
                <p>Games</p>
                <select className='GameSelector' value={selectedOption} onChange={handleSelectChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className='GameSelectorDiv'>
                <p>Asset</p>
                <select className='GameSelector' value={selectedAssetOption} onChange={handleAssetSelectChange}>
                    {AssetOptions.map((AssetOption, index) => (
                        <option key={index} value={AssetOption}>
                            {AssetOption}
                        </option>
                    ))}
                </select>
            </div>
            </div>
            <h5 className='PriceSetting'>Price Setting</h5><hr className='btwPriceFixed'/>
            <p className='FixedPrice'>Fixed Price</p>
            <input className='FixedPriceInput' placeholder='10' type='number'></input>
            <p className='Terms'>Terms (Optional)</p>
            <textarea className='TermsTextArea' placeholder='Terms will be displayed to the counterparty'></textarea>
            <button className='PostButton'>Post</button>

        </div>
    );
}

export default PostAds;