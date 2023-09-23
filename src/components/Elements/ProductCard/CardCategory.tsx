import React from 'react'

interface categoryProps {
    categoryTitle: string
}
const CardCategory: React.FC<categoryProps> = ({ categoryTitle }) => {
    return (
        <h2 className='font-bold text-xl bg-red-600 px-2 py-1 border border-none rounded-full bg-gradient-to-t '>{categoryTitle}</h2>
    )
}
export default CardCategory