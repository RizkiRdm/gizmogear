import React from 'react'

interface SelectOptionProps {
    id: number;
    label: string;
}
const FilterOption: React.FC<SelectOptionProps> = ({ id, label }) => {
    return (
        <>
            <option value={id}>{label}</option>
        </>
    )
}

export default FilterOption