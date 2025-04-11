import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from '@mui/material';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5500/login', {
        username,
        password,
      });

      if (res.data.success) {
        setLoggedIn(true);
      }
    } catch (err) {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 10 }}>
        {!loggedIn ? (
          <>
            <Typography variant="h4" align="center" gutterBottom>
              Iniciar sesión
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Usuario"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleLogin}>
                Entrar
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="h4" align="center">
            ¡Bienvenido, {username}!
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default App;

