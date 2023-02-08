import { HStack, Box, Container, Center, Button, Heading, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import Link from 'next/link'

interface LayoutProps {
    heading: string
}

const Main: React.FC<LayoutProps> = (props) => {
    const { toggleColorMode } = useColorMode()
    return (
        <Container mt={5}>
            <Center>
                <HStack>
                    <Heading as={'h1'} size={'lg'}>
                        {props.heading}
                    </Heading>
                    <Button colorScheme={'teal'} onClick={() => toggleColorMode()}>
                        {useColorModeValue(<FaSun />, <FaMoon />)}
                    </Button>
                </HStack>
            </Center>
            <Center mt={'20px'}>
                <HStack spacing={'100px'}>
                    <Box h='10'><Link href="/"><Button colorScheme="teal" color="black">Home</Button></Link></Box>
                    <Box h='10'><Link href="/book"><Button colorScheme="teal" color="black">Book</Button></Link></Box>
                    <Box h='10'><Link href="/publisher"><Button colorScheme="teal" color="black">Publisher</Button></Link></Box>
                </HStack>
            </Center>
        </Container>
    )
}

export default Main
