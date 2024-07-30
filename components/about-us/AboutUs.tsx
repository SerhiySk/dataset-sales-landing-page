import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Container maxW="container.xl" py={20} minH={"80vh"}>
      <VStack spacing={16} align="stretch">
        {/* Introduction Section */}
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Welcome to Zeldd! We specialize in providing comprehensive data
            solutions by scraping LinkedIn profiles, companies, and job
            descriptions. Our mission is to help businesses and professionals
            access the information they need to succeed.
          </Text>
        </Box>

        {/* Team Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Meet Our Team
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={10}>
            {/* Serhiy Skarbek */}
            <Box textAlign="center">
              <Image
                borderRadius="full"
                boxSize="150px"
                objectFit="cover"
                src="serhiy.png"
                alt="Serhiy Skarbek"
                mx="auto"
                mb={4}
              />
              <Heading as="h3" size="lg">
                Serhiy Skarbek
              </Heading>
              <Text fontSize="md" color="gray.600">
                Founder & Technical Lead
              </Text>
              <Text mt={2}>
                {
                  "Serhiy is a software engineer. As the Technical Lead, he handles all technical aspects of Zeldd, from data scraping to system architecture."
                }
              </Text>
            </Box>

            {/* Abulala Patel */}
            <Box textAlign="center">
              <Image
                borderRadius="full"
                boxSize="150px"
                objectFit="cover"
                src="abulala.jpeg"
                alt="Abulala Patel"
                mx="auto"
                mb={4}
              />
              <Heading as="h3" size="lg">
                Abulala Patel
              </Heading>
              <Text fontSize="md" color="gray.600">
                Co-Founder & Sales Specialist
              </Text>
              <Text mt={2}>
                Abulala brings a wealth of experience in sales and business
                development. He focuses on building relationships with clients
                and driving sales strategies to grow the business.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Mission Statement */}
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Our Mission
          </Heading>
          <Text fontSize="lg" color="gray.600">
            At Zeldd, our mission is to empower businesses and individuals with
            accurate and up-to-date data. We strive to provide valuable insights
            and support our clients in making informed decisions. Our team is
            dedicated to maintaining the highest standards of data quality and
            integrity.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default AboutUs;
