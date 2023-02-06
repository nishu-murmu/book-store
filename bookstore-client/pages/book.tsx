import { Button, HStack, Input, Container, Center, FormControl, FormLabel } from '@chakra-ui/react'

import Layout from "../components/layout/main"


const Book: React.FC = () => {


    const submitHandler = () => {
        console.log('submit handler')
    }

    return (<Container>
        <Layout heading='Add Book' />
        <Center mt={"40px"}>
            <FormControl isRequired> 
                <FormLabel htmlFor='bookname'>Book Name:</FormLabel>
                <Input type={'text'} id={'bookname'} />
                <FormLabel htmlFor='date'>Date:</FormLabel>
                <Input type={'date'} id={'date'} />
                <FormLabel htmlFor='publishername'>Publisher Name:</FormLabel>
                <Input type={'text'} id={'publishername'} />
                <FormLabel htmlFor='genre'>Genre:</FormLabel>
                <Input type={'text'} id={'genre'} />
                <FormLabel htmlFor='price'>Price ($):</FormLabel>
                <Input type={'number'} id={'price'} />
                <FormLabel htmlFor='ratings'>Ratings:</FormLabel>
                <Input type={'number'} id={'ratings'} />
                <FormLabel htmlFor='covertype'>Cover Type:</FormLabel>
                <Input type={'text'} id={'covertype'} />
                <Center mt={10}>
                    <HStack spacing={20}>
                        <Button type='submit' onClick={() => submitHandler} colorScheme={'green'} >Submit</Button>
                        <Button type='reset' colorScheme='red'>Reset</Button>
                    </HStack>
                </Center>

            </FormControl>

        </Center>
    </Container>)
}
export default Book
