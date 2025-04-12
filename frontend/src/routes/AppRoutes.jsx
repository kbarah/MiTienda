import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../LoginPage';
import WelcomePage from '../WelcomePage';
import SettingsPage from '../SettingsPage';

export default function AppRoutes() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onLogin={setUser} />}
      />
      <Route
        path="/home"
        element={
          user ? (
            <WelcomePage username={user} onLogout={() => setUser(null)} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/settings"
        element={
          user ? <SettingsPage /> : <Navigate to="/login" />
        }
      />
      <Route
        path="*"
        element={<Navigate to="/login" />}
      />
    </Routes>
  );
}
