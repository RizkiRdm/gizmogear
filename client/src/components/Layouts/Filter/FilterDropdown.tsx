'use client'
import React from 'react'
import FilterFields from '@/components/Fragments/FilterDropdown/FilterFields';

const FilterDropdown: React.FC = () => {
    const opt = [
        { id: 1, category: 'category1' },
        { id: 2, category: 'category2' },
        { id: 3, category: 'category3' },
    ]

    const handleFilter = () => {
        // 
    }
    return (
        <>
            {/* category filter */}
            <div className="flex justify-end mb-4">
                <FilterFields options={opt} onChange={handleFilter} />
            </div>
        </>
    )
}

export default FilterDropdown