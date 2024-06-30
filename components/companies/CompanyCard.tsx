import { ICompany } from "types/companies";
import { useMemo, useState } from "react";
import { numberWithCommas } from "utils/helpers";
import { LINKEDIN_COMPANY_BASE } from "utils/constants";
import { Grid, Box, Flex, Image, Text, Button, Link } from "@chakra-ui/react";

const CompanyCard = ({ company }: { company: ICompany }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const {
    _id,
    search_id,
    name,
    industry,
    hq,
    company_size,
    logo,
    employees_count,
    follower_count,
    company_type,
    founded_year,
    specialties,
    description,
    // score,
    website,
  } = company;
  const generatecompany_size = () => {
    const range = company_size.map(val => numberWithCommas(val));
    const label = `${range.join(" - ")}${range.length === 1 ? "+" : ""}`;
    return label;
    // if (Array.isArray(company_size)) {
    //   const filteredSizes = company_size.filter(size => size);
    //   return filteredSizes.join(" - ");
    // } else return JSON.stringify(company_size);
  };

  return (
    // <div className="w-full flex flex-col gap-3 border-b-[1px] pb-5 pt-3">
    <Box w="full" borderBottom="1px" pb={5} pt={3}>
      <Flex w="full" flexDirection="column" gap={3}>
        {/* <div className="w-full flex justify-between items-start lg:items-center"> */}
        <Flex
          w="full"
          justifyContent="space-between"
          alignItems={["flex-start", null, "center"]}
        >
          {/* <div className="flex gap-1 md:gap-4 w-full">
          <div className="relative inline-block rounded-lg w-[40px] min-w-[40px] h-[40px] lg:h-[50px] lg:w-[50px] lg:min-w-[50px]">
            <img
              className="object-cover rounded-lg w-full h-full"
              src={logo || "/company-placeholder.svg"}
              alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/company-placeholder.svg";
              }}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 text-sm">
            <button
              className="text-primary hover:text-primary-dark"
              onClick={() => {}}
              // href={`https://www.linkedin.com/company/${_id}/`}
              // target="_blank"
            >
              <h3 className="font-medium text-xl underline text-start break-words xs:break-words inline-block overflow-auto">
                {name}
              </h3>
            </button>
            <span className="h-[20px] border-l-[1px] hidden lg:block"></span>
            <p className="text-gray-400 break-words overflow-auto inline-block">
              {industry}
            </p>
          </div>
        </div> */}
          <Flex gap={[1, 4]} w="full">
            <Box
              position="relative"
              display="inline-block"
              borderRadius="lg"
              w={["40px", null, "50px"]}
              minW={["40px", null, "50px"]}
              h={["40px", null, "50px"]}
            >
              <Image
                objectFit="cover"
                borderRadius="lg"
                w="full"
                h="full"
                src={logo || "/company-placeholder.svg"}
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/company-placeholder.svg";
                }}
              />
            </Box>
            <Flex
              flexDirection={["column", null, "row"]}
              alignItems={["flex-start", null, "center"]}
              gap={2}
              fontSize="sm"
            >
              <Button
                variant="link"
                color="primary"
                _hover={{ color: "primary-dark" }}
                onClick={() => {}}
              >
                <Text
                  as="h3"
                  fontWeight="medium"
                  fontSize="xl"
                  textDecoration="underline"
                  textAlign="start"
                  overflow="auto"
                  display="inline-block"
                >
                  {name}
                </Text>
              </Button>
              <Box
                display={["none", null, "block"]}
                h="20px"
                borderLeft="1px"
                borderColor="gray.300"
              />
              <Text color="gray.400" overflow="auto" display="inline-block">
                {industry}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <span className="font-semibold text-sm">
          Associated member{employees_count && employees_count > 1 ? "s" : ""}:{" "}
          <span className="text-gray-500 font-normal">
            {employees_count ? numberWithCommas(employees_count) : "-"}
          </span>
        </span>
        <span className="font-semibold text-sm">
          Company size:{" "}
          <span className="text-gray-500 font-normal">
            {generatecompany_size()}
          </span>
        </span>
        <span className="font-semibold text-sm">
          Industry:{" "}
          <span className="text-gray-500 font-normal">{industry}</span>
        </span>
    
        <span className="font-semibold text-sm">
          Followers Count:{" "}
          <span className="text-gray-500 font-normal">
            {follower_count ? numberWithCommas(follower_count) : "-"}
          </span>
        </span>
        <div
          className={`${
            !hq || hq.length === 0 ? "hidden " : ""
          }font-semibold text-sm`}
        >
          Headquarters: <span className="text-gray-500 font-normal">{hq}</span>
        </div>
        <div
          className={`${!founded_year ? "hidden " : ""}font-semibold text-sm`}
        >
          Founded:{" "}
          <span className="text-gray-500 font-normal">{founded_year}</span>
        </div>
      </div> */}
        <Grid gap={4} templateColumns={["1fr", null, "repeat(2, 1fr)"]}>
          <Text fontWeight="semibold" fontSize="sm">
            Associated member{employees_count && employees_count > 1 ? "s" : ""}
            :{" "}
            <Text as="span" color="gray.500" fontWeight="normal">
              {employees_count ? numberWithCommas(employees_count) : "-"}
            </Text>
          </Text>
          <Text fontWeight="semibold" fontSize="sm">
            Company size:{" "}
            <Text as="span" color="gray.500" fontWeight="normal">
              {generatecompany_size()}
            </Text>
          </Text>
          <Text fontWeight="semibold" fontSize="sm">
            Industry:{" "}
            <Text as="span" color="gray.500" fontWeight="normal">
              {industry}
            </Text>
          </Text>
          {/* <Text fontWeight="semibold" fontSize="sm">
        Score: <Text as="span" color="gray.500" fontWeight="normal">{score}</Text>
      </Text> */}
          <Text fontWeight="semibold" fontSize="sm">
            Followers Count:{" "}
            <Text as="span" color="gray.500" fontWeight="normal">
              {follower_count ? numberWithCommas(follower_count) : "-"}
            </Text>
          </Text>
          {hq && hq.length > 0 && (
            <Box fontWeight="semibold" fontSize="sm">
              Headquarters:{" "}
              <Text as="span" color="gray.500" fontWeight="normal">
                {hq}
              </Text>
            </Box>
          )}
          {founded_year && (
            <Box fontWeight="semibold" fontSize="sm">
              Founded:{" "}
              <Text as="span" color="gray.500" fontWeight="normal">
                {founded_year}
              </Text>
            </Box>
          )}
        </Grid>

        {/* <div
        className={`${
          specialties.length === 0 ? "hidden " : ""
        }font-semibold text-sm`}
      >
        Specialties:{" "}
        <span className="text-gray-500 font-normal">
          {specialties.join(", ")}.
        </span>
      </div>
      <div className="text-sm">
        <h6 className="font-semibold">Overview:</h6>
        <p
          className={`whitespace-pre-line	break-words text-gray-500 relative${
            isShowMore ? "" : " line-clamp-1"
          }`}
        >
          {description || "None"}
        </p>
        {description && description?.length > 100 && (
          <>
            <button
              type="button"
              onClick={() => setIsShowMore(true)}
              className={`p-0 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none${
                isShowMore ? " hidden" : ""
              }`}
            >
              More
            </button>
            <button
              type="button"
              onClick={() => setIsShowMore(false)}
              className={`p-0 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none${
                !isShowMore ? " hidden" : ""
              }`}
            >
              Less
            </button>
          </>
        )}
      </div>
      <div className="w-full">
        <a
          href={LINKEDIN_COMPANY_BASE + _id}
          className="flex justify-center w-fit items-center gap-1 font-semibold text-sm mx-0 text-primary hover:text-primary-dark underline line"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin Page
        </a>
      </div> */}
        {specialties.length > 0 && (
          <Box fontWeight="semibold" fontSize="sm">
            Specialties:{" "}
            <Text as="span" color="gray.500" fontWeight="normal">
              {specialties.join(", ")}.
            </Text>
          </Box>
        )}
        <Box fontSize="sm">
          <Text as="h6" fontWeight="semibold">
            Overview:
          </Text>
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
                    WebkitLineClamp: 1,
                  }
                : {}
            }
          >
            {description || "None"}
          </Text>
          {description && description.length > 100 && (
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
        </Box>
        <Box w="full">
          <Link
            href={`${LINKEDIN_COMPANY_BASE}${_id}`}
            isExternal
            className="flex justify-center w-fit items-center gap-1 font-semibold text-sm mx-0 text-primary hover:text-primary-dark underline"
          >
            LinkedIn Page
          </Link>
        </Box>
        {/* </div> */}
      </Flex>
    </Box>
  );
};
export default CompanyCard;
