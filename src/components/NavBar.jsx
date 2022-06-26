import { Box, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Email from "../assets/social-media-icons/email_32x32.png";
import FaceBook from "../assets/social-media-icons/facebook_32x32.png";
import Twitter from "../assets/social-media-icons/twitter_32x32.png";

const NavBar = () => {
	return (
		<div>
			<Flex justify="space-between" align="center" padding="30px">
				{/*left side-social media icons */}
				<Flex
					justify="space-around"
					padding="0 75px"
					width="40%"
					display={{ sm: "flex" }}
				>
					<Link href="https://www.facebook.com">
						<Image
							src={FaceBook}
							alt="facebook img"
							boxSize="42px"
							margin="0 15px"
						/>
					</Link>

					<Link href="https://www.twitter.com">
						<Image
							src={Twitter}
							alt="twitter img"
							boxSize="42px"
							margin="0 15px"
						/>
					</Link>

					<Link href="https://www.gmail.com">
						<Image src={Email} alt="gmail img" boxSize="42px" margin="0 15px" />
					</Link>
				</Flex>
				{/*right side-sections and connect */}
				<Flex
					justify="space-around"
					width="40%"
					padding="30px"
					fontSize={{ base: "18px", md: "16px", lg: "14px" }}
					mr={3}
                    fontFamily= "inherit"
				>
					<Box margin="0 15px">About</Box>
					<Spacer />
					<Box margin="0 15px">Mint</Box>
					<Spacer />
					<Box margin="0 15px">Team</Box>
					<Spacer />
					{/*connect button */}
					{/*check if connected with isConnected */}
				</Flex>
			</Flex>
		</div>
	);
};

export default NavBar;
