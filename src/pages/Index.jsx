import { Container, Text, VStack, Box, Heading, Image, Flex, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="header" bg="gray.800" color="white" py={4} mb={6}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">Financial Times</Heading>
          <Flex>
            <Link href="#" mx={2}><FaTwitter /></Link>
            <Link href="#" mx={2}><FaFacebook /></Link>
            <Link href="#" mx={2}><FaLinkedin /></Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Image src="/images/financial-news.jpg" alt="Financial News" borderRadius="md" />
          <Heading as="h2" size="md" mt={4}>Breaking News: Market Hits Record Highs</Heading>
          <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">Latest Articles</Heading>
          <VStack spacing={4} mt={4} align="stretch">
            <Box>
              <Heading as="h3" size="sm">Article 1</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">Article 2</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">Article 3</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
      <Box as="footer" bg="gray.800" color="white" py={4} mt={6}>
        <Text textAlign="center">&copy; 2023 Financial Times. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;