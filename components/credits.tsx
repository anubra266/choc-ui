import { Text, Icon, Link, VStack, HStack } from "@chakra-ui/react";

import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Credits() {
  return (
    <VStack>
      <Text
        maxW="560px"
        mx="auto"
        textAlign="center"
        opacity={0.7}
        fontSize="sm"
        mt="16"
        mb={3}
      >
        Proudly developed in{" "}
        <Icon viewBox="0 0 6 3" boxSize={4}>
          <rect width="6" height="4" fill="#008751" />
          <rect x="2" width="2" height="4" fill="#FFF" />
        </Icon>{" "}
        by{" "}
        <Link isExternal href="https://twitter.com/anubra266">
          Anuoluwapo Abraham
        </Link>
      </Text>
      <HStack spacing={4}>
        <Link isExternal href={process.env.githubUrl}>
          <Icon as={FaGithub} boxSize={4} />
        </Link>
        <Link isExternal href={process.env.twitterUrl}>
          <Icon as={FaTwitter} boxSize={4} />
        </Link>
        <Link isExternal href={process.env.linkedinUrl}>
          <Icon as={FaLinkedin} boxSize={4} />
        </Link>
        <Link isExternal href={`mailto:${process.env.emailAddress}`}>
          <Icon as={FaEnvelope} boxSize={4} />
        </Link>
      </HStack>
    </VStack>
  );
}
