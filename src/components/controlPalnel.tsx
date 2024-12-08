import React from "react";
import { Button, Box } from "@mui/material";

interface ControlPanelProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onStart, onStop, onReset }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 2 }}>
      <Button variant="contained" color="success" onClick={onStart}>
        Iniciar Proceso
      </Button>
      <Button variant="contained" color="error" onClick={onStop}>
        Detener Proceso
      </Button>
      <Button variant="contained" color="info" onClick={onReset}>
        Reiniciar Contadores
      </Button>
    </Box>
  );
};

export default ControlPanel;
