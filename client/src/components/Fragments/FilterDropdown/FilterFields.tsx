import React from 'react'
import FilterOption from '@/components/Elements/FilterDropdown/FilterOption';
import { motion } from 'framer-motion';

interface filterFieldsProps {
    options: {
        id: number;
        category: string
    }[]
    onChange: (value: string) => void
}

const FilterFields: React.FC<filterFieldsProps> = ({ options, onChange }) => {
    return (
        <>
            <label className='text-2xl'>
                Sort By:
                <span className='ml-2'>
                    <motion.select
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="border border-none focus:outline-none bg-transparent text-slate-500 text-base cursor-pointer"
                        onChange={(e) => onChange(e.target.value)}
                    >
                        {options.map((option) => (
                            <FilterOption key={option.id} id={option.id} label={option.category} />
                        ))}
                    </motion.select>
                </span>
            </label>
        </>
    )
}

export default FilterFields