import axios from "axios";

interface ProductProps {
    id: number;
    title: string;
    slug: string;
    image: string;
    price: number;
}

// fetch 6 random data product
export const fetchSixProduct = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/products/random-six-product')
        const dataProduct: ProductProps[] = res.data.data
        return dataProduct
    } catch (error) {
        console.error(error)
    }
}

// fetch 3 random product for carousel
export const fetchThreeProduct = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/products/random-three-product')
        const dataProduct: ProductProps[] = res.data.data
        return dataProduct
    } catch (error) {
        console.error(error)
    }
}

export const fetchLatestProduct = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/products/latest');
        const latestProduct: ProductProps = res.data.data;
        return latestProduct;
    } catch (error) {
        console.error(error);
    }
};

