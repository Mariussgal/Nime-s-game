import { useBreakpointValue } from "@chakra-ui/react";
import { Flex, HStack, Button, Box, Link, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import matchstick from '../public/matchstick.png';

export default function Header() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Flex alignItems="center" h="10vh" borderBottom="1px" justifyContent="space-between">
                <Box display="flex" ml={15}  alignItems="center" flex="1" justifyContent="flex-start">
                    <Box isTruncated onMouseEnter={() => setHoveredLink("home")} onMouseLeave={() => setHoveredLink(null)}>
                        <Link
                            href="/"
                        >
                        <Image
                            src={matchstick.src}
                            alt='matches_picture'
                            objectFit="cover"
                            width="10vh"
                            height="auto"
                            sx={{ filter: 'brightness(105%)' }}
                        />
                        </Link>
                    </Box>
                </Box>
                    
                <Flex flex="1" alignItems="center" justifyContent="center" > 
                    <HStack spacing="4vw">
                    <Box isTruncated onMouseEnter={() => setHoveredLink("home")} onMouseLeave={() => setHoveredLink(null)}>
                        <Button
                            onMouseEnter={() => setHoveredLink("HOME")}
                            onMouseLeave={() => setHoveredLink(null)}
                            as={Link}
                            href="/"
                            fontSize={{ md: "lg", base: "md" }}
                            bg={hoveredLink === "home" ? "whiteAlpha.200" : "transparent"}
                            color={hoveredLink === "home" ? "white" : "#DCD7C9"}
                            _hover={{ textDecoration: "none", bg: "whiteAlpha.300" }}
                            size="sm"
                        >
                            HOME
                        </Button>
                    </Box>
                    <Box isTruncated onMouseEnter={() => setHoveredLink("rules")} onMouseLeave={() => setHoveredLink(null)}>
                        <Button
                            onMouseEnter={() => setHoveredLink("RULES")}
                            onMouseLeave={() => setHoveredLink(null)}
                            as={Link}
                            href="/rules"
                            fontSize={{ md: "lg", base: "md" }}
                            bg={hoveredLink === "rules" ? "whiteAlpha.200" : "transparent"}
                            color={hoveredLink === "rules" ? "white" : "#DCD7C9"}
                            _hover={{ textDecoration: "none", bg: "whiteAlpha.300" }}
                            size="sm"
                        >
                            RULES
                        </Button>
                    </Box>
                    <Box isTruncated onMouseEnter={() => setHoveredLink("about")} onMouseLeave={() => setHoveredLink(null)}>
                        <Button
                            onMouseEnter={() => setHoveredLink("GAME")}
                            onMouseLeave={() => setHoveredLink(null)}
                            as={Link}
                            href="/game"
                            fontSize={{ md: "lg", base: "md" }}
                            bg={hoveredLink === "about" ? "whiteAlpha.200" : "transparent"}
                            color={hoveredLink === "about" ? "white" : "#DCD7C9"}
                            _hover={{ textDecoration: "none", bg: "whiteAlpha.300" }}
                            size="sm"
                        >
                            GAME
                        </Button>
                    </Box>
                </HStack>
            </Flex>
            <Box display="flex" alignItems="center" flex="1" justifyContent="flex-end" >
                <Text></Text>
            </Box>
        </Flex>
    );
}