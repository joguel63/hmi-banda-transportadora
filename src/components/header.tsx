import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HMI - Banda Transportadora - Jose Miguel Muñoz Velasco
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
