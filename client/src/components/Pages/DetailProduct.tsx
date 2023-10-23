'use client'
import React, { useEffect, useState } from 'react'
import ProductDetail from '../Layouts/DetailProduct/ProductDetail'
import image1 from '../../../public/wallhaven-gp26od.jpg'


interface ProductDetailProps {
    id: number;
}

const DetailProduct: React.FC<ProductDetailProps> = ({ id }) => {

    const [product, setProduct] = useState<any>([])

    // simulasi fetching data
    useEffect(() => {
        // Fungsi untuk mengambil data produk dari API
        const fetchProduct = async () => {
            try {
                // Simulasi pengambilan data produk dari API menggunakan fetch atau axios
                // Misalnya: const response = await fetch(`/api/products/${id}`);
                // const data = await response.json();

                // Simulasi data produk
                const data = {
                    id: 1,
                    title: 'Poster wibu',
                    category: 'PC',
                    description: 'Product Description',
                    price: 100.99,
                    image: image1,
                };

                setProduct(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        // Panggil fungsi pengambilan data produk
        fetchProduct();
    }, [id]);


    return (
        <>
            <ProductDetail product={product} />
        </>
    )
}

export default DetailProduct