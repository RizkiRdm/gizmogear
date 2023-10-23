import Link from 'next/link'
import React from 'react'

interface labelProps {
    label: string
    productUrl: string
}
const CardButon: React.FC<labelProps> = ({ label, productUrl }) => {
    return (
        <Link href={productUrl}>
            <button className="bg-sky-600 text-white px-2 py-1 rounded-md text-base font-medium text-slate-50">
                {label}
            </button>
        </Link>
    )
}

export default CardButon