'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownMenuItems from '@/components/Fragments/Dropdown/DropdownMenuItems';
import DropdownMenuIcon from '@/components/Elements/Dropdown/DropdownIcon';

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="cursor-pointer" onClick={toggleDropdown}>
                <DropdownMenuIcon />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-8 right-0 bg-slate-600 shadow-lg rounded border border-gray-200 z-10"
                    >
                        <DropdownMenuItems />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownMenu;
