import axios from "axios";

interface authProps {
    data: string;
    username: string
    password: string
}

interface ProductProps {
    id: number;
    title: string;
    description: string;
    category: string;
    slug: string;
    image: string;
    price: number | string;
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

// login
export const loginUser = async (credentials: authProps) => {
    try {
        const response = await axios.post('http://localhost:8000/api/login', credentials)
        const { access_token, username, role } = response.data
        return { access_token, username, role }
    } catch (error) {
        console.error(error)
    }
}
export const registerUser = async (credentials: authProps) => {
    try {
        const response = await axios.post('http://localhost:8000/api/register', credentials)
        const registerData = response.data
        return registerData
    } catch (error) {
        console.error(error)
    }
}

// CRUD OPERATION API
// CREATE data
export const createProduct = async (data: ProductProps) => {
    try {
        const res = await axios.post('http://localhost:8000/api/products/create', data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        const createData = res.data;
        return createData;
    } catch (error) {
        console.error(error)
    }
}