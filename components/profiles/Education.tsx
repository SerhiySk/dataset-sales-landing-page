import React from "react";
import { IProfileEducation } from "types/profiles";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

type Props = {
  data: IProfileEducation;
};
const EducationComponent = ({ data }: Props) => {
  const { school, logo, starts_at, ends_at, fields_of_study, degree_name } =
    data;
  const start = starts_at ? new Date(starts_at).getFullYear() : null;
  const end = ends_at
    ? new Date(ends_at).getFullYear()
    : new Date().getFullYear();

  return (
    // <div className="flex w-full">
    //   <div className="relative w-12 min-w-12 h-12 mr-6">
    //     <img
    //       className="object-cover w-full h-full rounded-sm"
    //       alt="logo"
    //       src={logo || "/user-placeholder.jpeg"}
    //       onError={({ currentTarget }) => {
    //         currentTarget.onerror = null; // prevents looping
    //         currentTarget.src = "/user-placeholder.jpeg";
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <div className="space-y-2">
    //       <h4 className="text-lg font-semibold">{school}</h4>
    //       <div className="space-y-1">
    //         <p className="text-sm">{`${degree_name}${
    //           degree_name && fields_of_study ? ", " : ""
    //         }${fields_of_study}`}</p>
    //         <p className="text-sm text-gray-600">
    //           {start ? `${start} - ${end}` : ""}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Flex w="full">
      <Box position="relative" w={12} minW={12} h={12} mr={6}>
        <Image
          objectFit="cover"
          w="full"
          h="full"
          borderRadius="sm"
          alt="logo"
          src={logo || "/user-placeholder.jpeg"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/user-placeholder.jpeg";
          }}
        />
      </Box>
      <Box>
        <Box my={2}>
          <Heading as="h4" fontSize="lg" fontWeight="semibold">
            {school}
          </Heading>
          <Box my={1}>
            <Text fontSize="sm">
              {degree_name}
              {`${degree_name && fields_of_study ? ", " : ""}`}
              {fields_of_study}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {start ? `${start} - ${end}` : ""}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default React.memo(EducationComponent);
