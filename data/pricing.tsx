import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Pricing for every stage",
  description:
    "Pay once and get life-time access to our high quality components.",
  plans: [
    {
      id: "companies",
      title: "Companies",
      description: "7.5m company profiles",
      samplesHref: "/companies#examples",
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            $1000
          </Text>
          <Text>$500</Text>
        </HStack>
      ),
      features: [
        {
          title:
            "Comprehensive Database: Access detailed information on 7.5 million companies.",
        },
        {
          title:
            "Industry Insights: Obtain valuable data across various industries.",
        },
        {
          title:
            "Market Analysis: Utilize extensive company profiles for in-depth market research.",
        },
        {
          title:
            "Business Intelligence: Enhance your strategies with robust company data.",
        },
      ],
      action: {
        href: "#",
        label: "Buy now",
      },
    },
    {
      id: "profiles",
      title: "Profiles",
      description: "12m linkedin profiles",
      samplesHref: "/profiles#examples",

      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            $3999
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
      id: "jd",
      title: "Tailored Job Data Solutions",
      description:
        "Request tailored job descriptions with historical examples.",
      price: "Custom",
      samplesHref: "/jobs#examples",
      features: [
        {
          title:
            "Old Data Examples: View samples of historical job descriptions.",
        },
        {
          title:
            "Custom Requests: Specify the job descriptions you need, and we'll source them for you.",
        },
        {
          title:
            "Flexible Data: Receive job data tailored to your specific requirements.",
        },
        {
          title:
            "Exclusive Access: Get access to job descriptions not available in standard databases.",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license",
        label: "Contact Us",
      },
    },
  ],
};
