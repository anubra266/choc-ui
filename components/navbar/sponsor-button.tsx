import { chakra, Icon } from "@chakra-ui/react";
import type { HTMLChakraProps } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { CONSTANTS } from "components/utils/constants";

const SponsorButton = (props: HTMLChakraProps<"div">) => (
  <chakra.div
    display={{ base: "none", md: "flex" }}
    alignItems="center"
    as="a"
    aria-label="Sponsor Choc UI on Open Collective"
    href={CONSTANTS.SPONSOR_LINK}
    target="_blank"
    rel="noopener noreferrer"
    bg="gray.50"
    borderWidth="1px"
    borderColor="gray.200"
    px="1em"
    minH="36px"
    rounded="md"
    fontSize="sm"
    color="gray.900"
    outline="0"
    transition="all 0.3s"
    _hover={{
      bg: "gray.100",
      borderColor: "gray.300",
    }}
    _active={{
      borderColor: "gray.200",
    }}
    _focus={{
      boxShadow: "outline",
    }}
    {...props}
  >
    <Icon as={FaHeart} w="4" h="4" color="red.500" mr="2" />
    <chakra.div as="strong" lineHeight="inherit" fontWeight="semibold">
      Sponsor
    </chakra.div>
  </chakra.div>
);

export default SponsorButton;
