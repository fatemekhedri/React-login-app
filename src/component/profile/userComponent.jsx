import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Avatar, Typography, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Divider,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  List,
} from "@mui/material";
const UserComponent = memo((user) => {
  const { first_name, last_name, email, avatar } = user;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid container direction="column" align="center" p={3} spacing={1}>
        <Grid item xs>
          <Avatar sx={{ width: 100, height: 100 }} src={avatar} />
        </Grid>
        <Grid item xs container alignItems="center" direction="column">
          <Typography display="flex">{email}</Typography>

          <Typography display="flex">
            {first_name} {last_name}
          </Typography>
        </Grid>
      </Grid>

      <Divider />
      <List>
        <ListItem
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
});
export default UserComponent;
