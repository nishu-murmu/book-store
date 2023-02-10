import Head from 'next/head'
import Layout from '../components/layout/main'
import {
    Container, Table, Button,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import CustomField from '../components/commonComponent/customField'

export default function Home() {

    interface bookDetails {
        bookName: string
        author: string
        publisherName: string
        pricing?: number
        ratings?: number
    }

    // Setting states
    const [booksList, setBooksList] = useState<[]>([])
    const [deleteBook, setDeleteBook] = useState<boolean>(false)

    //API calls
    const deleteBookHandler = async (id: string): Promise<void> => {
        console.log(id, "id")
        await fetch("http://localhost:5005/book/delete", {
            method: 'DELETE',
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id })
        })
    }
    const getBooksList = async (): Promise<Array<bookDetails>> => {
        const response = await fetch("http://localhost:5005/book/get")
        const result = await response.json()
        setBooksList(result)
        return result
    }

    //side Effects
    useEffect(() => {
        getBooksList()
    }, [deleteBook])

    return (
        <Container maxW={'900px'}>
            <Head>
                <title>Book Store</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/bookstore.ico" />
            </Head>
            <Layout heading='Book Store' />

            <TableContainer mt={10}>
                <Table size={'sm'} colorScheme='teal'>
                    <TableCaption>List of Books</TableCaption>
                    <Thead>
                        <Tr>
                            <Th color={'white'} textAlign={'center'}>Book Name</Th>
                            <Th color={'white'} textAlign={'center'}>Author Name</Th>
                            <Th color={'white'} textAlign={'center'}>Publisher Name</Th>
                            <Th color={'white'} textAlign={'center'}>Pricing</Th>
                            <Th color={'white'} textAlign={'center'}>Ratings</Th>
                            <Th color={'white'} textAlign={'center'}>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {booksList.map((item: any) => (
                            <Tr>
                                <CustomField field={"bookName"} id={item._id} value={item.bookName} />
                                <CustomField field={"author"} id={item._id} value={item.author} />
                                <CustomField field={"publisherName"} id={item._id} value={item.publisherName} />
                                <CustomField field={"pricing"} id={item._id} value={item.pricing} />
                                <CustomField field={"ratings"} id={item._id} value={item.ratings} />

                                <Td textAlign='center'><Button onClick={() => {
                                    deleteBookHandler(item._id)
                                    setDeleteBook(prev => !prev)
                                }} colorScheme={'teal'}>
                                    <FaTrash color='red' />
                                </Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}
