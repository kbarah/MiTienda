import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Páginas
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import SettingsPage from './pages/SettingsPage';

export default function App({ toggleTheme, mode }) {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirige la raíz a login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage onLogin={setUser} />} />

        {/* Página principal (Welcome) */}
        <Route
          path="/home"
          element={
            user ? (
              <WelcomePage
                username={user}
                onLogout={() => setUser(null)}
                toggleTheme={toggleTheme}
                mode={mode}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Configuración */}
        <Route
          path="/settings"
          element={
            user ? (
              <SettingsPage
                username={user}
                toggleTheme={toggleTheme}
                mode={mode}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

