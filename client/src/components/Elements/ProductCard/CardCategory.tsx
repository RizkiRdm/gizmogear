import React from 'react'

interface categoryProps {
    categoryTitle: string
}
const CardCategory: React.FC<categoryProps> = ({ categoryTitle }) => {
    return (
        <h2 className='text-base dark:text-gray-300 text-gray-700'>{categoryTitle}</h2>
    )
}
export default CardCategory