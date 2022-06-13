import React from "react";
import { chakra, Box, SimpleGrid, Flex, Icon } from "@chakra-ui/react";

const Choc = () => {
  const Feature = (props) => {
    return (
      <Box>
        <Icon
          boxSize={12}
          _light={{ color: "brand.700" }}
          mb={4}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          _light={{ color: "gray.900" }}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color="gray.600"
          _dark={{ color: "gray.400" }}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={20}
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="xl"
      >
        <Feature
          title="Unify your payments stack"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          }
        >
          Manage all your online and offline sales in one place with a single
          integration, simplifying reporting and reconciliation. Terminal works
          seamlessly with Payments, Connect, and Billing.
        </Feature>

        <Feature
          title="Own your in-store experience"
          icon={
            <path
              fillRule="evenodd"
              d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
              clipRule="evenodd"
            />
          }
        >
          Provide a seamless customer experience across channels, like reserving
          online and picking up in store. Our SDKs make it easy to integrate
          into your own mobile and web applications to accept in-store payments.
        </Feature>

        <Feature
          title="Grow your platform’s revenue"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          }
        >
          Add in-person payments to your platform or marketplace. Using Terminal
          with Connect, you can onboard users for online and in-person payments,
          and unify their payouts across channels.
        </Feature>
      </SimpleGrid>
    </Flex>
  );
};
export default Choc;
