import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Flexible Pricing Options for Job Data",
  description:
    "Choose from our range of packages to access high-quality, up-to-date job descriptions tailored to your needs.",
  plans: [
    {
      id: "100k-jobs",
      title: "Basic",
      description: "100,000 Job Descriptions",
      price: "$200",

      features: [
        {
          title: "Tailored Data: 100,000 job descriptions.",
        },
        {
          title: "Up-to-Date: Latest job data.",
        },
        {
          title: "Key Insights: Roles, requirements, trends.",
        },
        {
          title: "Affordable: Budget-friendly option.",
        },
      ],
      action: {
        href: "#",
        label: "Buy now",
      },
    },
    {
      id: "1m-jobs",
      title: "All",
      description: "1 Million Job Descriptions",
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            $2000
          </Text>
          <Text>$1000</Text>
        </HStack>
      ),
      isRecommended: true,
      features: [
        {
          title: "Extensive Data: 1 million job descriptions.",
        },
        {
          title: "In-Depth: Detailed market insights.",
        },
        {
          title: "Customizable: Data based on your needs.",
        },
        {
          title: "High-Quality: Reliable and current information.",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license",
        label: "Buy now",
      },
    },
    {
      id: "custom-jobs",
      title: "Custom",
      description: "Tailored Job Data Solutions",
      price: "Custom",
      features: [
        {
          title: "Personalized: Choose the number of job descriptions.",
        },
        {
          title: "Flexible: Select by location, industry, etc.",
        },
        {
          title: "On-Demand: We can scrape specific data for you.",
        },
        {
          title: "Exclusive: Unique data not in standard packages.",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license",
        label: "Contact Us",
      },
    },
  ],
};
