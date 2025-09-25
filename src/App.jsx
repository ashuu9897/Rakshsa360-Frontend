import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';


function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component: Component }, idx) => (
          <Route key={idx} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App
