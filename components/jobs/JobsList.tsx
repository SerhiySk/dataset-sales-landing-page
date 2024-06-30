import Card from "./Card";
import { useCallback, useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { IJob } from "types/jobs";

const ProfilesList = ({
  data,
  handleClick,
}: {
  data: IJob[];
  handleClick: (id: string) => void;
}) => {
  if (data.length === 0) return <h4 className="text-lg">No Jobs yet...</h4>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      flex="1"
      gap="1.5rem"
      w="full"
      minH="calc(100vh - 6rem)"
      maxH="100%"
      pt={2}
      pl={1}
      position="relative"
    >
      <Box position="absolute" w="full" h="full">
        {/* <Heading as="h2" fontSize="2xl" fontWeight="bold">
          {data.length} Results:
        </Heading> */}
        <Flex
          overflowY="scroll"
          w="full"
          flexGrow={1}
          gap={6}
          maxH="full"
          flexDirection="column"
        >
          {data.map(job => {
            return <Card key={job._id} data={job} />;
          })}
        </Flex>
      </Box>
    </Box>
    // <div
    //   style={{
    //     // alignSelf: "stretch",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "flex-start",
    //     justifyContent: "flex-start",
    //     flex: "1",
    //     gap: "1.5rem",
    //   }}
    //   className="w-full min-h-[calc(100vh-6rem)] max-h-[100%] pt-2 border-l border-gray-300 pl-1 relative"
    // >
    //   <div className="absolute w-full h-full">
    //     <h2 className="font-bold text-2xl">{data.length} Results:</h2>
    //     <div className="overflow-y-scroll w-full flex-grow gap-6 max-h-full flex flex-col">
    //       {data.map(profile => {
    //         return (
    //           <ProfileCard
    //             key={profile._id}
    //             handleClick={handleClick}
    //             data={profile}
    //           />
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};
export default ProfilesList;
