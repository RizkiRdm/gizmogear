import React from 'react';

interface ProductTitleProps {
    title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => {
    return <h2 className="text-3xl font-bold text-left">{title}</h2>;
};

export default ProductTitle;
