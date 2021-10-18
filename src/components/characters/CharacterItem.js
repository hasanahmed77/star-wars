import React from 'react'
import { Flex } from '@chakra-ui/layout';

const CharacterItem = ({ item }) => {
    console.log(item)
    return (
        <Flex>
            {item.name}
        </Flex>
    )
}

export default CharacterItem
