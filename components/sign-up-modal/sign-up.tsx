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
} from "@chakra-ui/react";
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

{
  /* <Field
  name="terms"
  type="checkbox"
  label="I accept the terms & conditions."
  rules={{ required: true }}
/> */
}
export default function SignUpModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const saveHandler = async values => {
    try {
      console.log({ values });
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
      // alert("User saved successfully!");
    } catch (error: any) {
      console.log({ error });
      if (error?.message === "Email already exists") {
        setIsSubmitted(true);
      } else setError(error?.message);
    }
  };
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />

      <ModalContent>
        <ModalCloseButton />
        {isSubmitted ? (
          <>
            <ModalHeader>Thank You for Reaching Out!</ModalHeader>
            <ModalBody>
              <Text mb="1rem">
                {`We appreciate your interest! Our team will contact you shortly to discuss how our LinkedIn data solutions can benefit your business. Stay tuned for our email.`}
              </Text>
            </ModalBody>
          </>
        ) : (
          <>
            <ModalHeader>Get Started Now</ModalHeader>
            <ModalBody>
              <Text mb="1rem">
                {`Leave your email, and our team will reach out to discuss how our
            LinkedIn data solutions can meet your business needs. We're here to help you succeed.`}
              </Text>
              <Form
                defaultValues={{
                  email: "",
                }}
                onSubmit={saveHandler}
              >
                <FormLayout>
                  <Field
                    name="email"
                    label="Email"
                    // type="email"
                    rules={{ required: true }}
                  />
                  {error && <div style={{ color: "red" }}>{error}</div>}
                  <SubmitButton disableIfInvalid />
                </FormLayout>
              </Form>
            </ModalBody>
          </>
        )}
        {/* <ModalHeader>Get Started Now</ModalHeader>
        <ModalBody>
          <Text mb="1rem">
            {`Leave your email, and our team will reach out to discuss how our
            LinkedIn data solutions can meet your business needs. Whether you're
            looking for specific profiles, comprehensive company data, or
            tailored job descriptions, we're here to help you succeed.`}
          </Text>
          <Form
            defaultValues={{
              email: "",
            }}
            onSubmit={saveHandler}
          >
            <FormLayout>
              <Field
                name="email"
                label="Email"
                // type="email"
                rules={{ required: true }}
              />
              {error && <div style={{ color: "red" }}>{error}</div>}
              <SubmitButton disableIfInvalid />
            </FormLayout>
          </Form>
        </ModalBody> */}
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

// import { Heading } from "@chakra-ui/react";

// export default function GroupedFields() {
//   const saveHandler = async values => {
//     try {
//       const response = await fetch("/api/user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Something went wrong");
//       }

//       alert("User saved successfully!");
//     } catch (error: any) {
//       // setError(error?.message);
//     }
//   };
//   return (
//     // <Form onSubmit={saveHandler}>
//     //   {({ Field }) => (
//     //     <FormLayout>
//     //       <Heading size="md">Personal information</Heading>
//     //       <FormLayout>
//     //         <Field name="firstname" label="Name" />
//     //         <Field name="lastname" label="Last name" />
//     //       </FormLayout>

//     //       <Field name="email" label="Email address" />

//     //       <Heading size="md" mt="4">
//     //         Address
//     //       </Heading>
//     //       <FormLayout>
//     //         <Field name="address" label="Address" />
//     //         <Field name="city" label="City" />
//     //       </FormLayout>

//     //       <Heading size="md" mt="4">
//     //         Billing information
//     //       </Heading>
//     //       <FormLayout>
//     //         <Field name="card" label="Card number" />
//     //         <FormLayout>
//     //           <Field name="exp" label="Expiration date" />
//     //           <Field name="cvc" label="CVC" />
//     //         </FormLayout>
//     //       </FormLayout>

//     //       <SubmitButton>Complete order</SubmitButton>
//     //     </FormLayout>
//     //   )}
//     // </Form>
//     <Form
//       defaultValues={{
//         email: "",
//       }}
//       onSubmit={saveHandler}
//     >
//       <FormLayout>
//         <Field
//           name="email"
//           label="Email"
//           // type="email"
//           rules={{ required: true }}
//         />
//         <SubmitButton disableIfInvalid />
//       </FormLayout>
//     </Form>
//   );
// }

`Title:
"Thank You for Reaching Out!"

Message/Description:
"We appreciate your interest! Our team will contact you shortly to discuss how our LinkedIn data solutions can benefit your business. Stay tuned for our email."`;
