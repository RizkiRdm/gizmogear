import { atom } from "recoil";
interface searchState {
    id: number
    title: string
}
export const searchResultState = atom({
    key: 'search-sugestion',
    default: [] as searchState[]
})