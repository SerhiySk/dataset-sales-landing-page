import { Box, Heading, Text } from "@chakra-ui/react";
import { Br } from "@saas-ui/react";
import { DataExamples } from "components/data-examples";
import { Pricing } from "components/pricing/pricing";
import JobsList from "components/jobs/JobsList";
import pricing from "data/jobs-pricing";
import { jobs } from "data/jobs";
import { FiBox } from "react-icons/fi";

const page = () => {
  return (
    <Box>
      <Box>
        <PricingSection />
        <DataExamplesSection />
      </Box>
    </Box>
  );
};
export default page;
const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        {/* VAT may be applicable depending on your location. */}
      </Text>
    </Pricing>
  );
};
const DataExamplesSection = () => {
  return (
    <DataExamples
      title="Explore Our Job Data Samples"
      jsonData={jobs}
      description="Discover our job description dataset  examples available in both visual and JSON formats. See the detailed information we provide to help you understand market trends and job requirements."
    >
      <JobsList
        // @ts-expect-error
        data={jobs}
        handleClick={(id: string) => {}}
      />
    </DataExamples>
  );
};

// const FeaturesSection = () => {
//   return (
//     <DataExamples
//       id="examples"
//       title={
//         <Heading
//           lineHeight="short"
//           fontSize={["2xl", null, "4xl"]}
//           textAlign="left"
//           as="p"
//         >
//           Not your standard
//           <Br /> dashboard template.
//         </Heading>
//       }
//       jsonData={profiles}
//       description={
//         <>
//           Saas UI Pro includes everything you need to build modern frontends.
//           <Br />
//           Use it as a template for your next product or foundation for your
//           design system.
//         </>
//       }
//       align="left"

//     />
//   );
// };
