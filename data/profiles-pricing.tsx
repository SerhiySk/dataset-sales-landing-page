import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Linkedin Profiles Pricing Plans",
  description: "LinkedinDB can be segmented by country or by person data.",
  plans: [
    {
      id: "600k-profiles",
      title: "Basic",
      description: "600,000 profiles",
      price: "$200",
      features: [
        {
          title: "Essential Data: 600,000 LinkedIn profiles.",
        },
        {
          title: "Key Insights: Job titles, industries, locations.",
        },
        {
          title: "Easy Integration: Quick setup and use.",
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
      id: "all-profiles",
      title: "All",
      description: "12m linkedin profiles",
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            $3999,
          </Text>
          <Text>$2000</Text>
        </HStack>
      ),
      isRecommended: true,
      features: [
        {
          title: "Full Access: Entire LinkedIn Profiles collection.",
        },
        {
          title: "Detailed Insights: Comprehensive professional data.",
        },
        {
          title: "Complete Collection: Receive the entire dataset in one file.",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license",
        label: "Buy now",
      },
    },
    {
      id: "custom-profiles",
      title: "Custom",
      description: "Let us know what data you need and we will get it for you.",
      price: "Custom",
      features: [
        {
          title:
            "Personalized Data: Choose profiles by location, industry, etc.",
        },
        {
          title: "On-Demand Sourcing: We can get the profiles you need.",
        },
        {
          title: "Flexible Quantity: Select the exact number of profiles.",
        },
        {
          title: "Exclusive Data: Custom, tailored insights.",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license",
        label: "Contact Us",
      },
    },
  ],
};
