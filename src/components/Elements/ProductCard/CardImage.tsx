import Image from 'next/image'
import React from 'react'

interface imageProps {
    src: any
    alt: string
}
const CardImage: React.FC<imageProps> = ({ src, alt }) => {
    return (
        <Image src={src} alt={alt} className='w-full h-auto' />
    )
}

export default CardImage