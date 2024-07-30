import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { ZeldLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";
import { Divider } from "@chakra-ui/react";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import SignUpModal from "components/sign-up-modal/sign-up";

import { useDisclosure } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Zeldd | Affordable LinkedIn Data for Recruitment, Marketing, and Research"
        description="Discover comprehensive LinkedIn data at a fraction of the cost. Zeldd offers 12 million profiles and 7.5 million company profiles tailored for recruitment, marketing, and research. Enhance your strategies with our affordable and detailed datasets. Visit us now!"
      />
      <Box>
        <HeroSection />

        {/* <HighlightsSection /> */}

        <FeaturesSection />

        {/* <TestimonialsSection /> */}

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box position="relative" overflow="hidden">
        <BackgroundGradient height="100%" />
        <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="5">
          <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
            <Hero
              id="home"
              justifyContent="flex-start"
              px="0"
              title={
                <FallInPlace>
                  Leverage LinkedIn
                  <Br /> Insights for Growth
                </FallInPlace>
              }
              description={
                <FallInPlace delay={0.4} fontWeight="medium">
                  Gain access to <Em>valuable LinkedIn data</Em> to power your
                  business decisions and drive growth with unparalleled
                  insights.
                  {/* Saas UI is a <Em>React component library</Em>
                <Br /> that doesn&apos;t get in your way and helps you <Br />{" "}
                build intuitive SaaS products with speed. */}
                </FallInPlace>
              }
            >
              <FallInPlace delay={0.8}>
                <HStack pt="4" pb="12" spacing="8">
                  <ZeldLogo height="28px" />
                </HStack>

                <ButtonGroup spacing={4} alignItems="center">
                  <Button
                    colorScheme="primary"
                    size="lg"
                    onClick={() => onOpen()}
                  >
                    Contact Us
                  </Button>
                  <ButtonLink
                    size="lg"
                    href="profiles#examples"
                    variant="outline"
                    rightIcon={
                      <Icon
                        as={FiArrowRight}
                        sx={{
                          transitionProperty: "common",
                          transitionDuration: "normal",
                          ".chakra-button:hover &": {
                            transform: "translate(5px)",
                          },
                        }}
                      />
                    }
                  >
                    View examples
                  </ButtonLink>
                </ButtonGroup>
              </FallInPlace>
            </Hero>
            <Box
              height="600px"
              position="absolute"
              display={{ base: "none", lg: "block" }}
              left={{ lg: "60%", xl: "55%" }}
              width="80vw"
              maxW="1100px"
              margin="0 auto"
            >
              <FallInPlace delay={1}>
                <Box overflow="hidden" height="100%">
                  <Image
                    src="datasets_new.svg"
                    layout="fixed"
                    width={700}
                    height={762}
                    alt="dataset"
                    quality="75"
                    priority
                  />
                </Box>
              </FallInPlace>
            </Box>
          </Stack>
          <Divider />
        </Container>
        {/* <Features
          id="benefits"
          columns={[1, 2, 4]}
          iconSize={4}
          innerWidth="container.xl"
          pt="20"
          features={[
            {
              title: "Accessible",
              icon: FiSmile,
              description: "All components strictly follow WAI-ARIA standards.",
              iconPosition: "left",
              delay: 0.6,
            },
            {
              title: "Themable",
              icon: FiSliders,
              description:
                "Fully customize all components to your brand with theme support and style props.",
              iconPosition: "left",
              delay: 0.8,
            },
            {
              title: "Composable",
              icon: FiGrid,
              description:
                "Compose components to fit your needs and mix them together to create new ones.",
              iconPosition: "left",
              delay: 1,
            },
            {
              title: "Productive",
              icon: FiThumbsUp,
              description:
                "Designed to reduce boilerplate and fully typed, build your product at speed.",
              iconPosition: "left",
              delay: 1.1,
            },
          ]}
          reveal={FallInPlace}
        /> */}
      </Box>
      <SignUpModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            "authentication",
            "navigation",
            "crud",
            "settings",
            "multi-tenancy",
            "layouts",
            "billing",
            "a11y testing",
            "server-side rendering",
            "documentation",
            "onboarding",
            "storybooks",
            "theming",
            "upselling",
            "unit testing",
            "feature flags",
            "responsiveness",
          ].map(value => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      pt={{ base: 5, lg: 10 }}
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Unlock the Power of Premium Data
        </Heading>
      }
      description={
        <>
          Zeldd offers comprehensive and customizable LinkedIn datasets,
          including profiles, companies, and job descriptions.
          <Br />
          Our high-quality, affordable data solutions are tailored to your
          needs, helping you gain valuable business insights and drive growth.
          {/* Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system. */}
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Extensive LinkedIn Data.",
          icon: FiBox,
          description:
            "Access millions of LinkedIn profiles, companies, and job descriptions to fuel your business insights and strategies.",
          variant: "inline",
        },
        {
          title: "Custom Data Solutions.",
          icon: FiLock,
          description:
            "Request specific data tailored to your needs. If we don't have it, we'll get it for you from LinkedIn or other sources.",
          variant: "inline",
        },
        {
          title: "High-Quality Data.",
          icon: FiSearch,
          description:
            "Our datasets are meticulously curated and regularly updated to ensure you receive the most accurate and relevant information.",
          variant: "inline",
        },
        {
          title: "Affordable Pricing.",
          icon: FiUserPlus,
          description:
            "We offer competitive pricing options to fit your budget, providing high-quality data at low costs.",
          variant: "inline",
        },
        {
          title: "Comprehensive Company Data.",
          icon: FiFlag,
          description:
            "Gain access to detailed information on 7.5 million companies, spanning various industries and regions.",
          variant: "inline",
        },
        {
          title: "Tailored Job Descriptions.",
          icon: FiTrendingUp,
          description:
            "Request and receive job descriptions tailored to your specific needs, with access to historical examples for reference.",
          variant: "inline",
        },
        {
          title: "Data on Demand.",
          icon: FiToggleLeft,
          description:
            "Let us know what data you need, and we'll source it for you quickly and efficiently from LinkedIn and other websites.",
          variant: "inline",
        },
        {
          title: "User Support.",
          icon: FiTerminal,
          description:
            "Receive personalized support to help you maximize the value of our datasets and tailor them to your specific use cases.",
          variant: "inline",
        },
        {
          title: "Versatile Applications.",
          icon: FiCode,
          description:
            "Utilize our data across various applications, from market research and recruitment to business intelligence and more.",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      {""}
      {/* <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text> */}
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "High quality. Low pricing.",
        href: "#pricing",
      },
    },
  };
}
