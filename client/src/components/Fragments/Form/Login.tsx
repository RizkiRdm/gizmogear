'use client'
import ButtonForm from '@/components/Elements/Form/ButtonForm'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import Notification from '../notification/Notification'

interface IFormsInputs {
    username: string
    password: string
}

const Login: React.FC = () => {
    const [token, setToken] = useState(null)
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<IFormsInputs>()

    const router = useRouter()

    const onSubmit: SubmitHandler<IFormsInputs> = async (data?) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', data)

            // ambil token dan role
            const authToken = response.data.access_token
            const userRole = response.data.role

            // simpan token ke localstorage
            setToken(authToken)
            localStorage.setItem('token', authToken);

            // redirect berdasarkan role
            if (userRole === 'admin') {
                router.push('/dashboard');
            } else {
                router.push('/');
            }

        } catch (error) {
            console.error("login failed", error)
        }
    }

    return (
        <>
            {token ? (
                null
            ) : (
                <div >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-2">
                            <input
                                type="text"
                                placeholder="Username"
                                {...register('username', { required: 'Input your username' })}
                                className='w-full p-3 bg-zinc-500 rounded-md text-white'
                            />
                            {errors.username && <p className='text-red-500 font-bold'>{errors.username.message}</p>}
                        </div >
                        <div className="my-2">
                            <input
                                type="password"
                                placeholder="*********"
                                {...register('password', { required: 'Input your password' })}
                                className='w-full p-3 bg-zinc-500 rounded-md text-white'
                            />
                            {errors.password && <p className='text-red-500 font-bold'>{errors.password.message}</p>}
                        </div>
                        <div className="my-2">
                            <ButtonForm label='Login' />
                        </div>
                    </form >
                </div>
            )}
        </>
    )
}

export default Login