import React from 'react'
import type { Metadata } from "next";
import LoginForm from '@/components/Layouts/Form/LoginForm';

export const metadata: Metadata = {
    title: "Login Page",
    description: "Login page"
};


const LoginPage = () => {
    return (
        <>
            <LoginForm title='Login Page' />
        </>
    )
}

export default LoginPage