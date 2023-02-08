import { Button, HStack, Input, Container, Center, FormControl, FormLabel } from '@chakra-ui/react'
import { useState, useRef } from 'react'

import Layout from "../components/layout/main"


const Book: React.FC = () => {

    // const [bookName, setBookName] = useState('')
    const bookNameRef = useRef<HTMLInputElement>(null)
    const [publisherName, setPublisherName] = useState('')
    const [date, setDate] = useState(new Date(Date.now()))
    const [genre, setGenre] = useState('')
    const [pricing, setPricing] = useState(0)
    const [ratings, setRatings] = useState(0)
    const [coverType, setCoverType] = useState('')


    const submitHandler = async () => {

        const bookdetails = {
            bookName: bookNameRef.current?.value,
            publisherName,
            genre,
            date,
            pricing,
            ratings,
            coverType
        }
        console.log(JSON.stringify(bookdetails), "details")
        await fetch("http://localhost:5005/api/book/create", {
            method: 'POST',
            body: JSON.stringify({
                bookName: bookNameRef.current?.value,
                publisherName,
                genre,
                date,
                pricing,
                ratings,
                coverType
            })
        })
    }
    const resetInputs = () => {
        // setBookName("")
        setDate(new Date())
        setPublisherName("")
        setCoverType("")
        setGenre("")
        setPricing(0)
        setRatings(0)
    }

    return (<Container>
        <Layout heading='Add Book' />
        <Center mt={"40px"}>
            <FormControl isRequired>
                <FormLabel htmlFor='bookname'>Book Name:</FormLabel>
                <Input type={'text'} id={'bookname'} ref={bookNameRef} />
                <FormLabel htmlFor='date'>Date:</FormLabel>
                <Input type={'date'} id={'date'} onChange={(e) => setDate(new Date(e.target.value))} />
                <FormLabel htmlFor='publishername'>Publisher Name:</FormLabel>
                <Input type={'text'} id={'publishername'} value={publisherName} onChange={(e) => setPublisherName(e.target.value)} />
                <FormLabel htmlFor='genre'>Genre:</FormLabel>
                <Input type={'text'} id={'genre'} value={genre} onChange={(e) => setGenre(e.target.value)} />
                <FormLabel htmlFor='price'>Price ($):</FormLabel>
                <Input type={'number'} id={'price'} value={parseInt(pricing)} onChange={(e) => setPricing(Number(e.target.value))} />
                <FormLabel htmlFor='ratings'>Ratings:</FormLabel>
                <Input type={'number'} id={'ratings'} value={parseFloat(ratings)} onChange={(e) => setRatings(parseFloat(e.target.value))} />
                <FormLabel htmlFor='covertype'>Cover Type:</FormLabel>
                <Input type={'text'} id={'covertype'} value={coverType} onChange={(e) => setCoverType(e.target.value)} />
                <Center mt={10}>
                    <HStack spacing={20}>
                        <Button type='submit' onClick={() => submitHandler()} colorScheme={'green'} >Submit</Button>
                        <Button type='reset' onClick={() => resetInputs()} colorScheme='red'>Reset</Button>
                    </HStack>
                </Center>
            </FormControl>
        </Center>
    </Container>)
}
export default Book
