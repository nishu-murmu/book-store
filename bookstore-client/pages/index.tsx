import Head from 'next/head'
import Layout from '../components/layout/main'
import {
  Container, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useState } from 'react'


export default function Home() {
  const [bookList, setBookList] = useState()


  return (
    <Container>
      <Head>
        <title>Book Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bookstore.png" />
      </Head>
      <Layout heading='Book Store' />

      <TableContainer mt={10}>
        <Table size={'md'} colorScheme='teal'>
          <TableCaption>List of Books</TableCaption>
          <Thead>
            <Tr>
              <Th color={'white'} textAlign={'center'}>one</Th>
              <Th color={'white'} textAlign={'center'}>two</Th>
              <Th color={'white'} textAlign={'center'}>three</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                value one
              </Td>
              <Td>
                value two
              </Td>
              <Td>
                value three
              </Td>
            </Tr>
          </Tbody>
        </Table>

      </TableContainer>
    </Container>
  )
}
