import { useTheme, useMediaQuery } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ResponsiveChoropleth
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
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={
        isDashboard
          ? isSmallScreen
            ? 25
            : 40
          : isSmallScreen
          ? 80
          : isMobile
          ? 120
          : 150
      }
      projectionTranslation={
        isDashboard ? (isSmallScreen ? [0.49, 0.65] : [0.49, 0.6]) : [0.5, 0.5]
      }
      projectionRotation={[0, 0, 0]}
      borderWidth={isSmallScreen ? 1 : 1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: isSmallScreen ? 10 : 20,
                translateY: isSmallScreen ? -60 : -100,
                itemsSpacing: 0,
                itemWidth: isSmallScreen ? 70 : 94,
                itemHeight: isSmallScreen ? 15 : 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: isSmallScreen ? 12 : 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;
