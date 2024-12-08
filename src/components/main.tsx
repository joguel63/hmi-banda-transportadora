import { Box, Grid } from "@mui/material";
import React from "react";
import { useProcessLogic } from "../hooks/usePlcdata";
import ControlPanel from "./controlPalnel";
import StatusCard from "./statusCard";

const Main: React.FC = () => {
  const {
    detenerProceso,
    iniciarProceso,
    motorActivo,
    sensorPresencia,
    contador,
    tipoPieza,
    reiniciarContador,
  } = useProcessLogic();

  const item = tipoPieza === "A" ? "Item A" : "Item B";
  return (
    <Box sx={{ padding: 3, maxWidth: 1024, mx: "auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ControlPanel
            onStart={iniciarProceso}
            onStop={detenerProceso}
            onReset={reiniciarContador}
          />
        </Grid>
        <Grid item xs={6}>
          <StatusCard
            title="Estado del Motor"
            value={motorActivo ? "Activo" : "Detenido"}
            color="#4caf50"
          />
        </Grid>
        <Grid item xs={6}>
          <StatusCard title="Sensor de Presencia" value={sensorPresencia ? 1 : 0} color="#ff9800" />
        </Grid>

        <Grid item xs={4}>
          <StatusCard title="Tipo de item detectado" value={item} color="info.light" />
        </Grid>
        <Grid item xs={4}>
          <StatusCard title="Cantidad de items A" value={contador.itemsA} color="info.main" />
        </Grid>
        <Grid item xs={4}>
          <StatusCard title="Cantidad de items B" value={contador.itemsB} color="primary.light" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
