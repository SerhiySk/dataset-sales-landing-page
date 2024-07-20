import { Box, Heading, Text } from "@chakra-ui/react";
import { Br } from "@saas-ui/react";
import { DataExamples } from "components/data-examples";
import { Pricing } from "components/pricing/pricing";
import CompaniesList from "components/companies/CompaniesList";
import pricing from "data/companies-pricing";
import { companies, companiesByCountryStats } from "data/companies";
import { FiBox } from "react-icons/fi";
import StatisticsChart from "components/charts/chart-country";
import { SEO } from "components/seo/seo";

const page = () => {
  return (
    <Box>
      <SEO
        title="Buy LinkedIn Company Profiles - Affordable Packages, Data Examples, and Statistics | Zeldd"
        description="Discover our affordable packages for purchasing LinkedIn company profiles. Zeldd provides 7.5 million detailed company profiles with data examples and comprehensive statistics to boost your market research, sales, and strategic planning. Explore our offerings today!"
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
      title="Explore Our Company Data Samples"
      jsonData={companies}
      description="Dive into our comprehensive company dataset with examples available in both visual and JSON formats. See the type of detailed information we provide to help you make informed business decisions."
    >
      <CompaniesList
        // @ts-expect-error
        data={companies}
        handleClick={(id: string) => {}}
      />
    </DataExamples>
  );
};
const Stats = () => {
  return (
    <Box p={20}>
      <StatisticsChart
        title={"Companies Data Statistics by Country"}
        data={companiesByCountryStats}
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
