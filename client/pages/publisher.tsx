import { Button, Input, HStack, Container, Center, FormControl, FormLabel } from '@chakra-ui/react'
import { useRef } from 'react'

import Layout from "../components/layout/main"


const Publisher: React.FC = () => {

    const publisherRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)


    const submitHandler = async () => {
        const publisherDetails: object = {
            publisherName: publisherRef.current?.value,
            address: addressRef.current?.value
        }
        const response = await fetch("http://localhost:5005/publisher/create", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(publisherDetails)
        })
        console.log(response)
    }
    return (<Container>
        <Layout heading='Add Publisher' />
        <Center mt={"40px"}>
            <FormControl>
                <FormLabel htmlFor='publishername'>Publisher Name:</FormLabel>
                <Input type={'text'} ref={publisherRef} id={'publishername'} />
                <FormLabel htmlFor='address'>Address:</FormLabel>
                <Input type={'text'} id={'address'} ref={addressRef} />
                <Center mt={10}>
                    <HStack spacing={20}>
                        <Button type='submit' onClick={() => submitHandler()} colorScheme={'green'} >Submit</Button>
                        <Button type='reset' colorScheme='red'>Reset</Button>
                    </HStack>
                </Center>
            </FormControl>
        </Center>
    </Container>)
}
export default Publisher 
