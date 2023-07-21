import { useState } from "react";
import {
  Menu,
  menuClasses,
  MenuItem,
  Sidebar as BaseSidebar,
  SubMenu,
} from "react-pro-sidebar";

import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProfilePicture from "../../assets/profile.jpeg";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const backgroundColor = colors.primary[700];
  const hoverBackgroundColor = colors.primary[500];
  const textColor = colors.grey[100];

  const [collapsed, setCollapsed] = useState(false);

  return (
    <BaseSidebar
      backgroundColor={backgroundColor}
      breakPoint="md"
      rootStyles={{
        height: "100%",
      }}
      collapsed={collapsed}
    >
      <Stack
        direction="row"
        justifyContent={collapsed ? "center" : "space-between"}
        alignItems="center"
        p={1}
      >
        <Typography variant="h3" fontWeight="lighter" hidden={collapsed}>
          Dashboard
        </Typography>
        <IconButton onClick={() => setCollapsed(!collapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
      </Stack>
      <Stack
        mt={2}
        direction="column"
        alignItems="center"
        textAlign="center"
        sx={{ display: collapsed ? "none" : "flex" }}
      >
        <img
          height="100px"
          width="100px"
          src={ProfilePicture}
          alt="Profile picture"
          style={{ borderRadius: "50%" }}
        />
        <Typography variant="h5">Steve Lukis</Typography>
        <Typography>Sport Director</Typography>
      </Stack>
      <Box mt={2}>
        <Menu
          rootStyles={{
            ["& > ." + menuClasses.button]: {
              backgroundColor: backgroundColor,
              color: textColor,
            },
          }}
          menuItemStyles={{
            button: () => {
              return {
                backgroundColor,
                color: textColor,
                "&:hover": {
                  backgroundColor: hoverBackgroundColor,
                },
              };
            },
          }}
        >
          <SubMenu label="Data" defaultOpen={true}>
            <Link to="/team">
              <MenuItem>Manage Team</MenuItem>
            </Link>
            <Link to="/contacts">
              <MenuItem>Contacts Information</MenuItem>
            </Link>
            <Link to="/invoices">
              <MenuItem>Invoices Balances</MenuItem>
            </Link>
          </SubMenu>
        </Menu>
      </Box>
    </BaseSidebar>
  );
};

export default Sidebar;
