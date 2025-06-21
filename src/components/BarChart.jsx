import { useTheme, useMediaQuery } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
              fontSize: isSmallScreen ? 10 : 12,
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
              fontSize: isSmallScreen ? 10 : 12,
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
            fontSize: isSmallScreen ? 10 : 12,
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{
        top: isSmallScreen ? 20 : 50,
        right: isSmallScreen ? 20 : isMobile ? 80 : 130,
        bottom: isSmallScreen ? 40 : 50,
        left: isSmallScreen ? 40 : 60,
      }}
      padding={isSmallScreen ? 0.2 : 0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: isSmallScreen ? 3 : 5,
        tickPadding: isSmallScreen ? 3 : 5,
        tickRotation: isSmallScreen ? -45 : 0,
        legend: isDashboard ? undefined : "country",
        legendPosition: "middle",
        legendOffset: isSmallScreen ? 20 : 32,
      }}
      axisLeft={{
        tickSize: isSmallScreen ? 3 : 5,
        tickPadding: isSmallScreen ? 3 : 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food",
        legendPosition: "middle",
        legendOffset: isSmallScreen ? -30 : -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={
        !isSmallScreen
          ? [
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: isMobile ? 70 : 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: isMobile ? 70 : 100,
                itemHeight: isMobile ? 15 : 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: isMobile ? 15 : 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : []
      }
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default BarChart;
