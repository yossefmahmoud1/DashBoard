import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import CountUp from "react-countup";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width="100%" m={isSmallScreen ? "0 15px" : "0 30px"}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant={isSmallScreen ? "h5" : "h4"}
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            <CountUp
              end={title}
              duration={2.75}
              separator=","
              decimals={0}
              start={0}
            />
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography
          variant={isSmallScreen ? "h6" : "h5"}
          sx={{ color: colors.greenAccent[500] }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant={isSmallScreen ? "h6" : "h5"}
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
