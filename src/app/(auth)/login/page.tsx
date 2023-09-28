import Login from '@/components/Fragments/Form/Login'
import LayoutForm from '@/components/Layouts/Form/LoginForm'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {

    const handleSubmit = (e: any) => {
        e.prevenDefault()
    }
    return (
        <>
            <LayoutForm title='Login Page'>
                <form action="">
                    <Login />
                </form>
                <p className='capitalize text-slate-50'>
                    have an account
                    <span>
                        <Link href={'register'} className='text-blue-400'> register here !</Link>
                    </span>
                </p>
            </LayoutForm>
        </>
    )
}

export default LoginPage