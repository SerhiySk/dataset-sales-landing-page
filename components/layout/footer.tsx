import {
  Box,
  BoxProps,
  SimpleGrid,
  Container,
  Text,
  Stack,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

import { Link, LinkProps } from "@saas-ui/react";

import siteConfig from "data/config";

export interface FooterProps extends BoxProps {
  columns?: number;
}

export const Footer: React.FC<FooterProps> = props => {
  const { columns = 2, ...rest } = props;
  return (
    <Box bg="white" _dark={{ bg: "gray.900" }} {...rest}>
      <Container maxW="container.2xl" px="8" py="8">
        <SimpleGrid columns={{ base: 1, lg: columns }}>
          <Stack spacing="8">
            <Stack alignItems="flex-start">
              <Flex>
                <Box as={siteConfig.logo} flex="1" height="32px" />
              </Flex>
              {/* <Text fontSize="md" color="muted">
                {siteConfig.seo.description}
              </Text> */}
            </Stack>
            <Copyright>{siteConfig.footer.copyright}</Copyright>
          </Stack>
          <HStack alignItems={"end"} justifyContent={"end"}>
            <HStack spacing={5} alignItems={"center"}>
              <HStack>
                <Text fontSize="md" color={"muted"}>
                  Contact Us:
                </Text>

                <Link href={"mailto:" + siteConfig.companyEmail} fontSize="sm">
                  {siteConfig.companyEmail}
                </Link>
              </HStack>
              <Link
                href={siteConfig.companyLinkedin}
                isExternal
                color={"blue.600"}
                _hover={{ color: "blue.800" }}
              >
                <FaLinkedin size={30} />
              </Link>
              <Link
                href={siteConfig.companyFacebook}
                isExternal
                color={"blue.600"}
                _hover={{ color: "blue.800" }}
              >
                <FaFacebookSquare size={30} />
              </Link>
            </HStack>
          </HStack>
          {/* <HStack justify="flex-end" spacing="4" alignSelf="flex-end">
            {siteConfig.footer?.links?.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </HStack> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export interface CopyrightProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content;
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`;
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  );
};

export const FooterLink: React.FC<LinkProps> = props => {
  const { children, ...rest } = props;
  return (
    <Link
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: "white",
        transition: "color .2s ease-in",
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};
