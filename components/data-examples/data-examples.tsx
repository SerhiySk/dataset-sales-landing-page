import {
  Container,
  Flex,
  FlexProps,
  Text,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import { Section, SectionProps, SectionTitle } from "components/section";
import dynamic from "next/dynamic";
// import ReactJson from "react-json-view";

interface DataExamplesProps extends Omit<FlexProps, "title"> {
  title: string | React.ReactNode;
  jsonData: any;
  description?: string | React.ReactNode;
}
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

export const DataExamples = ({
  title,
  description,
  jsonData,
  children,
  ...rest
}: DataExamplesProps) => {
  return (
    <Section
      innerWidth="container.2xl"
      id="examples"
      // position="relative"
      // overflow="hidden"
      {...rest}
    >
      <Flex py="2" alignItems="start">
        <SectionTitle title={title} description={description}></SectionTitle>

        {/* <Container mx={1}>
          <VStack spacing={[4, null, 8]} alignItems="flex-start">
            <Text as="h2" textStyle="h2" textAlign="left">
              {title}
            </Text>
            <Text
              as="div"
              textStyle="subtitle"
              align="left"
              color="gray.500"
              _dark={{ color: "gray.400" }}
            >
              {description}
            </Text>
          </VStack>
        </Container> */}
      </Flex>
      <Flex py="20" alignItems="center">
        <Container w="100%" maxW={"5xl"}>
          <Tabs
            variant="enclosed"
            border="1px"
            p={2}
            borderRadius={10}
            borderColor="gray.200"
          >
            <TabList>
              <Tab>Visual</Tab>
              <Tab>JSON</Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={undefined} position="relative">
                {children}
              </TabPanel>
              <TabPanel>
                {/* <VStack spacing={[4, null, 8]} alignItems="flex-start">
                  <div> */}
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flex="1"
                  gap="1.5rem"
                  w="full"
                  minH="calc(100vh - 6rem)"
                  maxH="100%"
                  pt={2}
                  pl={1}
                  position="relative"
                >
                  <Box position="absolute" w="full" h="full">
                    <Flex
                      overflow="scroll"
                      w="full"
                      flexGrow={1}
                      gap={6}
                      maxH="full"
                      flexDirection="column"
                    >
                      {/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */}
                      <DynamicReactJson
                        src={jsonData}
                        displayDataTypes={false}
                      />
                    </Flex>
                  </Box>
                </Box>
                {/* </div>
                </VStack> */}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Flex>
    </Section>
  );
};
