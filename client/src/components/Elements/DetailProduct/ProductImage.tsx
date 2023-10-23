import Image from 'next/image';
import React from 'react';

interface ProductImageProps {
    src: string;
    alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
    return <Image src={src} alt={alt} className="w-full" />;
};

export default ProductImage;
