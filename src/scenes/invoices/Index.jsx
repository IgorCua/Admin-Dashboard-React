import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../styles/theme";
import { mockDataInvoices } from "../../data/mockData";
import { Header } from "../../components/Header";

export const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            flex: 0.5, 
            headerClassName: 'dataGrid-header'
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell',
            headerClassName: 'dataGrid-header'
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
            headerClassName: 'dataGrid-header'
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            headerClassName: 'dataGrid-header'
        },
        {
            field: 'cost',
            headerName: 'Cost',
            flex: 1,
            headerClassName: 'dataGrid-header',
            renderCell: (params) => {
                return <Typography color={'green'} sx={{
                    transform: 'translateY(calc(50% + 5px))',
                    color: colors.greenAccent[500]
                }}>
                    {params.row.cost}
                </Typography>
            }
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
            headerClassName: 'dataGrid-header'
        }
    ];

    return (
        <Box m={"20px"}>
            <Header title={"INVOICES"} subtitle={"List of invoice balances"} />
            <Box
                sx={{
                    m: '40px 0 0 0',
                    height: '75vh',
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .dataGrid-header':{
                        backgroundColor: colors.blueAccent[700],
                        border: 'none',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-row': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: 'none',
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[300],
                        // border: 'none'
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: colors.blueAccent[700],
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    // '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                    //     color: `${colors.grey[100]} !important`
                    // },
                    // '& .MuiCheckbox-root': {
                    //     color: `${colors.greenAccent[200]} !important`
                    // }
                    '& .MuiDataGrid-columnHeaderDraggableContainer': {
                        backgroundColor: colors.blueAccent[700],
                    }
                }}
            >
                <DataGrid 
                    checkboxSelection
                    rows={mockDataInvoices} 
                    columns={columns} 
                />
            </Box>
        </Box>
    );
};
