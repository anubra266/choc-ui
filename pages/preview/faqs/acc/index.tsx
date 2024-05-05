import React from "react";
import {
  chakra,
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const Choc = () => {
  const FAQItem = ({ question, answer }) => {
    return (
      <AccordionItem borderColor="gray.200" _dark={{ borderColor: "gray.700" }}>
        {({ isExpanded }) => (
          <>
            <AccordionButton>
              <Box flex="1" textAlign="left" ml={0}>
                <Flex alignItems="center" minH={12}>
                  <Box ml={0}>
                    <chakra.dt
                      fontSize="lg"
                      fontWeight="medium"
                      lineHeight="6"
                      color="gray.900"
                      _dark={{ color: "white" }}
                    >
                      {question}
                    </chakra.dt>
                  </Box>
                </Flex>
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" _dark={{ color: "white" }} />
              ) : (
                <AddIcon fontSize="12px" _dark={{ color: "white" }} />
              )}
            </AccordionButton>
            <AccordionPanel pb={4}>
              <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.300" }}>
                {answer}
              </chakra.dd>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    );
  };
  const textColor = useColorModeValue("gray.900", "gray.100");
  return (
    <Flex
      bg="gray.200"
      _dark={{ bg: "gray.600" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        py={12}
        bg={"white"}
        _dark={{ bg: "gray.900" }}
        rounded="xl"
        shadow="base"
        w="100%"
      >
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign="center">
            <chakra.h2
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              _dark={{ color: "gray.100" }}
            >
              Frequently Asked Questions
            </chakra.h2>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color="gray.500"
              _dark={{ color: "gray.300" }}
            >
              Lorem ipsum dolor sit amet consect adipisicing elit.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Accordion allowMultiple>
              <FAQItem
                question="What are the security measures in place?"
                answer="Our platform uses SSL encryption and complies with PCI DSS standards to secure your data. We regularly update our security protocols and conduct thorough audits to ensure that your information is protected against unauthorized access and data breaches. Our commitment to security allows you to trust us with your sensitive information."
              />
              <FAQItem
                question="What payment methods are accepted?"
                answer="We accept all major credit cards, PayPal, and bank transfers. Our platform ensures secure processing of your payments and supports a variety of currencies to accommodate global customers. We strive to provide you with a seamless payment experience, whether you are purchasing a subscription or making a one-time payment."
              />
              <FAQItem
                question="Can I change my subscription plan at any time?"
                answer="Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. Our flexible subscription options allow you to choose the plan that best fits your needs, and you can adjust your subscription as your requirements change without any penalties or complicated procedures."
              />
              <FAQItem
                question="Do you offer technical support?"
                answer="Yes, we provide 24/7 technical support for all our customers. Our dedicated support team is available to help you with any technical issues you may encounter, guide you through complex processes, and provide solutions tailored to your needs."
              />
              <FAQItem
                question="How do I cancel my account?"
                answer="You can cancel your account through your account settings or by contacting customer support. Our customer support team is available to assist you with the cancellation process, provide necessary information on data retention, and ensure that your exit is as smooth as possible."
              />
            </Accordion>
            <Box mt={6} textAlign="center">
              <Text
                fontSize="lg"
                color="gray.600"
                _dark={{ color: "gray.400" }}
                mb={2}
              >
                Have more questions?
              </Text>
              <Link
                href="mailto:support@example.com"
                isExternal
                fontSize="lg"
                color="brand.600"
                _dark={{ color: "brand.400" }}
                fontWeight="medium"
                _hover={{
                  textDecoration: "none",
                }}
              >
                Write to us!
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Choc;
