import React from "react";
import {
	chakra,
	Flex,
	HStack,
	IconButton,
	useColorMode,
	useColorModeValue,
	useDisclosure,
	useUpdateEffect,
	Image,
	Icon,
	Box,
	Menu,
	MenuButton,
	MenuList,
	MenuOptionGroup,
	MenuItemOption
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import SponsorButton from "./sponsor-button";
import DocSearch from "../doc-search";
import { MobileNavButton, MobileNavContent } from "./mobile-nav";
import NextLink from "next/link";

const HeaderContent = () => {
	const mobileNav = useDisclosure();

	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const mobileNavBtnRef = React.useRef();

	useUpdateEffect(() => {
		mobileNavBtnRef.current?.focus();
	}, [mobileNav.isOpen]);

	const DiscordIcon = (
		<Icon viewBox="0 0 146 146" focusable="false">
			<path
				fill="currentColor"
				d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z"
				fillRule="nonzero"
			></path>{" "}
		</Icon>
	);

	return (
		<React.Fragment>
			<Flex w="100%" h="100%" px="6" align="center" justify="space-between">
				<Flex align="center" w="full">
					<NextLink href="/" passHref>
						<Box cursor="pointer">
							<Image
								alt="logo"
								src="/logo.png"
								style={{ height: "30px", float: "left" }}
								mr={2}
							/>
							<chakra.span
								fontSize="1.3rem"
								fontFamily="heading"
								fontWeight="bold"
								style={{ float: "right" }}
							>
								<chakra.span
									color="brand.400"
									textShadow="2px 0 currentColor"
									letterSpacing="widest"
								>
									Choc
								</chakra.span>{" "}
								UI
							</chakra.span>
						</Box>
					</NextLink>
				</Flex>

				<DocSearch display={{ base: "none", md: "flex" }} />

				<Flex
					justify="flex-end"
					w="full"
					maxW="824px"
					align="center"
					color="gray.400"
				>
					<HStack display="flex">
						<IconButton
							as="a"
							href={"https://discord.gg/XcD8bNv7Ne"}
							target="_blank"
							size="md"
							fontSize="lg"
							aria-label="Choc UI Discord server"
							variant="ghost"
							color="current"
							icon={DiscordIcon}
						/>
						<IconButton
							as="a"
							href={process.env.githubChoc}
							target="_blank"
							size="md"
							fontSize="lg"
							aria-label="Choc UI's Github Repo"
							variant="ghost"
							color="current"
							icon={<FaGithub />}
						/>
						<IconButton
							size="md"
							fontSize="lg"
							aria-label={`Switch to ${text} mode`}
							variant="ghost"
							color="current"
							onClick={toggleMode}
							icon={<SwitchIcon />}
						/>
						<IconButton
							size="md"
							fontSize="lg"
							aria-label="Switch Brand Color"
							variant="ghost"
							color="current"
							icon={<IoColorPalette />}
						/>
						<Menu closeOnSelect={false}>
							<MenuButton colorScheme="blue">MenuItem</MenuButton>
							<MenuList minWidth="240px">
								<MenuOptionGroup>
									<MenuItemOption value="email">Email</MenuItemOption>
									<MenuItemOption value="phone">Phone</MenuItemOption>
									<MenuItemOption value="country">Country</MenuItemOption>
								</MenuOptionGroup>
							</MenuList>
						</Menu>
					</HStack>
					<SponsorButton ml="5" />
					<MobileNavButton
						ref={mobileNavBtnRef}
						aria-label="Open Menu"
						onClick={mobileNav.onOpen}
					/>
				</Flex>
			</Flex>
			<MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
		</React.Fragment>
	);
};

const Header = (props) => {
	const bg = useColorModeValue("white", "gray.800");
	const ref = React.useRef();
	const [y, setY] = React.useState(0);
	const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

	const { scrollY } = useViewportScroll();
	React.useEffect(() => {
		return scrollY.onChange(() => setY(scrollY.get()));
	}, [scrollY]);

	return (
		<chakra.header
			ref={ref}
			shadow={y > height ? "lg" : undefined}
			transition="box-shadow 0.5s ease-in-out"
			pos="fixed"
			top="0"
			zIndex="1"
			bg={bg}
			left="0"
			right="0"
			borderTop="0px solid"
			borderTopColor="brand.400"
			borderBottom="1px solid"
			borderBottomColor={useColorModeValue("gray.200", "gray.900")}
			width="full"
			{...props}
		>
			<chakra.div height="4.5rem" mx="auto">
				<HeaderContent />
			</chakra.div>
		</chakra.header>
	);
};

export default Header;
