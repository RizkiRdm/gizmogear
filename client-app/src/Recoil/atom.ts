import { atom } from "recoil";

export const searchResultState = atom({
    key: 'search-sugestion',
    default: [] as string[]
})