import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Heading } from "@chakra-ui/layout";
import { Box, Flex, Image } from '@chakra-ui/react';
import  matches from '../public/matches_picture.png';

const Rules: NextPage = () => {
  const [, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Flex as="div" flexDirection="column" width="100%" color="#DCD7C9" p={8}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={8} alignItems="stretch">
        <Flex flexDirection="row" flex="1" p={4} bg="gray.800" borderRadius="md" boxShadow="md">
          <Box mb={4}>
            <Heading paddingRight={4} paddingLeft={4} size="lg">HISTORICAL CONTEXT</Heading>
          </Box>
          <Box w="2px" h="80px" bg="#DCD7C9" />
          <Flex flexDirection="column" gap={4}>
            <Flex flexDirection="column">
              <Box paddingLeft={4} textAlign="center">
                The history of Nim's game dates back to ancient times, with its origin remaining enigmatic. Traces of this intriguing game are discovered in China, where it was referred to as fan-tan, while in Africa it was known as tiouk-tiouk. The current name, "Nim", has its roots in the German word "nimm", which means "take!". It was the American mathematician Charles Leonard Bouton who gave it this name in 1901.
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex marginTop={8} flexDirection={{ base: "column", md: "row" }} gap={8} alignItems="stretch">
        <Flex flexDirection="row" flex="1" p={4} bg="gray.800" borderRadius="md" boxShadow="md">
          <Box mb={4}>
            <Heading whiteSpace="nowrap" paddingRight={4} paddingLeft={4} size="lg">HOW TO PLAY ?</Heading>
          </Box>
          <Box w="2px" h="80px" bg="#DCD7C9" />
          <Flex flexDirection="column" gap={4}>
            <Flex flexDirection="column">
              <Box paddingLeft={4} textAlign="center">
                This game consists of placing 13 matches in a single line or pile. In turn, the two players must take between 1 and 3 matches from those placed on the table. Whoever strikes the last match loses.<br/> Furthermore, we added the possibility for you to choose with how many matches you want to start to play.
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex marginTop={8} flexDirection={{ base: "column", md: "row" }} gap={8} alignItems="stretch">
        <Flex flexDirection="row" flex="1" p={4} justifyContent="center">

        <Image
        	src={matches.src}
        	alt='matches_picture'
          objectFit="cover"
     		  width="110vh" 
        	height="auto" 
        	sx={{ filter: 'brightness(105%)' }}
      		/>
        
        
        </Flex>  
      </Flex>
    </Flex>
  );
}

export default Rules;