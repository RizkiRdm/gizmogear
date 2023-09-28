import ButtonForm from '@/components/Elements/Form/ButtonForm'
import InputFields from '@/components/Elements/Form/InputFields'
import React from 'react'

const Login: React.FC = () => {
    return (
        <>
            <div className="my-2">
                <InputFields type={'text'} placeholder={'Username'} name={'username'} />
            </div>
            <div className="my-2">
                <InputFields type={'password'} placeholder={'*******'} name={'password'} />
            </div>
            <div className="my-2">
                <ButtonForm label='Login' />
            </div>
        </>
    )
}

export default Login