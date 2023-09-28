import ButtonForm from '@/components/Elements/Form/ButtonForm'
import InputFields from '@/components/Elements/Form/InputFields'
import React from 'react'

const Register = () => {
    return (
        <>
            <div className="my-2">
                <InputFields type={'text'} placeholder={'Fullname'} name={'fullname'} />
            </div>
            <div className="my-2">
                <InputFields type={'text'} placeholder={'Username'} name={'username'} />
            </div>
            <div className="my-2">
                <InputFields type={'password'} placeholder={'*******'} name={'password'} />
            </div>
            <div className="my-2">
                <ButtonForm label='Register' />
            </div>
        </>
    )
}

export default Register