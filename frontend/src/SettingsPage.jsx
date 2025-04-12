import React from 'react';
import { Typography, Box } from '@mui/material';

export default function SettingsPage() {
  return (
    <Box p={4}>
      <Typography variant="h4">⚙️ Configuración</Typography>
      <Typography variant="body1" mt={2}>
        Aquí puedes ajustar tus preferencias.
      </Typography>
    </Box>
  );
}
