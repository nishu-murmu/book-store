import { Button, HStack, Input, Container, Center, FormControl, FormLabel } from '@chakra-ui/react'
import { useRef, MouseEvent } from 'react'

import Layout from "../components/layout/main"
import {addBook} from '../utils/apiRoutes'


const Book: React.FC = () => {

    const bookNameRef = useRef<HTMLInputElement>(null)
    const publisherNameRef = useRef<HTMLInputElement>(null)
    const authorRef = useRef<HTMLInputElement>(null)
    const pricingRef = useRef<HTMLInputElement>(null)
    const ratingsRef = useRef<HTMLInputElement>(null)

    const formRef = useRef<HTMLFormElement>(null)

    const submitHandler = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault()

        const bookdetails = {
            bookName: bookNameRef.current?.value,
            publisherName: publisherNameRef.current?.value,
            author: authorRef.current?.value,
            pricing: pricingRef.current?.value,
            ratings: ratingsRef.current?.value,
        }
        addBook(bookdetails)

        resetInputs()
    }
    const resetInputs = () => {
        formRef.current?.reset()
    }

    return (<Container>
        <Layout heading='Add Book' />
        <Center mt={"40px"}>

            <form ref={formRef} action="#">
                <FormControl isRequired>
                    <FormLabel htmlFor='bookname'>Book Name:</FormLabel>
                    <Input type={'text'} id={'bookname'} ref={bookNameRef} />
                    <FormLabel htmlFor='publishername'>Publisher Name:</FormLabel>
                    <Input type={'text'} id={'publishername'} ref={publisherNameRef} />
                    <FormLabel htmlFor='author'>Author:</FormLabel>
                    <Input type={'text'} id={'author'} ref={authorRef} />
                    <FormLabel htmlFor='price'>Price ($):</FormLabel>
                    <Input type={'number'} id={'price'} ref={pricingRef} />
                    <FormLabel htmlFor='ratings'>Ratings:</FormLabel>
                    <Input type={'number'} id={'ratings'} ref={ratingsRef} />
                    <Center mt={10}>
                        <HStack spacing={20}>
                            <Button type='submit' onClick={(e) => submitHandler(e)} colorScheme={'green'} >Submit</Button>
                            <Button type='reset' onClick={() => resetInputs()} colorScheme='red'>Reset</Button>
                        </HStack>
                    </Center>
                </FormControl>
            </form>
        </Center>
    </Container>)
}
export default Book
