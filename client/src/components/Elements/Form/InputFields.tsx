import React from 'react'
interface inputProps {
    type: string
    placeholder: string
    name: string
}
const InputFields: React.FC<inputProps> = ({ type, placeholder, name }) => {
    return (
        <>
            <input type={type}
                name={name}
                placeholder={placeholder}
                className='w-full p-3 bg-zinc-500 rounded-md text-white'
            />
        </>
    )
}

export default InputFields