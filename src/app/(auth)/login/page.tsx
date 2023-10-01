import React from 'react'
import type { Metadata } from "next";
import LoginForm from '@/components/Layouts/Form/LoginForm';

export const metadata: Metadata = {
    title: "Login Page",
    description: "Login page"
};


const LoginPage = () => {

    const handleSubmit = (e: any) => {
        e.prevenDefault()
    }
    return (
        <>
            <LoginForm title='Login Page' />
        </>
    )
}

export default LoginPage