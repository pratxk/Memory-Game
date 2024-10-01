import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import MemoryCard from './MemoryCard';

const arr = [
    {
      img:"https://www.shutterstock.com/editorial/image-editorial/N0zek0x4M4zcA32dMTI0NA==/bollywood-actresses-prity-zinta-international-indian-film-440nw-7859752c.jpg",
      name:"prity",
      id:1
    },
    {
      img:"https://www.shutterstock.com/editorial/image-editorial/N0zek0x4M4zcA32dMTI0NA==/bollywood-actresses-prity-zinta-international-indian-film-440nw-7859752c.jpg",
      name:"prity",
      id:2
    },
    {
      img:"https://m.media-amazon.com/images/M/MV5BOTYwNTc1ODE0NF5BMl5BanBnXkFtZTgwNjU3OTA3MjI@._V1_.jpg",
      name:"jacquline",
      id:3
    },
    {
      img:"https://m.media-amazon.com/images/M/MV5BOTYwNTc1ODE0NF5BMl5BanBnXkFtZTgwNjU3OTA3MjI@._V1_.jpg",
      name:"jacquline",
      id:4
    },
    {
      img:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1nTvVc.img?w=768&h=1333&m=6&x=619&y=295&s=358&d=358",
      name:"nora",
      id:5
    },
    {
      img:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1nTvVc.img?w=768&h=1333&m=6&x=619&y=295&s=358&d=358",
      name:"nora",
      id:6
    },
    {
      img:"https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg",
      name:"Aishwariya",
      id:7
    },
    {
      img:"https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg",
      name:"Aishwariya",
      id:8
    },
    {
      img:"https://www.thestatesman.com/wp-content/uploads/2024/03/Alia-Bhatt.jpg",
      name:"Alia",
      id:9
    },
    {
      img:"https://www.thestatesman.com/wp-content/uploads/2024/03/Alia-Bhatt.jpg",
      name:"Alia",
      id:10
    },
    {
      img:"https://jang.com.pk/assets/uploads/updates/2024-07-17/16224_6914659_Deepika-Padukone_updates.jpg",
      name:"Deepika",
      id:11
    },
    {
      img:"https://jang.com.pk/assets/uploads/updates/2024-07-17/16224_6914659_Deepika-Padukone_updates.jpg",
      name:"Deepika",
      id:12
    },
  ]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Memory = () => {
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [score, setScore] = useState(0);
    const [matchedPairs, setMatchedPairs] = useState(new Set());
    const [cards, setCards] = useState([]);
    const [moves, setMoves] = useState(0);

    useEffect(() => {
        setCards(shuffleArray([...arr])); // Shuffle only on mount
    }, []);

    const handleCardClick = (index, name) => {
        if (flippedIndices.length < 2 && !flippedIndices.includes(index) && !matchedPairs.has(name)) {
            setFlippedIndices([...flippedIndices, index]);

            if (flippedIndices.length === 1) {
                setMoves(moves + 1);

                const firstIndex = flippedIndices[0];
                const firstName = cards[firstIndex].name;

                if (firstName === name) {
                    setScore(score + 1);
                    setMatchedPairs(new Set(matchedPairs).add(name));
                    setFlippedIndices([]);
                } else {
                    setTimeout(() => {
                        setFlippedIndices([]);
                    }, 1000);
                }
            }
        }
    };

    return (
        <Box bg='teal' p={6} borderRadius="md" boxShadow="lg">
            <Text fontSize='xl' color='white' mb={4}>Score: {score}</Text>
            <Text fontSize='xl' color='white' mb={4}>Moves: {moves}</Text>
            <Grid templateColumns='repeat(auto-fit, minmax(220px, 1fr))' gap={4}>
                {cards.map((ele, index) => (
                    <GridItem key={ele.id}>
                        <MemoryCard
                            ele={ele}
                            isFlipped={flippedIndices.includes(index) || matchedPairs.has(ele.name)}
                            onClick={() => handleCardClick(index, ele.name)}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default Memory;
