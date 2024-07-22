import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../styles/theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Header } from "../../components/Header";

export const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", headerClassName: 'dataGrid-header'},
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
            headerClassName: 'dataGrid-header'
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
            headerClassName: 'dataGrid-header'
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            headerClassName: 'dataGrid-header'
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            headerClassName: 'dataGrid-header'
        },
        {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,
            headerClassName: 'dataGrid-header',
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        sx={{
                            m: `0 auto`,
                            p: "5px",
                            width: "60%",
                            minWidth: "85px",
                            display: "flex",
                            justifyContent: "center",
                            transform: "translateY(calc(50% - 5px))",
                            backgroundColor:
                                access === "admin"
                                    ? colors.greenAccent[600]
                                    : access === "manager"
                                    ? colors.greenAccent[700]
                                    : colors.greenAccent[700],
                            borderRadius: "4px",
                        }}
                    >
                        {access === "admin" && (
                            <AdminPanelSettingsOutlinedIcon />
                        )}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography
                            sx={{
                                ml: "5px",
                                color: colors.grey[100],
                            }}
                        >
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m={"20px"}>
            <Header title={"TEAM"} subtitle={"Managing the team members"} />
            <Box
                sx={{
                    m: "40px 0 0 0",
                    height: "75vh",
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    '& .dataGrid-header':{
                        backgroundColor: colors.blueAccent[700],
                        border: "none",
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-row": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                        // border: 'none'
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
                }}
            >
                <DataGrid rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    );
};
