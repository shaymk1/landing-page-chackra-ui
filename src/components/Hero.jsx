import { Box, Button, Text } from "@chakra-ui/react";

const Hero = () => {
	return (
		<Box align="center" color={{ sm: "Orange 400" , md: "Orange 400"}} ml={2} mr={2}>
			<Text fontSize={{ base: "34px", md: "20px", lg: "16px" }}>RoboPunks</Text>
			<Text
				fontSize={{ base: "24px", md: "16px", lg: "10px" }}
				color={{ base: "Orange 400" }}
			>
				Three millenials has passed now, can the RoboPunks save humanity from
				their destructive need for NFT's? Mint RoboPunks to find out!
			</Text>
			<Button
				backgroundColor="#D6517D"
				borderRadius="5px"
				boxShadow="0 2px 2px 1px #0F0F0F"
				color="white"
				cursor="pointer"
				fontFamily="inherit"
				padding="15px"
				marginTop="10px"
			>
				Find Out More
			</Button>
		</Box>
	);
};

export default Hero;
