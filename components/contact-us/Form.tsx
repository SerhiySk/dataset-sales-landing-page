import { Form, FormLayout, SubmitButton, Field } from "@saas-ui/react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Heading,
  Box,
  chakra,
  SimpleGrid,
  FlexProps,
  Flex,
  Container,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Section, SectionProps, SectionTitle } from "components/section";
function DisableIfInvalid() {
  const [error, setError] = useState(null);

  const saveHandler = async values => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("User saved successfully!");
    } catch (error: any) {
      setError(error?.message);
    }
  };

  return (
    <Form onSubmit={saveHandler}>
      {({ Field }) => (
        <FormLayout>
          <Field
            name="email"
            label="Email"
            type="email"
            rules={{ required: true }}
          />
          <SubmitButton disableIfInvalid />
          {error && <div style={{ color: "red" }}>{error}</div>}
        </FormLayout>
      )}
    </Form>
  );
}

interface ContactUsProps extends Omit<FlexProps, "title" | "children"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const ContactUsForm: React.FC<ContactUsProps> = props => {
  const {
    title = "Contact Us",
    description = `Leave your email, and our team will reach out to discuss how our
            LinkedIn data solutions can meet your business needs. We're here to help you succeed.`,
    ...rest
  } = props;
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();

  const saveHandler = async values => {
    try {
      console.log({ values });
      if (isSubmitted) return;
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setIsSubmitted(true);
      toast({
        title: "We appreciate your interest!",
        description:
          "Our team will contact you shortly to discuss how our LinkedIn data solutions can benefit your business. Stay tuned for our email.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      // alert("User saved successfully!");
    } catch (error: any) {
      console.log({ error });
      if (error?.message === "Email already exists") {
        setIsSubmitted(true);
      } else setError(error?.message);
    }
  };
  return (
    <Flex pt="20" pb={{ base: "10", lg: "20" }} alignItems="center" {...rest}>
      <Container>
        <Heading>{title}</Heading>
        <Box>
          <Text mb="1rem" color={"muted"}>
            {description}
          </Text>
          <Form
            defaultValues={{
              email: "",
            }}
            onSubmit={saveHandler}
          >
            <Flex alignItems={"end"} gap={4}>
              <FormLayout flex={"1"}>
                <Field
                  name="email"
                  label="Email"
                  isDisabled={isSubmitted}
                  // type="email"
                  rules={{ required: true }}
                />
                {error && <div style={{ color: "red" }}>{error}</div>}
              </FormLayout>{" "}
              <SubmitButton disableIfInvalid py={"5"} />
            </Flex>
          </Form>
        </Box>
      </Container>
    </Flex>
  );
};
