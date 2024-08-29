import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  HStack,
  Icon,
} from "@chakra-ui/react";
import siteConfig from "data/config";
import { FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Container maxW="container.md" pt={32} pb={20} minH={"80vh"}>
      <VStack spacing={16} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="lg" color="gray.600">
            {
              "We'd love to hear from you! Whether you have a question about our services, need support, or just want to connect, you can reach us through the following:"
            }
          </Text>
        </Box>

        {/* Serhiy's Contact Information */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Serhiy Skarbek
          </Heading>
          <VStack align="flex-start" spacing={4}>
            <HStack>
              <Text fontWeight="bold">Email:</Text>
              <Link href="mailto:skarbek_serhiy@zeldd.com" color="purple.500">
                skarbek_serhiy@zeldd.com
              </Link>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Phone:</Text>
              <Text>{"+380 (680) 542-226"}</Text>{" "}
              {/* Replace with actual phone number */}
            </HStack>
            <HStack>
              <Text fontWeight="bold">LinkedIn:</Text>
              <Link
                href="https://www.linkedin.com/in/b17243244"
                isExternal
                color="purple.500"
              >
                <HStack>
                  <Icon as={FaLinkedin} />
                  <Text>Serhiy Skarbek</Text>
                </HStack>
              </Link>
            </HStack>
          </VStack>
        </Box>

        {/* Abulala's Contact Information */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Abulala Patel
          </Heading>
          <VStack align="flex-start" spacing={4}>
            <HStack>
              <Text fontWeight="bold">Email:</Text>
              <Link href="mailto:abulala_patel@zeldd.com" color="purple.500">
                abulala_patel@zeldd.com
              </Link>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Phone:</Text>
              <Text>{"(415) 619-7633"}</Text>{" "}
              {/* Replace with actual phone number */}
            </HStack>
            <HStack>
              <Text fontWeight="bold">LinkedIn:</Text>
              <Link
                href="http://www.linkedin.com/in/abulala-patel"
                isExternal
                color="purple.500"
              >
                <HStack>
                  <Icon as={FaLinkedin} />
                  <Text>Abulala Patel</Text>
                </HStack>
              </Link>
            </HStack>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Schedule A Meeting
          </Heading>
          <VStack align="flex-start" spacing={4}>
            <HStack>
              <Text fontWeight="bold">Calendly:</Text>
              <Link href={siteConfig.calendlyLink} color="purple.500">
                {"Book Now"}
              </Link>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default ContactUs;
