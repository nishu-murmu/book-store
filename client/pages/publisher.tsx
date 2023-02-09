import { Button, Input, HStack, Container, Center, FormControl, FormLabel } from '@chakra-ui/react'
import  {useRef , MouseEvent} from 'react'

import Layout from "../components/layout/main"


const Publisher: React.FC = () => {

    const publisherRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)

    const formRef = useRef<HTMLFormElement>(null)

    const submitHandler = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault()
        const publisherDetails: object = {
            publisherName: publisherRef.current?.value,
            address: addressRef.current?.value
        }
        await fetch("http://localhost:5005/publisher/create", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(publisherDetails)
        })
        reset()
    }

    const reset = () => {
        formRef.current?.reset()
    }
    return (<Container>
        <Layout heading='Add Publisher' />
        <Center mt={"40px"}>
            <form ref={formRef} action="#">
                <FormControl>
                    <FormLabel htmlFor='publishername'>Publisher Name:</FormLabel>
                    <Input type={'text'} ref={publisherRef} id={'publishername'} />
                    <FormLabel htmlFor='address'>Address:</FormLabel>
                    <Input type={'text'} id={'address'} ref={addressRef} />
                    <Center mt={10}>
                        <HStack spacing={20}>
                            <Button type='submit' onClick={(e) => submitHandler(e)} colorScheme={'green'} >Submit</Button>
                            <Button type='reset' onClick={() => reset()} colorScheme='red'>Reset</Button>
                        </HStack>
                    </Center>
                </FormControl>
            </form>

        </Center>
    </Container>)
}
export default Publisher 
