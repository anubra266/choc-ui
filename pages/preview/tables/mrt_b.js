import {Button, Flex,  Icon,SimpleGrid, Stack, Text,useBreakpointValue, useColorModeValue} from '@chakra-ui/react'
import { AiFillEdit, AiTwotoneLock } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';


export default function Component() {
    const data = [
        {name: 'Daggy', created: '7 days ago'},
        {name: 'Anubra', created: '23 hours ago'},
        {name: 'Jhon Doe', created: 'A few seconds ago'}
    ];
    return (
        <Flex w="full" p={{ base: 5, md: 50 }} alignItems="center" justifyContent="center">
            <Stack
                direction={{ base: 'column' }}
                w="full"
                spacing={{ base: 6, md: 0 }}
                borderStyle="solid"
                borderWidth={data.length == 0 ? null : { base: null, md: '1px' }}
                borderColor={useColorModeValue('gray.200', 'rgba(255, 255, 255, 0.16)')}
                bg={{ sm: useColorModeValue('white', 'gray.800') }}>
                {
                    data.map((token, pid) => {
                        return (
                            <Flex
                                key={pid}
                                direction={{ base: 'row', sm: 'column' }}
                                bg={useColorModeValue('white', 'gray.800')}>
                                {useBreakpointValue({ base: true, sm: pid === 0 }) && (
                                    <SimpleGrid
                                        spacingY={3}
                                        borderStyle="solid"
                                        borderBottom="1px"
                                        borderRight={{ base: '1px', md: null }}
                                        borderLeft={{ base: '1px', md: null }}
                                        borderTop={{ base: '1px', md: null }}
                                        borderColor={useColorModeValue('gray.200', 'gray.700')}
                                        columns={{ base: 1, sm: 4 }}
                                        w={{ base: 100, sm: 'full' }}
                                        color={useColorModeValue('gray.500', 'gray.400')}
                                        bg={useColorModeValue('gray.50', 'inherit')}
                                        py={{ base: 1, sm: 4 }}
                                        px={{ base: 2, sm: 10 }}>
                                        <Text
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            fontSize="sm">
                                            Name
                                        </Text>
                                        <Text
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            fontSize="sm">
                                            Created
                                        </Text>
                                        <Text
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            fontSize="sm">
                                            Data
                                        </Text>
                                        <Text
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            fontSize="sm">
                                            Actions
                                        </Text>
                                    </SimpleGrid>
                                )}
                                <SimpleGrid
                                    spacingY={{ base: 3, md: 0 }}
                                    columns={{ base: 1, sm: 4 }}
                                    borderStyle="solid"
                                    borderBottom="1px"
                                    borderRight={{ base: '1px', md: null }}
                                    borderTop={{ base: '1px', md: null }}
                                    color={useColorModeValue(
                                        'gray.800',
                                        'rgba(255, 255, 255, 0.92)'
                                    )}
                                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                                    py={4}
                                    px={10}>
                                    <span>
                                        <Text>{token.name}</Text>
                                    </span>

                                    <span>
                                        <Text>
                                            {token.created}
                                        </Text>
                                    </span>
                                    <span>
                                        
                                        <Button
                                            size="md"
                                            variant="solid"
                                            leftIcon={<Icon as={AiTwotoneLock} />}
                                            colorScheme="purple">
                                            View Profile
                                        </Button>
                                            
                                    </span>
                                    <span>
                                        <Stack direction="row" spacing={3}>
                                                <Button
                                                    variant="solid"
                                                    colorScheme="blue"
                                                    size="sm">
                                                    <Icon as={BsBoxArrowUpRight} />
                                                </Button>
                                                <Button
                                                    variant="solid"
                                                    colorScheme="green"
                                                    size="sm">
                                                    <Icon as={AiFillEdit} />
                                                </Button>
                                                <Button
                                                    variant="solid"
                                                    colorScheme="red"
                                                    size="sm">
                                                    <Icon as={BsFillTrashFill} />
                                                </Button>
                                        </Stack>
                                    </span>
                                </SimpleGrid>
                            </Flex>
                        );
                })
            }
            </Stack>
        </Flex>
    );
};
