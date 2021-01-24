import React from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

export default function S3c() {
  const Feature = (props) => {
    return (
      <Box>
        <Icon
          boxSize={12}
          color={useColorModeValue("brand.700")}
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
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <Flex
      bg="gray.600"
      p={20}
      width="auto"
      justifyContent="center"
      alignItems="center"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={20}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="xl"
      >
        <Feature
          title="Unify your payments stack"
          icon={
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
}
