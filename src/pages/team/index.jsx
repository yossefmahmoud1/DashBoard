import {
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = ({ teamMembers, handleDeleteUser }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: isMobile ? 60 : 80,
      hide: isMobile,
      sortable: true,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: isMobile ? 100 : 200,
      sortable: true,
      align: "left",
      headerAlign: "left",
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{
            fontSize: isMobile ? "0.75rem" : "0.875rem",
            color: colors.greenAccent[300],
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "age",
      headerName: "Age",
      width: isMobile ? 60 : 80,
      hide: isMobile,
      sortable: true,
      type: "number",
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{
            fontSize: isMobile ? "0.75rem" : "0.875rem",
            fontWeight: 500,
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "phone",
      headerName: "Phone",
      width: isMobile ? 110 : 180,
      sortable: true,
      align: "left",
      headerAlign: "left",
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{
            fontSize: isMobile ? "0.7rem" : "0.875rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: isMobile ? 120 : 250,
      sortable: true,
      align: "left",
      headerAlign: "left",
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{
            fontSize: isMobile ? "0.7rem" : "0.875rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "accessLevel",
      headerName: "Role",
      width: isMobile ? 80 : 130,
      sortable: true,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700],
            borderRadius: "4px",
            padding: isMobile ? "3px 4px" : "6px 8px",
            minHeight: isMobile ? "24px" : "28px",
          }}
        >
          {!isMobile && access === "admin" && (
            <AdminPanelSettingsOutlinedIcon
              sx={{ fontSize: "1rem", mr: 0.5 }}
            />
          )}
          {!isMobile && access === "manager" && (
            <SecurityOutlinedIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
          )}
          {!isMobile && access === "user" && (
            <LockOpenOutlinedIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
          )}
          <Typography
            sx={{
              color: colors.grey[100],
              fontSize: isMobile ? "0.65rem" : "0.8rem",
              textTransform: "capitalize",
              fontWeight: 500,
            }}
          >
            {access}
          </Typography>
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: isMobile ? 70 : 100,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const isProtectedUser =
          params.row.access === "admin" || params.row.access === "manager";

        return (
          <Tooltip
            title={
              isProtectedUser
                ? `Cannot delete ${params.row.access} users`
                : "Delete user"
            }
            placement="top"
          >
            <span>
              <Button
                onClick={() => !isProtectedUser && handleDeleteUser(params.id)}
                variant="contained"
                color="secondary"
                size="small"
                disabled={isProtectedUser}
                sx={{
                  backgroundColor: isProtectedUser
                    ? colors.grey[600]
                    : colors.redAccent[500],
                  color: colors.grey[100],
                  fontSize: isMobile ? "0.65rem" : "0.75rem",
                  padding: isMobile ? "3px 6px" : "6px 12px",
                  minWidth: isMobile ? "40px" : "60px",
                  height: isMobile ? "24px" : "32px",
                  "&:hover": {
                    backgroundColor: isProtectedUser
                      ? colors.grey[600]
                      : colors.redAccent[600],
                  },
                  "&:disabled": {
                    backgroundColor: colors.grey[600],
                    color: colors.grey[400],
                  },
                }}
              >
                {isMobile ? "Del" : "Delete"}
              </Button>
            </span>
          </Tooltip>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        padding: isMobile ? "8px" : "20px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title="TEAM" subtitle="Managing the Team Members" />

      <Box
        sx={{
          flex: 1,
          marginTop: isMobile ? "10px" : "30px",
          height: isMobile ? "calc(100vh - 160px)" : "calc(100vh - 200px)",
          width: "100%",
          "& .MuiDataGrid-root": {
            border: "none",
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            padding: isMobile ? "6px 2px" : "12px 8px",
            minHeight: isMobile ? "36px" : "52px",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            padding: isMobile ? "6px 2px" : "12px 8px",
            minHeight: isMobile ? "36px" : "52px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontSize: isMobile ? "0.75rem" : "0.875rem",
            fontWeight: 600,
            color: colors.grey[100],
          },
          "& .MuiDataGrid-cellContent": {
            fontSize: isMobile ? "0.75rem" : "0.875rem",
          },
          "& .MuiDataGrid-row": {
            "&:hover": {
              backgroundColor: colors.primary[300],
            },
          },
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within":
            {
              outline: "none",
            },
          // Custom sorting arrow styling
          "& .MuiDataGrid-sortIcon": {
            color: colors.greenAccent[300],
            fontSize: "1.1rem",
            marginLeft: "4px",
          },
          "& .MuiDataGrid-columnHeader--sorted .MuiDataGrid-sortIcon": {
            color: colors.greenAccent[400],
          },
          "& .MuiDataGrid-columnHeader--sortable:hover .MuiDataGrid-sortIcon": {
            color: colors.greenAccent[200],
          },
          // Ensure proper spacing for sort icons
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            width: "100%",
          },
          "& .MuiDataGrid-columnHeader--alignLeft .MuiDataGrid-columnHeaderTitleContainer":
            {
              justifyContent: "flex-start",
            },
          "& .MuiDataGrid-columnHeader--alignRight .MuiDataGrid-columnHeaderTitleContainer":
            {
              justifyContent: "flex-end",
            },
          // Mobile-specific adjustments
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            paddingRight: isMobile ? "2px" : "8px",
          },
        }}
      >
        <DataGrid
          rows={teamMembers}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          density={isMobile ? "compact" : "standard"}
          disableColumnMenu={isMobile}
          disableColumnFilter={isMobile}
          disableColumnSelector={isMobile}
          disableDensitySelector={isMobile}
          pageSizeOptions={isMobile ? [5, 10] : [5, 10, 25]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: isMobile ? 5 : 10 },
            },
            sorting: {
              sortModel: [{ field: "name", sort: "asc" }],
            },
          }}
          sx={{
            border: "none",
            "& .MuiDataGrid-main": {
              overflow: "hidden",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
