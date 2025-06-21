import { ResponsiveLine } from "@nivo/line";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";
import { Box } from "@mui/material";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ height: "100%", width: "100%", overflow: "hidden" }}>
      <ResponsiveLine
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
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
        }}
        colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
        margin={{
          top: isSmallScreen ? 10 : 20,
          right: isSmallScreen ? 20 : isMobile ? 60 : 80,
          bottom: isDashboard ? 30 : isSmallScreen ? 30 : 50,
          left: isSmallScreen ? 40 : 60,
        }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 0,
          tickPadding: isSmallScreen ? 3 : 5,
          tickRotation: isSmallScreen ? -45 : 0,
          legend: isDashboard ? undefined : "transportation",
          legendOffset: isSmallScreen ? 20 : 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: isSmallScreen ? 3 : 5,
          tickSize: isSmallScreen ? 2 : 3,
          tickPadding: isSmallScreen ? 3 : 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "count",
          legendOffset: isSmallScreen ? -30 : -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={isSmallScreen ? 4 : 8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={isSmallScreen ? 1 : 2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={isSmallScreen ? -8 : -12}
        useMesh={true}
        legends={
          !isSmallScreen
            ? [
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: isMobile ? 60 : 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: isMobile ? 60 : 80,
                  itemHeight: isMobile ? 15 : 20,
                  itemOpacity: 0.75,
                  symbolSize: isMobile ? 8 : 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : []
        }
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </Box>
  );
};

export default LineChart;
