// routes.js
// Centralized route definitions with components for the frontend

import Auth from "./components/pages/auth/Auth";
import Home from "./components/pages/Home/Home";
import HospitalPortal from "./components/pages/Hospitalportal/HospitalPortal";


export const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/hospital-portal', component: HospitalPortal },

  // Add more routes as needed
];
