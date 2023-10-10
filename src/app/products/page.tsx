import ProductsPage from '@/components/Pages/ProductsPage'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "GizmoGear Products",
    description: "Product pages"
};

const productsPages = () => {
    return (
        <>
            <div className="mt-5 h-screen">
                <ProductsPage />
            </div>
        </>
    )
}

export default productsPages