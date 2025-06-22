import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme, useMediaQuery } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ResponsivePie
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
      margin={{
        top: isSmallScreen ? 20 : 40,
        right: isSmallScreen ? 20 : 80,
        bottom: isSmallScreen ? 40 : 80,
        left: isSmallScreen ? 20 : 80,
      }}
      innerRadius={isSmallScreen ? 0.3 : 0.5}
      padAngle={isSmallScreen ? 0.3 : 0.7}
      cornerRadius={isSmallScreen ? 2 : 3}
      activeOuterRadiusOffset={isSmallScreen ? 6 : 8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={isSmallScreen ? 15 : 10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={isSmallScreen ? 1 : 2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={isSmallScreen ? 0.3 : 0.4}
      arcLabelsSkipAngle={isSmallScreen ? 10 : 7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: isSmallScreen ? "column" : "row",
          justify: false,
          translateX: 0,
          translateY: isSmallScreen ? 40 : 56,
          itemsSpacing: isSmallScreen ? 5 : 0,
          itemWidth: isSmallScreen ? 80 : 100,
          itemHeight: isSmallScreen ? 15 : 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: isSmallScreen ? 12 : 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default PieChart;
