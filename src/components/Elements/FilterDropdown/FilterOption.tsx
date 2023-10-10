import React from 'react'

interface SelectOptionProps {
    _id: number;
    label: string;
}
const FilterOption: React.FC<SelectOptionProps> = ({ _id, label }) => {
    return (
        <>
            <option value={_id}>{label}</option>
        </>
    )
}

export default FilterOption