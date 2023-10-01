import Register from '@/components/Fragments/Form/Register'
import LayoutForm from '@/components/Layouts/Form/LoginForm'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from "next";
import RegisterForm from '@/components/Layouts/Form/RegisterForm';

export const metadata: Metadata = {
    title: "haleluya",
    description: "Login page"
};


interface handleSubmitProps {
    handleSubmit: () => {}
}

const RegisterPage: React.FC<handleSubmitProps> = () => {
    return (
        <>
            <RegisterForm title='Register Page' />

        </>
    )
}

export default RegisterPage