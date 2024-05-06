import React from "react";
import {
  chakra,
  Box,
  Flex,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";

const Choc = () => {
  const FAQItem = ({ question, answer, icon }) => {
    return (
      <AccordionItem borderColor="gray.200" _dark={{ borderColor: "gray.700" }}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Flex alignItems="center" minH={12}>
              <Flex
                shrink={0}
                alignItems="center"
                justifyContent="center"
                h={{ base: 8, md: 12 }}
                w={{ base: 8, md: 12 }}
                rounded="md"
                bg="brand.500"
                color="white"
              >
                <Icon
                  boxSize={{ base: 4, md: 6 }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {icon}
                </Icon>
              </Flex>
              <Box ml={{ base: 2, md: 4 }}>
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
          <AccordionIcon _dark={{ color: "white" }} />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.300" }}>
            {answer}
          </chakra.dd>
        </AccordionPanel>
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
            <Accordion allowToggle defaultIndex={[0]}>
              <FAQItem
                question="What are the security measures in place?"
                answer="Our platform uses SSL encryption and complies with PCI DSS standards to secure your data. We regularly update our security protocols and conduct thorough audits to ensure that your information is protected against unauthorized access and data breaches. Our commitment to security allows you to trust us with your sensitive information."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              />
              <FAQItem
                question="What payment methods are accepted?"
                answer="We accept all major credit cards, PayPal, and bank transfers. Our platform ensures secure processing of your payments and supports a variety of currencies to accommodate global customers. We strive to provide you with a seamless payment experience, whether you are purchasing a subscription or making a one-time payment."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              />
              <FAQItem
                question="Can I change my subscription plan at any time?"
                answer="Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. Our flexible subscription options allow you to choose the plan that best fits your needs, and you can adjust your subscription as your requirements change without any penalties or complicated procedures."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              />
              <FAQItem
                question="Do you offer technical support?"
                answer="Yes, we provide 24/7 technical support for all our customers. Our dedicated support team is available to help you with any technical issues you may encounter, guide you through complex processes, and provide solutions tailored to your needs."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              />
              <FAQItem
                question="How do I cancel my account?"
                answer="You can cancel your account through your account settings or by contacting customer support. Our customer support team is available to assist you with the cancellation process, provide necessary information on data retention, and ensure that your exit is as smooth as possible."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                }
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
