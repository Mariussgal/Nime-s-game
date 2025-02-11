import { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";

const Game = () => {
  const [matches, setMatches] = useState<number | null>(null);
  const [playerMove, setPlayerMove] = useState<number>(1);
  const [gameStatus, setGameStatus] = useState<string | null>("");
  const [inputMatches, setInputMatches] = useState<string>(""); 


  const startGame = () => {
    if (!matches || matches < 1) {
      setGameStatus("Enter a valid number of matches.");
      return;
    }
    setGameStatus(`The game starts with ${matches} matches.`);
  };

  const playTurn = async () => {
    if (!matches || matches < 1) {
      setGameStatus("The game ended or is invalid.");
      return;
    }
    if (playerMove < 1 || playerMove > 3|| isNaN(playerMove)) {
      setGameStatus("Choose between 1 and 3 matches.");
      return;

    
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/play", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ matches, player_move: playerMove }),
      });

      const data = await response.json();
      console.log("Réponse de l'API:", data);

      if (data.error) {
        setGameStatus(data.error);
      } else {
        setMatches(data.matches);
        if (data.matches > 0) {
          setGameStatus(`AI played ${data.ai_move}.  ${data.matches} matches left.`);
        } else {
          setGameStatus(data.result);
        }
      }
    } catch (error) {
      console.error("Erreur lors de la requête API:", error);
      setGameStatus("Erreur de connexion avec le serveur.");
    }
  };

  
  console.log(gameStatus);
  return (
    <VStack spacing={4}>
      <Text mt={5} fontSize="xl" color={"white"}>Nime's game</Text>
      <Text color={"white"}>{gameStatus}</Text>

      {!matches ? (
        <>
          <Input
            placeholder="Number of matches"
            type="number"
            color={"white"}
            onChange={(e) => {
              setInputMatches(e.target.value); 
            }}
          />
          <Button onClick={() => {
            const value = parseInt(inputMatches, 10);
            if (!isNaN(value) && value > 0) {
              setMatches(value);
              setGameStatus(`The game starts with ${value} matches.`); 
            } else {
              setGameStatus("Choose a valid amount of matches.");
            }
          }} colorScheme="blue">Commencer</Button>
        </>
      ) : (
        <>
          <Input
            placeholder="Take from 1 to 3 matches"
            type="number"
            min={1}
            max={3}
            color={"white"}
            onChange={(e) => setPlayerMove(parseInt(e.target.value, 10) || 1)}
          />
          <Button onClick={playTurn} colorScheme="green">Play</Button>
        </>
      )}
    </VStack>
  );
};

export default Game;
