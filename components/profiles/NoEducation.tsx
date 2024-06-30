import React from "react";
import icon from "@/assets/no-education.svg";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const NoEducation = () => {
  return (
    // <div className="pt-8 m-auto flex flex-col items-center space-y-4">
    //   <div className="h-15 w-15 bg-gray-100 rounded-full flex justify-center items-center">
    //     <img src={"/no-education.svg"} alt="" className="relative h-7 w-7" />
    //   </div>
    //   <p className="text-center text-gray-600">
    //     There is no education info for this candidate
    //   </p>
    // </div>
    <Flex pt={8} m="auto" flexDirection="column" alignItems="center" gap={4}>
      <Flex
        h={15}
        w={15}
        bg="gray.100"
        borderRadius="full"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="/no-education.svg" alt="" h={7} w={7} />
      </Flex>
      <Text textAlign="center" color="gray.600">
        There is no education info for this candidate
      </Text>
    </Flex>
  );
};

export default NoEducation;
