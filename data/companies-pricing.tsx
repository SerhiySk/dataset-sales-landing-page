import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Flexible Pricing Options for Company Data",
  description:
    "Choose from our range of packages to access high-quality company data tailored to your needs.",
  plans: [
    {
      id: "500k-companies",
      title: "Basic",
      description: "600,000 companies",
      price: "$200",

      features: [
        {
          title: "Essential Data: 500,000 curated company profiles.",
        },
        {
          title: "Industry Coverage: Information across various industries.",
        },
        {
          title: "Key Insights: Includes all company details.",
        },
        {
          title: "Affordable Entry: Cost-effective solution.",
        },
      ],
      action: {
        href: "#",
        label: "Buy now",
      },
    },
    {
      id: "all-companies",
      title: "All",
      description: "7.5m Companies",
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            $1000,
          </Text>
          <Text>$500</Text>
        </HStack>
      ),
      isRecommended: true,
      features: [
        {
          title: "Complete Database: 7.5 million company profiles.",
        },
        {
          title: "Comprehensive Insights: Detailed data for market analysis.",
        },
        {
          title: "Unrestricted Use: Ideal for large projects.",
        },
        {
          title: "High-Quality Data: Up-to-date and reliable.",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license",
        label: "Buy now",
      },
    },
    {
      id: "custom-companies",
      title: "Custom",
      description: "Let us know what data you need and we will get it for you.",
      price: "Custom",
      features: [
        {
          title: "Personalized Selection: Choose by location, industry, etc.",
        },
        {
          title: "On-Demand Sourcing: We can find companies you need.",
        },
        {
          title: "Flexible Options: Select the exact number of profiles.",
        },
        {
          title: "Dedicated Support: Personalized assistance included.",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license",
        label: "Contact Us",
      },
    },
  ],
};
