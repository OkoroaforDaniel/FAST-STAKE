import React from 'react';
import './styles/Match.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Match = () => {
  return (
    <div>
        <div>
        <Link className='MatchLink' to='/Processing'>
        <div className='MatchDiv'>
                <div className='GamePending'>
                    <h3 id='Game'>Game : COD</h3>
                    <p className='Pending'>Pending...</p>
                </div>
                <div className='StakeIdChat'>
                    <div className='StakeId'>
                        <p>STAKE : 10 USD</p>
                        <p>ID : 5647629923736178893</p>
                    </div>
                    {/* <div className='MatchChat'>
                    <i class="fa-solid fa-message fa-xl" style={{ color: '#6023d1' }}></i>
                    </div> */}

                </div>
            </div>
        </Link>

            <div className='MatchDiv'>
                <div className='GamePending'>
                    <h3 id='Game'>Game : PES</h3>
                    <p className='Pending'>Pending...</p>
                </div>
                <div className='StakeIdChat'>
                    <div className='StakeId'>
                        <p>STAKE : 50 USD</p>
                        <p>ID : 5647629923736174245</p>
                    </div>
                    {/* <div className='MatchChat'>
                    <i class="fa-solid fa-message fa-xl" style={{ color: '#6023d1' }}></i>
                    </div> */}

                </div>
                
            </div>

            <Link className='MatchLink' to='/Appeal'>
            <div className='MatchDiv'>
                <div className='GamePending'>
                    <h3 id='Game'>Game : CHESS</h3>
                    <p className='Appeal'>Appeal...</p>
                </div>
                <div className='StakeIdChat'>
                    <div className='StakeId'>
                        <p>STAKE : 100 USD</p>
                        <p>ID : 5647629923736176474</p>
                    </div>
                    {/* <div className='MatchChat'>
                    <i class="fa-solid fa-message fa-xl" style={{ color: '#6023d1' }}></i>
                    </div> */}

                </div>
                
            </div>
            </Link>

        </div>
    </div>
  )
}

export default Match