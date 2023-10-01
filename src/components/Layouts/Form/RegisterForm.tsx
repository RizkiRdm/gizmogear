import Register from '@/components/Fragments/Form/Register'
import Link from 'next/link'
import React from 'react'

interface handleSubmitProps {
    title: string
}
const RegisterForm: React.FC<handleSubmitProps> = ({ title }) => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-zinc-800 p-6 rounded-md shadow-md w-96">
                    <h2 className='font-bold text-2xl text-left'>{title}</h2>
                    <form action="">
                        <Register />
                    </form>
                    <p className='capitalize text-slate-50 text-sm'>
                        have an account
                        <span>
                            <Link href={'login'} className='text-blue-400'> login here !</Link>
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default RegisterForm
