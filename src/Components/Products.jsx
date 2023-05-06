import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";

export default function Products({ item }) {
  return (
    <Box bg="purple.300" h="auto" borderRadius="20px" p="15px 10px" border="2px solid #fff">
      <Heading
        as="h1"
        fontSize="24px"
        textAlign="left"
        pl="10px"
        mt="10px"
        fontWeight="600"
        fontFamily="monospace"
        noOfLines="1"
        mb="10px"
      >
        {item.company}
      </Heading>
      <Text
        fontSize="14px"
        textAlign="left"
        pl="10px"
        fontWeight="600"
        noOfLines="1"
        mb="15px"
      >
        <Link href={item.url} target="_blank">
          Company Site
        </Link>
      </Text>
      <Box maxW="100%" h="300px" bg="blue.200" borderRadius="20px">
        <Image src={item.imageUrl} alt={item.headline} borderRadius="20px" />
      </Box>
      <Box pb="10px">
        <Heading
          as="h1"
          fontSize="22px"
          textAlign="left"
          pl="10px"
          mt="10px"
          fontWeight="600"
          fontFamily="sans-serif"
          noOfLines="1"
        >
          {item.headline}
        </Heading>
        <Text
          fontSize="14px"
          textAlign="left"
          pl="10px"
          fontWeight="400"
          noOfLines="2"
        >
          {item.primaryText}
        </Text>
        <Text
          fontSize="14px"
          textAlign="left"
          pl="10px"
          fontWeight="400"
          noOfLines="2"
        >
          {item.description}
        </Text>
      </Box>
    </Box>
  );
}
