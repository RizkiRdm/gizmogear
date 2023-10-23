import DetailProduct from '@/components/Pages/DetailProduct'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {

    return (
        <>
            <DetailProduct id={0} />
        </>
    )
}

export default page