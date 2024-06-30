import { IProfile } from "types/profiles";

import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import NoEducation from "./NoEducation";
import { MdEast } from "react-icons/md";
import { Box, Button, Flex, Image, Text, HStack } from "@chakra-ui/react";

import avatarPlaceholder from "assets/placeholder-avatar.png";

type Props = {
  handleClick: (id: string) => void;

  data: IProfile;
};
const ProfileCard = ({ handleClick, data }: Props) => {
  const {
    _id,
    full_name,
    address,
    avatar,

    education,
    experience,
    occupation,
  } = data;
  // Assume findExperienceWithLatestEndDate and findTimelineAtCompany are adapted for use here
  const firstExperience = experience[0]; // Simplified for this example

  const onClick = () => handleClick(_id);

  return (
    <Box
      w="full"
      borderBottom="1px"
      borderColor="gray.200"
      p={[4, null, 6]}
      px={[4, null, 0, 6]}
    >
      <Flex direction={["column", null, "row"]} justify="space-between">
        {/* <div className="w-full flex flex-col lg:flex-row border-b border-gray-200 p-4 lg:py-6 lg:px-0 xl:p-6 justify-between"> */}
        {/* <div className="flex gap-4">
          <div
            className="relative inline-block rounded-lg w-[115px] lg:w-[15vw] max-w-[220px] h-[115px] lg:h-[220px] cursor-pointer"
            onClick={onClick}
          >
            <img
              className="object-cover rounded-lg w-full h-full"
              src={avatar || "/user-placeholder.jpeg"}
              alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/user-placeholder.jpeg";
              }}
            />
          </div>

          <div className="flex flex-col lg:hidden space-y-2">
            <span
              className="text-xl font-semibold text-primary-500 cursor-pointer"
              onClick={onClick}
            >
              {full_name}
            </span>
            <span className="text-sm text-secondary-700">{address}</span>
            <span className="lg:hidden text-sm">{occupation}</span>
          </div>
        </div> */}
        <Flex gap={4}>
          <Box
            as="div"
            position="relative"
            display="inline-block"
            borderRadius="lg"
            w={["115px", null, "15vw"]}
            maxW="220px"
            h={["115px", null, "220px"]}
            cursor="pointer"
            onClick={onClick}
          >
            <Image
              objectFit="cover"
              borderRadius="lg"
              w="full"
              h="full"
              src={avatar || "/user-placeholder.jpeg"}
              alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/user-placeholder.jpeg";
              }}
            />
          </Box>

          {/* Profile Info Mobile */}
          <Flex direction="column" display={["flex", null, "none"]} gap={2}>
            <Text
              fontSize="xl"
              fontWeight="semibold"
              color="primary.500"
              cursor="pointer"
              onClick={onClick}
            >
              {full_name}
            </Text>
            <Text fontSize="sm" color="secondary.700">
              {address}
            </Text>
            <Text display={["block", null, "none"]} fontSize="sm">
              {occupation}
            </Text>
          </Flex>
        </Flex>
        {/* Feedback Buttons Placeholder for Mobile */}

        {/* <div className="flex-1 lg:pl-2 xl:pl-6">
          <div className="hidden lg:flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <span
                className="text-xl font-semibold text-primary-500 cursor-pointer"
                onClick={onClick}
              >
                {full_name}
              </span>
              <span className="text-sm text-secondary-700">{address}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-8">
            <Experience data={[firstExperience]} />
            {education && education.length > 0 ? (
              <Education data={education[0]} />
            ) : (
              <NoEducation />
            )}
          </div>

          <button
            className="flex items-center gap-2 mt-4 text-blue-500 font-medium"
            onClick={onClick}
          >
            See full profile
            <MdEast />
          </button>
        </div> */}

        <Box flex="1" pl={[0, 2, 6]}>
          {/* Profile Info Desktop */}
          <Flex
            display={["none", "none", "flex"]}
            justify="space-between"
            align="start"
            mb={2}
          >
            <Flex align="center" mx={2}>
              <Text
                fontSize="xl"
                fontWeight="semibold"
                color="primary.500"
                cursor="pointer"
                onClick={onClick}
              >
                {full_name}
              </Text>
              <Text fontSize="sm" color="secondary.700" ml={"10px"}>
                {address}
              </Text>
            </Flex>
          </Flex>

          {/* Experience and Education Section */}
          <Flex
            direction={["column", null, "row"]}
            mt={8}
            my={[4, 0]}
            mx={[0, 4]}
          >
            <Experience data={[firstExperience]} />
            {education && education.length > 0 ? (
              <Education data={education[0]} />
            ) : (
              <NoEducation />
            )}
          </Flex>

          {/* See Full Profile Button */}
          {/* <Button
            display="flex"
            alignItems="center"
            gap={2}
            mt={4}
            colorScheme="blue"
            fontWeight="medium"
            variant="link"
            onClick={onClick}
          >
            See full profile
            <MdEast />
          </Button> */}
        </Box>
        {/* </div> */}
      </Flex>
    </Box>
  );
};

export default React.memo(ProfileCard);

// import { Company, Talent } from "@prisma/client";

// const ProfileCard = ({ profile }: { profile: Talent }) => {
//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//       <figure>
//         <img
//           src={profile.avatar || "/user-placeholder.jpeg"}
//           alt="Shoes"
//           onError={({ currentTarget }) => {
//             // currentTarget.onerror = null; // prevents looping
//             currentTarget.src = "/user-placeholder.jpeg";
//           }}
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{profile.fullName}</h2>
//         <h4 className="font-medium">{profile.occupation}</h4>
//         <p>{profile.summary}</p>
//         <div className="divider"></div>

//         <div className={"flex flex-col"}>
//           {profile.phone_number && (
//             <div className="flex justify-between gap-x-1.5">
//               <span className="text-nowrap">Phone Number:</span>{" "}
//               <span>{profile.phone_number}</span>
//             </div>
//           )}
//           {profile.email && (
//             <div className="flex justify-between gap-x-1.5">
//               <span>Email:</span> <span>{profile.email}</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProfileCard;
