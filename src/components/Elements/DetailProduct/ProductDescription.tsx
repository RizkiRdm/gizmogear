import React from 'react';

interface ProductDescriptionProps {
    description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
    return <p className="text-gray-600">{description}</p>;
};

export default ProductDescription;
