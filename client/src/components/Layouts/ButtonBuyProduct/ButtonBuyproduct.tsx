import Links from '@/components/Elements/ButtonBuyProduct/Links'
import ButtonComponent from '@/components/Fragments/ButtonBuyProduct/ButtonComponent'
import React from 'react'
interface urlProps {
    url: string
}
const ButtonBuy: React.FC<urlProps> = ({ url }) => {
    return (
        <Links url={url}>
            <ButtonComponent />
        </Links>
    )
}

export default ButtonBuy