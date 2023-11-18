import axios from "axios";

interface ProductProps {
    id: number;
    title: string;
    description: string;
    category: string;
    slug: string;
    image: string;
    price: number;
}

// fetch all data product
export const fetchAllProduct = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/products')
        const dataProduct: ProductProps[] = res.data.data
        return dataProduct
    } catch (error) {
        console.error(error)
    }
}

// fetch detail data product
export const fetchDetailProduct = async (slug: string | null) => {
    try {
        const res = await axios.get(`http://localhost:8000/api/products/product/${slug}`)
        const dataProduct: ProductProps = res.data.data
        return dataProduct
    } catch (error) {
        console.error(error)
    }
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
        const latestProduct: string = res.data.data;
        return latestProduct;
    } catch (error) {
        console.error(error);
    }
};

// fetch category data product
export const fetchCategoriesProduct = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/products/categories')
        const dataProduct: ProductProps[] = res.data.data.category
        return dataProduct
    } catch (error) {
        console.error(error)
    }
}

// filter category 
export const fetchFilteredProducts = async (selectedCategory: string) => {
    if (!selectedCategory) return [];

    try {
        const response = await axios.get(`http://localhost:8000/api/products/filter?category=${selectedCategory}`);
        return response.data.data;
    } catch (error) {
        throw new Error(`Error fetching filtered products: ${error}`);
    }
};
console.log(fetchFilteredProducts('console'))