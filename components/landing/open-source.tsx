import React from "react";
import {
  Box,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Flex,
  Icon,
  Image,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
const OpenSource = ({ contributors }) => {
  return (
    <Box
      as="section"
      mt={{ base: "6rem", md: "6" }}
      pt={{ base: "6rem", md: "10rem" }}
      my={12}
      mx={{ base: "1rem", md: "5rem" }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
        <Flex bg="brand.400">
          <Image
            src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Z2l0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Open Source"
            fit="cover"
            w="full"
            h={{ base: 64, md: "full" }}
            bg="gray.100"
            loading="lazy"
            opacity={0.9}
          />
        </Flex>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{ base: 4, md: 8, lg: 20 }}
          py={10}
        >
          <Box
            color={useColorModeValue("brand.600", "gray.300")}
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="extrabold"
          >
            Help us grow
          </Box>
          <Box
            mb={4}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color={useColorModeValue("brand.600", "gray.300")}
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
          >
            We're open source
          </Box>
          <Box
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize="lg"
            color={useColorModeValue("brand.600", "gray.400")}
            letterSpacing="wider"
          >
            because{" "}
            <i>the right to learn and to share what is learned with others </i>
            is fundamental to product growth and relevance.
            <Box>
              {" "}
              So <b>join us now.</b>{" "}
            </Box>
          </Box>
          <Box display="inline-flex" rounded="md" shadow="md">
            <Link
              href={process.env.githubChoc}
              mt={2}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("white", "inherit")}
              bg={useColorModeValue("brand.600", "brand.500")}
              _hover={{
                bg: useColorModeValue("brand.700", "brand.600"),
              }}
            >
              Contribute to Choc UI
              <Icon as={FiExternalLink} ml={2} />
            </Link>
          </Box>
          <Box mt={5}>
            <Box>
              {contributors &&
                contributors.map((contributor, cid) => (
                  <Tooltip
                    hasArrow
                    label={contributor.name}
                    aria-label={contributor.name}
                    key={cid}
                  >
                    <Avatar
                      size={contributors.length > 13 ? "sm" : "md"}
                      as="a"
                      href={contributor.profile}
                      target="_blank"
                      name={contributor.name}
                      src={contributor.avatar_url}
                      loading="lazy"
                      rel="noreferrer"
                      ml={-2}
                    />
                  </Tooltip>
                ))}
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default OpenSource;
