import React from 'react';

interface ProductPriceProps {
    price: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
    return <p className="text-lg font-semibold text-green-600">${price}</p>;
};

export default ProductPrice;
