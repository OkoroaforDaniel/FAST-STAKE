import React from 'react';
import './styles/Filter.css';
// import { Form } from 'react-router-dom';

const Filter = () => {
  return (
    <div>
        <div>
            <h3 className='FilterHeader'>Filter</h3>
            <form className='FilterForm'>
                <input className='Input' placeholder='Game' />
                <input className='Input' placeholder='Stake' />
                <input className='Input' placeholder='Mobile' />
                <button className='FilterSearch'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Filter