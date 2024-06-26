import { Button, Container, Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Container maxW={'container.lg'} my={4}>
        <Flex w={'full'} justifyContent={{base:'center', sm:'space-between'}} alignItems={'center'}>
            <Image src='/logo.png' h={20} display={{base:'none', sm:'block'}} cursor={'pointer'}/>
            <Flex gap={4}>
                <Link to='/auth'>
                <Button colorScheme={'blue'} size={'sm'}>Login</Button>
                </Link>
                <Link to='/auth'>
                <Button variant={'outline'} size={'sm'}>
                    Sign up
                </Button>
                </Link>
            </Flex>
        </Flex>
    </Container>
  )
}

export default Navbar
