'use client'

import React, { useEffect, useState } from 'react';
import image1 from '../../../public/wallhaven-gp26od.jpg';
import FilterDropdown from '../Layouts/Filter/FilterDropdown';
import Footer from '../Layouts/Footer/Footer';
import ProductCards from '../Layouts/ProductCard/ProductCards';

interface Product {
    _id: number
    images: any
    title: string
    category: string
    price: number
}

const ProductsPage: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([])

    // simulasi fetching data
    useEffect(() => {
        const fetchingData = async () => {
            const data: Product[] = [
                {
                    _id: 1,
                    category: 'console',
                    title: 'Product 1',
                    price: 100000,
                    images: image1,
                },
                {
                    _id: 2,
                    category: 'console',
                    title: 'Product 2',
                    price: 10,
                    images: image1,
                },
                {
                    _id: 3,
                    category: 'console',
                    title: 'Product 3',
                    price: 10,
                    images: image1,
                },
                {
                    _id: 4,
                    category: 'console',
                    title: 'Product 4',
                    price: 10,
                    images: image1,
                },
            ]
            setProducts(data)
        }
        fetchingData()
    }, [])

    return (
        <>
            <section className='h-screen'>
                <FilterDropdown />
                {/* product card */}
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {products.map((product) => (
                        <div key={product._id} >
                            <ProductCards product={product} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductsPage