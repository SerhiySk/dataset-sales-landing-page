import { Box, Heading, Text } from "@chakra-ui/react";
import { Br } from "@saas-ui/react";
import { DataExamples } from "components/data-examples";
import { Pricing } from "components/pricing/pricing";
import JobsList from "components/jobs/JobsList";
import pricing from "data/jobs-pricing";
import { jobs } from "data/jobs";
import { FiBox } from "react-icons/fi";
import { SEO } from "components/seo/seo";
import AboutUs from "components/about-us/AboutUs";
import ContactUs from "components/contact-us/ContactUs";
const page = () => {
  return (
    <Box>
      <SEO
        title="Buy LinkedIn Job Descriptions - Affordable Packages and Data Examples | Zeldd"
        description="Explore our affordable packages for purchasing LinkedIn job descriptions. Zeldd offers tailored job description data with examples to enhance your recruitment strategies and market insights. Check out our offerings and elevate your hiring process today!"
      />
      <Box>
        <ContactUsSection />
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
const ContactUsSection = () => {
  return <ContactUs />;
};
