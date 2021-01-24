import React from "react";
import { Text, Box, Link, useColorModeValue } from "@chakra-ui/react";


export const linkStyle = {
  textDecoration: "underline",
};

export const PageHeader = (props) => {
  return <Text fontSize="2xl" mb={2} fontWeight="700" {...props} />;
};

export const Section = (props) => {
  return (
    <Box
      mt={8}
      border="solid transparent"
      boxShadow="md"
      borderRadius="lg"
      {...props}
    />
  );
};
Section.Header = (props) => {
  return (
    <Box
      fontSize="xl"
      fontWeight="700"
      w="full"
      bg={useColorModeValue("gray.200", "gray.700")}
      borderTopRadius="lg" px={5} py={3}
      {...props}
    />
  );
};
Section.Content = (props) => {
  return <Box fontSize="md" mt="3" {...props} />;
};
Section.p = (props) => <Box pt={2} {...props} />;
Section.a = (props) => <Link {...props} />;
