import * as React from "react";

const faq = {
  title: "Frequently asked questions",
  // description: '',
  items: [
    {
      q: "What kind of data do you provide?",
      a: (
        <>
          We provide public web data on millions of professionals, companies and
          jobs from all over the world. <br />
          Contact us for a free consultation to learn more.
        </>
      ),
    },
    {
      q: "How fresh is the data?",
      a: `Profiles were scraped at the beginning of June. Companies were scraped at April.

We can check the freshness of a specific dataset based on the criteria that you specify.`,
    },
    {
      q: "How do you deliver the data?",
      a: "We offer delivery in a ready-to-use CSV or JSON file.",
    },
    {
      q: "I want to get a specific data, e.g. by location, but you don't have it. Can you get it for me?",
      a: "Yes. If you need a specific dataset that we don't have, contact us to discuss the terms.",
    },
  ],
};

export default faq;
