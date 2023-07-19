import { useContext } from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

// Icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*Search Bar*/}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius={"3px"}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton type="button" onClick={toggleColorMode}>
          <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
