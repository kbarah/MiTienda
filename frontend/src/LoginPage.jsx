import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5500/login', {
        username,
        password,
      });

      if (res.data.success) {
        onLogin(username);
        navigate('/home');
      }
    } catch (err) {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="backgound.paper"
      px={2}
    >
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: isMobile ? '100%' : 420,
          p: isMobile ? 3 : 5,
          bgcolor: 'background.default',
        }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <LockIcon color="primary" fontSize="large" />
        </Box>
        <Typography variant={isMobile ? 'h5' : 'h4'} align="center" gutterBottom>
          Iniciar sesión
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button variant="contained" size="large" fullWidth onClick={handleLogin}>
            Entrar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}


