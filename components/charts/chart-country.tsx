import { Box, Heading } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import countries from "world-countries";
import ReactCountryFlag from "react-country-flag";
import CustomXAxisTick from "./x-axios-label"; // Adjust the path as necessary
import { SectionTitle } from "components/section";

interface StatisticsChartProps {
  title: string;
  data: {
    country: string;
    count: number;
  }[];
}

const StatisticsChart = ({ title, data }: StatisticsChartProps) => {
  const chartData = data.map((item: { country: string; count: number }) => ({
    country: item.country,
    count: item.count,
  }));
  return (
    <Box width="100%">
      {/* <Heading as="h2" size="lg" mb={4}>
        {title}
      </Heading> */}
      <SectionTitle title={title}></SectionTitle>
      <Box width="100%" height={600} overflowX="auto">
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
          >
            <XAxis
              dataKey="country"
              //   @ts-expect-error
              tick={<CustomXAxisTick />}
              interval={0}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default StatisticsChart;
