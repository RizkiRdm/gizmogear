'use client'
import Register from '@/components/Fragments/Form/Register'
import LayoutForm from '@/components/Layouts/Form/LoginForm'
import Link from 'next/link'
import React from 'react'

interface handleSubmitProps {
    handleSubmit: () => {}
}

const RegisterPage: React.FC<handleSubmitProps> = () => {
    const handleSubmit = () => {

    }

    return (
        <>
            <LayoutForm title='Register Page'>
                <form action="" onSubmit={handleSubmit}>
                    <Register />
                </form>
                <p className='capitalize text-slate-50'>
                    have an account
                    <span>
                        <Link href={'login'} className='text-blue-400'> login here !</Link>
                    </span>
                </p>
            </LayoutForm >

        </>
    )
}

export default RegisterPage