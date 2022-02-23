import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Felipe Defacio</Text>
                <Text color="gray.200" fontSize="small">phelipe2208@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Felipe Defacio" src="https://github.com/defa-dev.png" />

        </Flex>
    )
}