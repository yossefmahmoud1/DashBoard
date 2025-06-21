import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box m={isSmallScreen ? "10px" : "20px"}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={isSmallScreen ? "column" : "row"}
        gap={isSmallScreen ? 2 : 0}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={isMobile ? "1fr" : "repeat(12, 1fr)"}
        gridAutoRows={isMobile ? "auto" : "minmax(160px, auto)"}
        gap="20px"
        mt="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn={isMobile ? "span 1" : "span 3"}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight={isMobile ? "120px" : "160px"}
        >
          <StatBox
            title={12361}
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={isMobile ? "span 1" : "span 3"}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight={isMobile ? "120px" : "160px"}
        >
          <StatBox
            title={431225}
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={isMobile ? "span 1" : "span 3"}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight={isMobile ? "120px" : "160px"}
        >
          <StatBox
            title={32441}
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={isMobile ? "span 1" : "span 3"}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight={isMobile ? "120px" : "160px"}
        >
          <StatBox
            title={1325134}
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn={isMobile ? "span 1" : "span 8"}
          gridRow={isMobile ? "span 1" : "span 2"}
          backgroundColor={colors.primary[400]}
          p={isSmallScreen ? "15px" : "20px"}
          display="flex"
          flexDirection="column"
          height={isMobile ? "400px" : "500px"}
          overflow="hidden"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={isSmallScreen ? "column" : "row"}
            gap={isSmallScreen ? 2 : 0}
            mb="15px"
            flexShrink={0}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            flex={1}
            height="0"
            minHeight={0}
            overflow="hidden"
            sx={{
              "& > div": {
                height: "100% !important",
                maxHeight: "100% !important",
              },
            }}
          >
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={isMobile ? "span 1" : "span 4"}
          gridRow={isMobile ? "span 1" : "span 2"}
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height={isMobile ? "400px" : "500px"}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
            flexShrink={0}
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                fontSize="14px"
                fontWeight="bold"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn={isMobile ? "span 1" : "span 4"}
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          p={isSmallScreen ? "20px" : "30px"}
          display="flex"
          flexDirection="column"
          minHeight={isMobile ? "300px" : "400px"}
        >
          <Typography variant="h5" fontWeight="600" flexShrink={0}>
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flex={1}
            mt="25px"
          >
            <ProgressCircle size={isSmallScreen ? "100" : "125"} />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={isMobile ? "span 1" : "span 4"}
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          minHeight={isMobile ? "300px" : "400px"}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 15px 30px" }}
            flexShrink={0}
          >
            Sales Quantity
          </Typography>
          <Box
            flex={1}
            minHeight={isSmallScreen ? "200px" : "250px"}
            maxHeight={isSmallScreen ? "200px" : "250px"}
          >
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={isMobile ? "span 1" : "span 4"}
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          p={isSmallScreen ? "20px" : "30px"}
          display="flex"
          flexDirection="column"
          minHeight={isMobile ? "300px" : "400px"}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
            flexShrink={0}
          >
            Geography Based Traffic
          </Typography>
          <Box
            flex={1}
            minHeight={isSmallScreen ? "180px" : "200px"}
            maxHeight={isSmallScreen ? "180px" : "200px"}
          >
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
