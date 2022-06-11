import React from "react";
import { Text, Box, Link } from "@chakra-ui/react";

export const linkStyle = {
  textDecoration: "underline",
};

export const PageHeader = (props) => {
  return (
    <Text
      fontSize="2xl"
      mb={2}
      textTransform="capitalize"
      fontWeight="700"
      {...props}
    />
  );
};

export const Section = (props) => {
  return <Box mt={8} rounded="lg" {...props} />;
};
Section.Header = (props) => {
  return (
    <Box
      fontSize="xl"
      fontWeight="semibold"
      w="full"
      textTransform="capitalize"
      roundedTop="lg"
      px={5}
      py={3}
      {...props}
    />
  );
};
Section.Content = (props) => {
  return <Box fontSize="md" {...props} />;
};
Section.p = (props) => <Box pt={2} {...props} />;
Section.a = (props) => <Link {...props} />;
