import React from 'react'

interface titleProps {
    title: string
}
const CardTitle: React.FC<titleProps> = ({ title }) => {
    return (
        <h2 className='text-lg font-medium dark:text-white text-gray-900'>{title}</h2>
    )
}
export default CardTitle