import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea
} from "@chakra-ui/react";
import { SubmitHandler } from "react-hook-form";

interface InputProps {
    title: string;
    image: string;
    category: string;
    description: string;
    price: number;
}

interface CreateModalProps {
    onOpen: boolean;
    onClose: () => void;
    onSubmit: SubmitHandler<InputProps>;
    register: any; // Tipe bisa disesuaikan dengan tipe register yang digunakan pada useForm
    errors: any; // Tipe bisa disesuaikan dengan tipe errors yang digunakan pada useForm
}

const CreateModal: React.FC<CreateModalProps> = ({ onOpen, onClose, onSubmit, register, errors }) => {
    return (
        <>
            <Modal isOpen={onOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={onSubmit}>
                        <ModalHeader>Create new product</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl isRequired>
                                <FormLabel>Title Product</FormLabel>
                                <Input placeholder='Title Product' {...register('title', {
                                    required: 'Enter title product'
                                })} />
                                <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Category Product</FormLabel>
                                <Input placeholder='Category Product' {...register('category', {
                                    required: 'Enter category product'
                                })} />
                                <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Description Product</FormLabel>
                                <Textarea placeholder='Description Product' {...register('description', {
                                    required: 'Enter description product'
                                })} />
                                <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Price Product</FormLabel>
                                <Input type="number" placeholder='Price Product' {...register('price', {
                                    required: 'Enter price product'
                                })} />
                                <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Image Product</FormLabel>
                                <Input type="file" placeholder='Image Product' {...register('image', {
                                    required: 'Upload image product'
                                })} />
                                <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} type="submit">
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateModal;
