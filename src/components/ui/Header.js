import { Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../img/logo.png'

const Header = () => {
    return (
        <Flex
            width="100%"
            as="nav"
            mt="2.5rem"
        >
            <Image src={Logo} w="15%" h="100%" ml="auto" mr="auto" />
        </Flex>
    )
}

export default Header
