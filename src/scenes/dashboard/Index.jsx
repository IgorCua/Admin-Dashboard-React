import { Box } from "@mui/material"
import { Header } from "../../components/Header";

export const Dashboard = () => {
    return <Box m={'20px'}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Header title={'DASHBOARD'} subtitle={'welcome to your dashboard'}/>
        </Box>
    </Box>
}