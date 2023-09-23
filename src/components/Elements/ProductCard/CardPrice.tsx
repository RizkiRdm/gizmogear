import React from 'react'
interface priceProps {
    price: number
}
const CardPrice: React.FC<priceProps> = ({ price }) => {
    return (
        <p className='font-bold text-3xl'>Rp.{price}</p>
    )
}

export default CardPrice