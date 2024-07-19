import { Box, Heading, Text } from "@chakra-ui/react";
import { Br } from "@saas-ui/react";
import { DataExamples } from "components/data-examples";
import { Pricing } from "components/pricing/pricing";
import ProfilesList from "components/profiles/ProfilesList";
import pricing from "data/profiles-pricing";
import { profiles, profilesByCountryStats } from "data/profiles";
import { FiBox } from "react-icons/fi";
import StatisticsChart from "components/charts/chart-country";
import { SEO } from "components/seo/seo";

const page = () => {
  return (
    <Box>
      <SEO
        title="Buy LinkedIn Profiles - Affordable Packages, Data Examples, and Statistics | Zeld"
        description="Explore our affordable packages for purchasing LinkedIn profiles. Zeld offers 12 million detailed profiles with data examples and comprehensive statistics to enhance your recruitment, marketing, and research efforts. See our offerings and get started today!"
      />
      <Box>
        <PricingSection />
        <DataExamplesSection />

        <Stats />
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
      title="Explore Our LinkedIn Profile Data Samples"
      jsonData={profiles}
      description="Get a glimpse of the rich LinkedIn profile data we offer. Dive into detailed examples to see how our insights can benefit your business and inform your strategies."
    >
      <ProfilesList
        // @ts-expect-error
        data={profiles}
        handleClick={(id: string) => {}}
      />
    </DataExamples>
  );
};

const Stats = () => {
  return (
    <Box p={20}>
      <StatisticsChart
        title={"Profile Data Statistics by Country"}
        data={profilesByCountryStats}
      />
    </Box>
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
