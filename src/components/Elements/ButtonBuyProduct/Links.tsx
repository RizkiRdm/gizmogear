import Link from 'next/link'
import React from 'react'

interface urlProps {
    url: string
    children: React.ReactNode
}
const Links: React.FC<urlProps> = ({ url, children }) => {
    return (
        <Link href={url}>{children}</Link>
    )
}

export default Links