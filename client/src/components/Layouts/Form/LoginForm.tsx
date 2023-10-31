import Login from '@/components/Fragments/Form/Login'
import Link from 'next/link'
import React from 'react'

interface handleSubmitProps {
    title: string
}
const LoginForm: React.FC<handleSubmitProps> = ({ title }) => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-zinc-800 p-6 rounded-md shadow-md w-96">
                    <h2 className='font-bold text-2xl text-left'>{title}</h2>
                    <Login />
                    <p className='text-slate-50 text-sm'>
                        don{"'"}t have an account
                        <span>
                            <Link href={'/register'} className='text-blue-400 capitalize'> register here !</Link>
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default LoginForm
