'use client'
import ButtonForm from '@/components/Elements/Form/ButtonForm'
import axios from 'axios'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
interface IFormsInputs {
    username: string
    password: string
}

const Register = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<IFormsInputs>()

    const router = useRouter()
    const onSubmit: SubmitHandler<IFormsInputs> = async (data?) => {
        try {
            await axios.post('http://localhost:8000/api/register', data)
            router.push('/login')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='none'>
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
                    <ButtonForm label='Register' />
                </div>
            </form >
        </>
    )
}

export default Register