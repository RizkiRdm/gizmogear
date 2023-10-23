import Image from 'next/image';
import React from 'react';

interface ProductImageProps {
    alt: string
    image: any
}

const DetailProductImage: React.FC<ProductImageProps> = ({ image, alt }) => {
    return (
        <div className="w-full">
            <Image src={image} alt={alt} className="w-full" />
        </div>
    );
};

export default DetailProductImage;
