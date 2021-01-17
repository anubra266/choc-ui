import React from "react";
import { Text, Box, Link } from "@chakra-ui/react";

export const linkStyle = {
    textDecoration: "underline",
};

export const PageHeader = (props) => {
    return <Text fontSize="4xl" mb={2} fontWeight="700" {...props} />;
};

export const Section = (props) => {
    return <Box mt={8} {...props} />;
};
Section.Header = (props) => {
    return <Text fontSize="2xl" fontWeight="700" {...props} />;
};
Section.Content = (props) => {
    return <Box fontSize="md" mt="3" {...props} />;
};
Section.p = (props) => <Box pt={2} {...props} />;
Section.a = (props) => <Link {...linkStyle} {...props} />;
