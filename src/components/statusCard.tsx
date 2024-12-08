import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface StatusCardProps {
  title: string;
  value: string | number;
  color?: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, value, color = "primary" }) => {
  return (
    <Card sx={{ margin: 1, backgroundColor: color }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
