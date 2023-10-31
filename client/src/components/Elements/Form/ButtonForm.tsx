import React, { FC } from 'react'
interface labelProps {
    label: string
}
const ButtonForm: FC<labelProps> = ({ label }) => {
    return (
        <>
            <button type='submit' className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-1 px-2 rounded">{label}</button>
        </>
    )
}

export default ButtonForm