import React, { useState } from 'react';
import { Box, Input, List, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { searchResultState } from '../../Recoil/atom'; // Definisikan state Recoil di sini
import axios from 'axios';
import { motion } from 'framer-motion';

const SearchComponent: React.FC = () => {
    const [searchResults, setSearchResults] = useRecoilState(searchResultState);
    const { control, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const debouncedSearch = (query: string) => {
        setLoading(true);
        // TODOS : change api
        axios.get(`/api/search?query=${query}`)
            .then((response) => {
                setSearchResults(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    const onSubmit: SubmitHandler<{ searchQuery: string }> = ({ searchQuery }) => {
        debouncedSearch(searchQuery);
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="searchQuery"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input {...field} placeholder="Cari item..." color={'black'} />
                    )}
                />
            </form>
            {loading && <Text>Mencari...</Text>}
            {searchResults.length > 0 && !loading && (
                <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                >
                    {searchResults.map((result, index) => (
                        <List key={index}>{result}</List>
                    ))}
                </motion.ul>
            )}

        </Box>
    );
};

export default SearchComponent;
