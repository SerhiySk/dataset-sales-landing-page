import { Button } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Zeldd",
    description: "The React component library for startups",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  companyLinkedin: "https://www.linkedin.com/company/zeldd",
  companyEmail: "sales@zeldd.com",
  companyFacebook: "https://www.facebook.com/people/Zelddcom/61562753287956/",
  header: {
    links: [
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },
      {
        label: "About Us",
        href: "/about-us",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
      },
      // {
      //   label: "Contact Us",
      //   href: "/contact_us",
      // },
    ],
  },
  footer: {
    copyright: (
      <>
        © 2024 Zeldd. All rights reserved. Unauthorized duplication or
        distribution of our data and content is strictly prohibited.
      </>
    ),
    links: [
      {
        href: "mailto:hello@saas-ui.dev",
        label: "Contact",
      },
      {
        href: "https://twitter.com/saas_js",
        label: <FaTwitter size="14" />,
      },
      {
        href: "https://github.com/saas-js/saas-ui",
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: "Get in Touch with Us",
    features: [
      {
        icon: FiCheck,
        title: "Comprehensive Data",
        description:
          "Access detailed LinkedIn profiles, companies, and job descriptions.",
      },
      {
        icon: FiCheck,
        title: "Custom Solutions",
        description:
          "Tailor the data to your specific needs with our custom packages.",
      },
      {
        icon: FiCheck,
        title: "Expert Support",
        description:
          "Receive personalized assistance to maximize your data use.",
      },
      {
        icon: FiCheck,
        title: "On-Demand Sourcing",
        description: "Request specific data and we'll source it for you.",
      },
    ],
  },
};

export default siteConfig;
