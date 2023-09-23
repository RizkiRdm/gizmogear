import Link from 'next/link'
import React from 'react'

interface labelProps {
    label: string
    productUrl: string
}
const CardButon: React.FC<labelProps> = ({ label, productUrl }) => {
    return (
        <Link href={productUrl}>
            <button className="bg-red-600 text-white px-3 py-1 rounded-sm">
                {label}
            </button>
        </Link>
    )
}

export default CardButon