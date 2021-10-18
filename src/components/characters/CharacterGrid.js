import React from 'react'
import { Flex } from '@chakra-ui/layout';
import { Container, Grid, Box, Heading } from "@chakra-ui/react"
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? ( <h1>Loading...</h1> ) : (
        <Container maxW="container.xl" color="whiteAlpha.700">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {items.map((item) => (
                    <CharacterItem key={items.indexOf(item)} item={item} />
                ))}
            </Grid>
        </Container>
    )
}

export default CharacterGrid
