import { Button, Input, HStack, Container, Center, FormControl, FormLabel } from '@chakra-ui/react'

import Layout from "../components/layout/main"


const Publisher: React.FC = () => {
  return (<Container>
    <Layout heading='Add Publisher' />
    <Center mt={"40px"}>
      <FormControl>
        <FormLabel htmlFor='publishername'>Publisher Name:</FormLabel>
        <Input type={'text'} id={'publishername'} />
        <FormLabel htmlFor='address'>Address:</FormLabel>
        <Input type={'text'} id={'address'} />
        <Center mt={10}>
          <HStack spacing={20}>
            <Button type='submit' colorScheme={'green'} >Submit</Button>
            <Button type='reset' colorScheme='red'>Reset</Button>
          </HStack>
        </Center>
      </FormControl>
    </Center>
  </Container>)
}
export default Publisher 
