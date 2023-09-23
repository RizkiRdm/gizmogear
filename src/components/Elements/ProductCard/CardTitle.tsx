import React from 'react'

interface titleProps {
    title: string
}
const CardTitle: React.FC<titleProps> = ({ title }) => {
    return (
        <h2 className='font-bold text-3xl'>{title}</h2>
    )
}
export default CardTitle