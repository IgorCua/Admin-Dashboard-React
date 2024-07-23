import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../styles/theme";
import { mockDataContacts } from "../../data/mockData";
import { Header } from "../../components/Header";

export const Contacts = () => {
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
            field: 'registrarId', 
            headerName: 'Registered ID', 
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
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
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
            field: 'address',
            headerName: 'Address',
            flex: 1,
            headerClassName: 'dataGrid-header'
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1,
            headerClassName: 'dataGrid-header'
        },
        {
            field: 'zipCode',
            headerName: 'ZIP Code',
            flex: 1,
            headerClassName: 'dataGrid-header'
        }
    ];

    return (
        <Box m={"20px"}>
            <Header title={"CONTACTS"} subtitle={"List contacts for future reference"} />
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
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${colors.grey[100]} !important`
                    }
                }}
            >
                <DataGrid rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar }}/>
            </Box>
        </Box>
    );
};
