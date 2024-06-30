import CompanyCard from "./CompanyCard";
import { useCallback, useState } from "react";
import { ICompany } from "types/companies";
import { Box, Heading, Flex } from "@chakra-ui/react";

const CompaniesList = ({
  data,
  handleClick,
}: {
  data: ICompany[];
  handleClick: (id: string) => void;
}) => {
  if (data.length === 0)
    return <h4 className="text-lg">No Companies yet...</h4>;

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
          {data.map(company => {
            return <CompanyCard key={company._id} company={company} />;
          })}
        </Flex>
      </Box>
    </Box>
  );
};
export default CompaniesList;
