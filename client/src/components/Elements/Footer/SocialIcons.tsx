import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'
interface iconProps {
    icon: IconType
    url: string
}
const SocialIcons: React.FC<iconProps> = ({ icon: Icon, url }) => {
    return (

        <>
            <Link href={url} target='_blank' rel='noopener noreferrer' className='mx-3 text-slate-50 hover:text-blue-600'>
                <Icon size={24} />
            </Link>
        </>
    )
}

export default SocialIcons