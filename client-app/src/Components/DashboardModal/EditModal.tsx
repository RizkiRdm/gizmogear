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
    Textarea,
    useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createProduct } from "../../api/api";

interface InputProps {
    title: string;
    image: FileList;
    category: string;
    description: string;
    price: number;
}

interface EditModalProps {
    onOpen: boolean;
    onClose: () => void
}

const EditProductModal: React.FC<EditModalProps> = ({ onOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false) // State untuk mengatur status submit

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue
    } = useForm()

    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setValue('image', e.target.files);
        }
    };
    const toast = useToast()
    const onSubmitForm: SubmitHandler<InputProps> = async (data) => {
        try {
            setIsSubmitting(true)
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('category', data.category);
            formData.append('description', data.description);
            formData.append('price', data.price);
            formData.append('image', data.image[0]);

            const res = await createProduct(formData)
            if (res) {
                toast({
                    position: 'top-right',
                    title: `success create new product`,
                    status: 'success',
                    duration: 2000,
                    isClosable: false,
                })
                setTimeout(() => {
                    setIsSubmitting(false)
                    onClose()
                }, 2000);
            } else {
                toast({
                    position: 'top-right',
                    title: `Failed create product`,
                    status: 'error',
                    duration: 2000,
                    isClosable: false,
                })
            }
        } catch (error) {
            setIsSubmitting(false)
            console.error(error)
        }


    }
    return (
        <>
            <Modal isOpen={onOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <ModalHeader>Create new product</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl isRequired>
                                <FormLabel>Title Product</FormLabel>
                                <Input placeholder='Title Product' {...register('title', {
                                    required: true
                                })} />
                                {errors.title?.type === 'required' && (
                                    <FormErrorMessage>
                                        Title is required
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl isRequired my={3}>
                                <FormLabel>Category Product</FormLabel>

                                <Input placeholder='Category Product' {...register('category', {
                                    required: true
                                })} />
                                {errors.category?.type === 'required' && (
                                    <FormErrorMessage>
                                        category is required
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Description Product</FormLabel>
                                <Textarea placeholder='Description Product' {...register('description', {
                                    required: true
                                })} />
                                {errors.description?.type === 'required' && (
                                    <FormErrorMessage>
                                        description is required
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl isRequired my={3}>
                                <FormLabel>Price Product</FormLabel>
                                <Input type="number" {...register("price", {
                                    required: true
                                })}
                                    placeholder="Price"
                                />
                                {errors.price?.type === 'required' && (
                                    <FormErrorMessage>
                                        category is required
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Image Product</FormLabel>
                                <Input
                                    type="file"
                                    onChange={handleImageChange}
                                    {...register('image', {
                                        required: true, // Menambahkan pesan error jika file tidak dipilih
                                    })}
                                    accept="image/*"
                                />
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

export default EditProductModal;
