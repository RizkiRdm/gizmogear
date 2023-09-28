import React from 'react'
import { FaHeart } from 'react-icons/fa';

const CardIcon: React.FC = () => {
    return (
        <button className='text-xl'>
            <FaHeart className="text-slate-100 hover:text-red-600" />
        </button>
    )
}

export default CardIcon