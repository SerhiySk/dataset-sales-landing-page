import React, { useEffect, useState, useMemo } from "react";
import moment from "moment";
import Image from "next/image";
import companyPlaceholder from "@/assets/company-placeholder.svg";
import { IProfileExperience } from "types/profiles";
import { Box, Flex, Image as CImage, Text, Heading } from "@chakra-ui/react";

// import { getDifference, getImgSrc } from '../../../utils/helpers';
type Props = {
  isFullView?: boolean;
  data: IProfileExperience[];
  //   total_at_company: { starts_at: string | null; ends_at: string | null };
  //   isFullView, total_at_company
};
const ExperienceComponent = ({ data, isFullView }: Props) => {
  //   const [isShowMore, setIsShowMore] = useState(false);
  //   const [descriptionToShow, setDescriptionToShow] = useState("");

  const { company, title, description, logo, starts_at, ends_at } = data[0];
  //   useEffect(() => {
  //     setDescriptionToShow(getDescription());
  //   }, [data, isFullView]);

  //   const getDescription = (isShowFull = false) => {
  //     let tempCompanyInfo = "";
  //     // Logic to compile company info string
  //     if (company_size) {
  //       tempCompanyInfo += `${company_size.toLocaleString()} employees`;
  //     }
  //     if (industry) {
  //       tempCompanyInfo += ` · ${industry}`;
  //     }
  //     if (company_description) {
  //       const trimmedDescription = isShowFull
  //         ? company_description
  //         : `${company_description.split(" ").slice(0, 50).join(" ")}...`;
  //       tempCompanyInfo += ` · ${trimmedDescription}`;
  //     }
  //     return tempCompanyInfo;
  //   };

  // const getTimeline = (start: CustomDate, end?: CustomDate | null) => {
  //   const startTime = start
  //     ? moment({
  //         year: start.year,
  //         // Subtract 1 because moment.js months are 0-indexed (0 for January, 11 for December)
  //         month: start.month - 1,
  //         day: start.day,
  //       }).format("MMM YYYY")
  //     : "";
  //   const endTime = end ? moment(end).format("MMM YYYY") : "Present";
  //   return `${startTime} - ${endTime}`;
  // };
  const getTimeline = (start: Date, end: Date | null) => {
    const startTime = moment(start).format("MMM YYYY");
    let endTime = "present";
    if (end) endTime = moment(end).format("MMM YYYY");
    return `${startTime} - ${endTime}`;
  };

  //   const onShowMoreClick = () => {
  //     setDescriptionToShow(getDescription(true));
  //     setIsShowMore(false);
  //   };

  return (
    <Box w="full">
      <Flex>
        {/* <div className="flex flex-col items-center">
          <div className="relative w-12 min-w-12 h-12">
            <img
              src={
                data[0].logo ||
                // getImgSrc(data[0].company_id) ||
                "/company-placeholder.svg"
              }
              alt="company logo"
              //   layout="fill"
              //   objectFit="cover"
              className="rounded w-full h-full object-cover"
              //   onError={e => (e.target.src = companyPlaceholder)}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/company-placeholder.svg";
              }}
            />
          </div>
       
          <div className="pt-2 relative flex-grow">
            <div className="w-px bg-gray-400 h-full mx-auto"></div>
          </div>
        </div> */}
        <Flex flexDirection="column" alignItems="center">
          {/* Logo */}
          <Box position="relative" w={12} minW={12} h={12}>
            <CImage
              src={
                data[0].logo ||
                // getImgSrc(data[0].company_id) ||
                "/company-placeholder.svg"
              }
              alt="company logo"
              borderRadius="md"
              w="full"
              h="full"
              objectFit="cover"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/company-placeholder.svg";
              }}
            />
          </Box>
          {/* Vertical Line */}
          <Box pt={2} position="relative" flexGrow={1}>
            <Box w="1px" bg="gray.400" h="full" mx="auto"></Box>
          </Box>
        </Flex>
        {/* <div className="flex flex-col pl-2">
          <p className="text-lg">{data[0].company}</p>
          <p className="text-sm text-gray-600">
  
          </p>
          <p className="text-sm text-gray-500">
            {description}
            
          </p>
        </div> */}
        <Flex flexDirection="column" pl={2}>
          <Heading as="h4" fontSize="lg" fontWeight="semibold">
            {data[0].company}
          </Heading>
          <Text fontSize="sm" color="gray.600">
            {/* Additional text can go here */}
          </Text>
          <Text fontSize="sm" color="gray.500" whiteSpace="pre-line">
            {description}
          </Text>
        </Flex>
      </Flex>
      {data.map((experience, index) => (
        // <div className="flex mb-4" key={index}>
        //   <div className="flex flex-col items-center">
        //     <div className="w-12"></div> {/* Placeholder for alignment */}
        //     <div className="mt-2 w-2 h-2 bg-gray-400 rounded-full"></div>
        //     {index < data.length - 1 && (
        //       <div className="w-px bg-gray-400 flex-grow"></div>
        //     )}
        //   </div>
        //   <div className="flex flex-col pl-2">
        //     <p className="text-lg">{experience.title}</p>
        //     <p className="text-sm text-gray-500">
        //       {experience.starts_at &&
        //         getTimeline(experience.starts_at, experience.ends_at)}
        //     </p>
        //     {isFullView && (
        //       <>
        //         {experience.location && (
        //           <p className="text-sm text-gray-500">{experience.location}</p>
        //         )}
        //         {experience.description && (
        //           <p className="text-sm text-gray-500 mt-2">
        //             {experience.description}
        //           </p>
        //         )}
        //       </>
        //     )}
        //   </div>
        // </div>
        <Flex mb={4} key={index}>
          <Flex flexDirection="column" alignItems="center">
            <Box w={12}></Box> {/* Placeholder for alignment */}
            <Box mt={2} w={2} h={2} bg="gray.400" borderRadius="full"></Box>
            {index < data.length - 1 && (
              <Box w="1px" bg="gray.400" flexGrow={1}></Box>
            )}
          </Flex>
          <Flex flexDirection="column" pl={2}>
            <Text fontSize="lg">{experience.title}</Text>
            <Text fontSize="sm" color="gray.500">
              {experience.starts_at &&
                getTimeline(experience.starts_at, experience.ends_at)}
            </Text>
            {isFullView && (
              <>
                {experience.location && (
                  <Text fontSize="sm" color="gray.500">
                    {experience.location}
                  </Text>
                )}
                {experience.description && (
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    mt={2}
                    whiteSpace="pre-line"
                  >
                    {experience.description}
                  </Text>
                )}
              </>
            )}
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default ExperienceComponent;
