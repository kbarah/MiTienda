import React, { useState } from 'react';
import axios from 'axios';

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
    <div style={{ padding: 50 }}>
      {!loggedIn ? (
        <>
          <h2>Iniciar sesión</h2>
          <input
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br /><br />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <button onClick={handleLogin}>Entrar</button>
        </>
      ) : (
        <h2>¡Bienvenido, {username}!</h2>
      )}
    </div>
  );
}

export default App;
