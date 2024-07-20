import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../styles/theme";
import { 
    LightModeOutlinedIcon,
    DarkModeOutlinedIcon,
    NotificationsOutlinedIcon,
    SettingsOutlinedIcon,
    PersonOutlinedIcon,
    SearchIcon,
} from "@mui/icons-material";

export const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return <Box display='flex' justifyContent='space-between' p={2}>
        <IconButton sx={{display: 'flex'}}></IconButton>
    </Box>
}