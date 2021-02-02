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
        <Icon viewBox="0 0 48 48" boxSize={4}>
          <g>
            <rect x="16" y="6" fill="#E6E6E6" width="16" height="36"></rect>{" "}
            <path
              fill="#078754"
              d="M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z"
            ></path>
            <path
              fill="#078754"
              d="M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z"
            ></path>
          </g>
        </Icon>{" "}
        by{" "}
        <Link isExternal href="https://twitter.com/anubra266">
          Anuoluwapo Abraham
        </Link>
      </Text>
      <HStack spacing={4}>
        <Link isExternal href={process.env.githubUrl}>
          <FaGithub boxSize={4} />
        </Link>
        <Link isExternal href={process.env.twitterUrl}>
          <FaTwitter boxSize={4} />
        </Link>
        <Link isExternal href={process.env.linkedinUrl}>
          <FaLinkedin boxSize={4} />
        </Link>
        <Link isExternal href={`mailto:${process.env.emailAddress}`}>
          <FaEnvelope boxSize={4} />
        </Link>
      </HStack>
    </VStack>
  );
}
