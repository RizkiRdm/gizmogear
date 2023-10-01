import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DropdownMenuIcon: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="cursor-pointer" onClick={toggleDropdown}>
            <div className="flex items-center justify-center gap-x-2">
                <p className='uppercase font-bold'>nama user</p>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }} // Rotasi ikon ketika dropdown terbuka atau ditutup
                    transition={{ duration: 0.3 }}
                >
                    {/* Icon Dropdown di sini */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.span>
            </div>
        </div>
    );
};

export default DropdownMenuIcon;
