import { atom } from "recoil";
interface searchState {
    id: number
    title: string
    slug: string
}

export interface ProductProps {
    id: number;
    title: string;
    description: string;
    slug: string;
    image: string;
    price: number;
}


export const searchResultState = atom({
    key: 'search-sugestion',
    default: [] as searchState[]
})

export const ThreeProductState = atom<ProductProps[]>({
    key: 'ThreeProductState',
    default: [],
});

export const filterProductState = atom({
    key: 'filterProduct',
    default: ''
})

export const isLoggedInState = atom({
    key: 'isLoggedInState',
    default: false,
});

export const usernameState = atom({
    key: 'usernameState',
    default: '',
});

export const roleState = atom({
    key: 'RoleState',
    default: 'user',
});