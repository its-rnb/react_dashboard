import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../themes";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {

    // to use Color Mode in materialUI
    // get color from useTheme, pass it in tokens
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // allow to toggle different staes of color mode
    const ColorMode = useContext(ColorModeContext);

    //Box is like div in materialUI & css can be written directly in <>
    return (<Box display={"flex"} justifyContent={"space-between"} p={2} height={"fit-content"} width="99%">

        {/* Search bar */}
        {/* direct css only applies to <Box>, for others use sx={{}} */}
        <Box display="flex" backgroundColor={colors.primary[100]} borderRadius="3px">
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }} >
                <SearchIcon />
            </IconButton>
        </Box>

        {/* Icon button */}
        <Box display="flex">

            {/* Provide toggle functionality */}
            <IconButton onClick={ColorMode.toggleColorMode}>
                {/* check if color mode is dark */}
                {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon />
            </IconButton>
        </Box>

    </Box>)
}

export default Topbar;