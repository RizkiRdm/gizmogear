import Login from '@/components/Fragments/Form/Login'
import React from 'react'

interface handleSubmitProps {
    children: React.ReactNode
    title: string
}
const LayoutForm: React.FC<handleSubmitProps> = ({ children, title }) => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-zinc-800 p-6 rounded-md shadow-md w-96">
                    <h2 className='font-bold text-2xl text-left'>{title}</h2>
                    {children}
                </div>
            </div>
        </>
    )
}

export default LayoutForm
