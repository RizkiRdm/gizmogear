import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SliderArrowProps {
    direction: 'left' | 'right';
    onClick: () => void;
}

const SliderArrow: React.FC<SliderArrowProps> = ({ direction, onClick }) => {
    return (
        <div
            className={`absolute z-10 top-0 bottom-0 flex items-center text-2xl cursor-pointer ${direction === 'left' ? 'left-0 ml-2' : 'right-0 mr-2'
                }`}
            onClick={onClick}
        >
            {direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />}
        </div>
    );
};

export default SliderArrow;


