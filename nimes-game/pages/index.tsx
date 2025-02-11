import type { NextPage } from 'next';
import Marquee from "react-fast-marquee";
import { Box, Flex, VStack, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  
  
    return (
	<Flex flexDirection="column" height="90vh" width="100%" color="#DCD7C9">
	  <Flex flex={1} justifyContent="center" alignItems="center" px={6}>
		<Box
		width="45%"
		textAlign="center"
		display="flex"
		flexDirection="column"
		alignItems="center"
		>

		
		<VStack spacing={3} align="center">
		  <Text fontSize={[ '4xl']} fontWeight="bold">
			 Welcome to Nime's Game!
		  </Text>
		</VStack>
		<Text fontSize={['md', 'lg']} mt={6} maxW="700px">
        It is a strategic game where you pick between 1 to 3 matches each turn. Compete against the computer and avoid picking the last match to win!
		</Text>
		<Text fontSize="sm" fontWeight="semibold" letterSpacing="wide" mt={6} display={["none", "block"]}>
		  MARIUS 
		</Text>
		</Box>
		
	  </Flex>

	  <Box
		display="flex"
		justifyContent="center"
		height="10%"
		width="100%"
		mb={5}
	  >
		<Box
		display="flex"
		flexDirection="row"
		alignItems="center"
		height="auto"
		border="1px solid #DCD7C9"
		boxSizing="border-box"
		borderRadius="10px"
		width="100%"
		>


	
		<Marquee
		  direction="right"
		  speed={50}
		  gradient={false}
		  pauseOnHover={true}
		  style={{ width: '100%' }}
		>
		  <Text m="10px auto" mr={5} transition="all .15s linear">
			MATCHSTICK GAME &copy; {new Date().getFullYear()}
		  </Text>
		  <Text mr={5} transition="all .15s linear">
			
		  </Text>
		  <Text mr={5} transition="all .15s linear">
			
		  </Text>
		</Marquee>
		</Box>
	  </Box>
	</Flex>
  );
};

export default Home;
