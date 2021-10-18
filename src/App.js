import { Flex } from '@chakra-ui/layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
import Background from './img/background.jpg'

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://swapi.dev/api/people/`)

      console.log(result.data.results);
      setItems(result.data.results);
      setIsLoading(false);
    }

    fetchItems();
  }, [])

  return (
    <Flex
      flexDir="column"
      backgroundImage={Background}
      backgroundPosition="cover"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      height="100vh"
      width="100%"
      overflow="hidden"
    >
      <Header/>
      <CharacterGrid items={items} isLoading={isLoading} />
    </Flex>
  );
}

export default App;
