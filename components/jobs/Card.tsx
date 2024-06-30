import React, { useState } from "react";

import { MdEast } from "react-icons/md";

import { LINKEDIN_JOB_BASE } from "utils/constants";
import { IJob } from "types/jobs";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

type Props = {
  data: IJob;
};
const ContactCard = ({ data }: Props) => {
  const {
    _id,
    company,
    employment_type,
    industry,
    job_description,
    job_function,
    linkedin_internal_id,
    location,
    seniority_level,
    title,
    total_applicants,
    descriptionHTML,
  } = data;
  const [isShowMore, setIsShowMore] = useState(false);

  // Assume findExperienceWithLatestEndDate and findTimelineAtCompany are adapted for use here

  return (
    <Flex
      w="full"
      flexDirection={{ base: "column", lg: "row" }}
      borderBottom="1px"
      borderColor="gray.200"
      p={4}
      py={[4, null, 6]}
      px={[4, null, 0, 6]}
      justifyContent="space-between"
    >
      <Flex gap={4}>
        <Box
          position="relative"
          display="inline-block"
          borderRadius="lg"
          w={["115px", "15vw"]}
          maxW="220px"
          h={["115px", "220px"]}
          cursor="pointer"
        >
          <Image
            objectFit="cover"
            borderRadius="lg"
            w="full"
            h="full"
            src={company.logo || "company-placeholder.svg"}
            alt=""
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "company-placeholder.svg";
            }}
          />
        </Box>
        {/* Profile Info Mobile */}
        <Flex flexDirection="column" display={{ lg: "none" }} gap={2}>
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color="primary.500"
            cursor="pointer"
          >
            {title}
          </Text>
          <Link
            fontSize="body"
            fontWeight="medium"
            color="primary.500"
            cursor="pointer"
            href={company.url || undefined}
            target="_blank"
          >
            {company.name}
          </Link>
          <Text fontSize="sm" color="secondary.700">
            {location.city} {location.city && location.region && "·"}{" "}
            {location.region}
          </Text>
          <Text display={{ lg: "none" }} fontSize="sm">
            {job_function}
          </Text>
          {/* <Text display={{ lg: "none" }} fontSize="sm" whiteSpace="pre-line">
            {job_description}
          </Text> */}
          <Text
            whiteSpace="pre-line"
            fontSize="sm"
            display={{ lg: "none" }}
            wordBreak="break-word"
            color="gray.500"
            className={isShowMore ? "" : "line-clamp-1"}
            position="relative"
            style={
              !isShowMore
                ? {
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }
                : {}
            }
          >
            {job_description || "None"}
          </Text>
          {job_description && job_description.length > 300 && (
            <>
              <Button
                type="button"
                onClick={() => setIsShowMore(true)}
                variant="link"
                fontSize="sm"
                fontWeight="semibold"
                color="blue.600"
                display={{ lg: "none" }}
                _hover={{ color: "blue.800" }}
                hidden={isShowMore ? true : false}
                // className={isShowMore ? "hidden" : ""}
              >
                More
              </Button>
              <Button
                type="button"
                onClick={() => setIsShowMore(false)}
                variant="link"
                fontSize="sm"
                fontWeight="semibold"
                color="blue.600"
                display={{ lg: "none" }}
                _hover={{ color: "blue.800" }}
                // className={!isShowMore ? "hidden" : ""}
                hidden={!isShowMore ? true : false}
              >
                Less
              </Button>
            </>
          )}
        </Flex>
      </Flex>

      {/* Feedback Buttons Placeholder for Mobile */}

      <Flex
        flex="1"
        pl={{ lg: 2, xl: 6 }}
        flexDirection="column"
        justifyContent="space-between"
      >
        {/* Profile Info Desktop */}
        <Flex
          flexDirection="column"
          gap={2}
          alignItems="start"
          display={{ base: "none", lg: "flex" }}
        >
          <Flex alignItems="center" gap={2}>
            <Text
              fontSize="xl"
              fontWeight="semibold"
              color="primary.500"
              cursor="pointer"
            >
              {title}
            </Text>
            <Text fontSize="sm" color="secondary.700">
              {location.city} {location.city && location.region && "·"}{" "}
              {location.region}
            </Text>
          </Flex>
          <Link
            fontSize="lg"
            fontWeight="medium"
            color="primary.500"
            cursor="pointer"
            href={company.url || undefined}
            target="_blank"
          >
            {company.name}
          </Link>
          <Text fontSize="base">{job_function}</Text>
          <Text
            whiteSpace="pre-line"
            wordBreak="break-word"
            color="gray.500"
            className={isShowMore ? "" : "line-clamp-1"}
            position="relative"
            style={
              !isShowMore
                ? {
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }
                : {}
            }
          >
            {job_description || "None"}
          </Text>
          {job_description && job_description.length > 300 && (
            <>
              <Button
                type="button"
                onClick={() => setIsShowMore(true)}
                variant="link"
                fontSize="sm"
                fontWeight="semibold"
                color="blue.600"
                _hover={{ color: "blue.800" }}
                hidden={isShowMore ? true : false}
                // className={isShowMore ? "hidden" : ""}
              >
                More
              </Button>
              <Button
                type="button"
                onClick={() => setIsShowMore(false)}
                variant="link"
                fontSize="sm"
                fontWeight="semibold"
                color="blue.600"
                _hover={{ color: "blue.800" }}
                // className={!isShowMore ? "hidden" : ""}
                hidden={!isShowMore ? true : false}
              >
                Less
              </Button>
            </>
          )}
          {/* <Text fontSize="base" whiteSpace="pre-line">
            {job_description}
          </Text> */}
        </Flex>

        {/* Experience and Education Section */}
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 4, lg: 4 }}
          mt={8}
        >
          {/* <Experience data={[firstExperience]} />
        {education && education.length > 0 ? (
          <Education data={education[0]} />
        ) : (
          <NoEducation />
        )} */}
        </Flex>

        {/* See Full Profile Button */}
      </Flex>
    </Flex>
    // <div className="w-full flex flex-col lg:flex-row border-b border-gray-200 p-4 lg:py-6 lg:px-0 xl:p-6 justify-between">
    //   <div className="flex gap-4">
    //     <div className="relative inline-block rounded-lg w-[115px] lg:w-[15vw] max-w-[220px] h-[115px] lg:h-[220px] cursor-pointer">
    //       <img
    //         className="object-cover rounded-lg w-full h-full"
    //         src={company.logo || "company-placeholder.svg"}
    //         alt=""
    //         onError={({ currentTarget }) => {
    //           currentTarget.onerror = null; // prevents looping
    //           currentTarget.src = "company-placeholder.svg";
    //         }}
    //       />
    //     </div>
    //     {/* Profile Info Mobile */}
    //     <div className="flex flex-col lg:hidden space-y-2">
    //       <span className="text-xl font-semibold text-primary-500 cursor-pointer">
    //         {title}
    //       </span>
    //       <a
    //         className="text-body font-medium text-primary-500 cursor-pointer"
    //         href={company.url || undefined}
    //         target="_blank"
    //       >
    //         {company.name}
    //       </a>
    //       <span className="text-sm text-secondary-700">
    //         {location.city} {location.city && location.region && "·"}{" "}
    //         {location.region}
    //       </span>

    //       <span className="lg:hidden text-sm">{job_function}</span>
    //     </div>
    //   </div>

    //   {/* Feedback Buttons Placeholder for Mobile */}

    //   <div className="flex-1 lg:pl-2 xl:pl-6 flex flex-col justify-between">
    //     {/* Profile Info Desktop */}
    //     <div className="hidden lg:flex gap-2 flex-col items-start">
    //       <div className="flex items-center space-x-2">
    //         <span className="text-xl font-semibold text-primary-500 cursor-pointer">
    //           {title}
    //         </span>
    //         <span className="text-sm text-secondary-700">
    //           {location.city} {location.city && location.region && "·"}{" "}
    //           {location.region}
    //         </span>
    //       </div>
    //       <a
    //         className="text-lg font-medium text-primary-500 cursor-pointer"
    //         href={company.url || undefined}
    //         target="_blank"
    //       >
    //         {company.name}
    //       </a>
    //       <span className="text-base">{job_function}</span>
    //     </div>

    //     {/* Experience and Education Section */}
    //     <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-8">
    //       {/* <Experience data={[firstExperience]} />
    //       {education && education.length > 0 ? (
    //         <Education data={education[0]} />
    //       ) : (
    //         <NoEducation />
    //       )} */}
    //     </div>

    //     {/* See Full Profile Button */}
    //   </div>
    // </div>
  );
};

export default React.memo(ContactCard);
