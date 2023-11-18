import React, { useState } from 'react';
import { Box, Input, List, ListItem } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { searchResultState } from '../../Recoil/atom';
import { Link } from 'react-router-dom';

const SearchInput: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useRecoilState(searchResultState);
    const { register } = useForm();

    const debouncedSearch = (query: string) => {
        setLoading(true);
        axios.get(`http://localhost:8000/api/products/search?q=${query}`)
            .then((response) => {
                setSearchResults(response.data.data);
                setShowSuggestions(true);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term === '') {
            setShowSuggestions(false); // Sembunyikan saran ketika input kosong
        } else {
            // Hanya panggil debouncedSearch setelah pengguna berhenti mengetik selama 500ms
            setTimeout(() => {
                debouncedSearch(term);
            }, 500);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
    };

    return (
        <Box
            position={'relative'}
            bg={'gray.900'}
            className="relative text-slate-950"
            width={'100%'} // Menggunakan responsif utility classes
            mx="auto"
        >
            <Input
                {...register('query')}
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Cari barang..."
                borderWidth="1px"
                rounded="md"
                p="2"
                w="100%"
            />
            {showSuggestions && (
                <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                >
                    {loading ? (
                        <List zIndex={1} position={'absolute'} bg={'gray.900'} width={'full'} px="4" py="2">
                            <ListItem>Loading...</ListItem>
                        </List>
                    ) : searchResults.length > 0 ? (
                        searchResults.map((suggestion, index) => (
                            <List
                                key={index}
                                zIndex={1}
                                position={'absolute'}
                                bg={'gray.900'}
                                width={'full'}
                                mt={1}
                            >
                                <Link to={`/products/${suggestion.slug}`}>
                                    <ListItem
                                        cursor="pointer"
                                        px="4"
                                        py="2"
                                        onClick={() => handleSuggestionClick(suggestion.title)}
                                    >
                                        {suggestion.title}
                                    </ListItem>
                                </Link>
                            </List>
                        ))
                    ) : (
                        // Sembunyikan pesan "Barang tidak ditemukan" ketika input tidak kosong
                        searchTerm !== '' && (
                            <List zIndex={1} position={'absolute'} bg={'gray.900'} width={'full'} px="4" py="2">
                                <ListItem>Barang tidak ditemukan</ListItem>
                            </List>
                        )
                    )}
                </motion.ul>
            )}
        </Box>
    );
};

export default SearchInput;
