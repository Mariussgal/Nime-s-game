import { useState } from "react";
import { Button, Input, Text, VStack, Flex, Box } from "@chakra-ui/react";

const Game = () => {
  const [matches, setMatches] = useState<number | null>(null);
  const [playerMove, setPlayerMove] = useState<number | null>(null);
  const [gameStatus, setGameStatus] = useState<string | null>("");
  const [inputMatches, setInputMatches] = useState<string>("");

  const playTurn = async () => {
    if (!matches || matches < 1) {
      setGameStatus("The game ended or is invalid.");
      return;
    }
    if (playerMove === null || playerMove < 1 || playerMove > 3) {
      setGameStatus("Choose between 1 and 3 matches.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/play", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matches, player_move: playerMove }),
      });

      const data = await response.json();
      console.log("Réponse de l'API:", data);

      if (data.error) {
        setGameStatus(data.error);
      } else {
        setMatches(data.matches);
        if (data.matches > 0) {
          setGameStatus(`AI played ${data.ai_move}. ${data.matches} matches left.`);
        } else {
          setGameStatus(data.result);
        }
      }
    } catch (error) {
      console.error("Erreur lors de la requête API:", error);
      setGameStatus("Erreur de connexion avec le serveur.");
    }
    setPlayerMove(null);  
    setInputMatches("");
  };

  const handlePlayClick = () => {
    if (playerMove === null || isNaN(playerMove) || playerMove < 1 || playerMove > 3) {
      setGameStatus("Please enter a valid number of matches to take (1 to 3).");
      return;
    }
    playTurn();
  };

  const StartNewGame = () => {
    setMatches(null);
    setPlayerMove(null);
    setGameStatus("");
    setInputMatches("");
  };

  return (
    <VStack spacing={4}>
      <Text mb= {40} mt={5} fontSize={[ '3xl']} fontWeight="bold" color="white">Nime's game</Text>
      <Text color="white">{gameStatus}</Text>

      {!matches ? (
        <>
          <Input
            width="50vh"
            placeholder="With how many matches you want to play"
            type="number"
            color="white"
            value={inputMatches}
            onChange={(e) => setInputMatches(e.target.value)}
          />
          <Button
            borderRadius={20}
            onClick={() => {
              const value = parseInt(inputMatches, 10);
              if (!isNaN(value) && value > 0) {
                setMatches(value);
                setGameStatus(`The game starts with ${value} matches.`);
                setInputMatches("");
              } else {
                setGameStatus("Choose a valid amount of matches to start playing.");
              }
            }}
            colorScheme="blue"
          >
            Start game
          </Button>
        </>
      ) : (
        <>
          <Input
            width="50vh"
            placeholder="Take from 1 to 3 matches"
            type="number"
            min={1}
            max={3}
            color="white"
            value={inputMatches}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setInputMatches("");
                setPlayerMove(null);
                return;
              }

              const parsedValue = parseInt(value, 10);
              if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 3) {
                setPlayerMove(parsedValue);
                setInputMatches(value);
              }
            }}
          />

          <Flex flexDirection="row">
            <Box px={6} w="200px">
              <Button
                w="full"
                borderRadius={20}
                onClick={handlePlayClick}
                colorScheme="blue"
              >
                Play
              </Button>
            </Box>
            <Box px={6} w="200px">
              <Button
                w="full"
                borderRadius={20}
                onClick={StartNewGame}
                colorScheme="blue"
              >
                Start new game
              </Button>
            </Box>
          </Flex>
        </>
      )}
    </VStack>
  );
};

export default Game;
