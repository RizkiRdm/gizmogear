import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'

interface drowdownLinks {
    icon: IconType
    label: string
    url: string
}
const DropdownLinks: React.FC<drowdownLinks> = ({ icon: Icon, label, url }) => {
    return (
        <>
            <Link href={url} className=' flex items-center py-2 px-4 hover:bg-slate-400'>
                <span className='mx-2'>
                    <Icon size={18} />
                </span>
                {label}
            </Link>
        </>
    )
}

export default DropdownLinks