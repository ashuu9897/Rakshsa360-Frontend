import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../../assets/Medicine.json';
import logo from '../../../assets/logo.png';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import {
  LocalHospital as HospitalIcon,
  MedicalServices as DoctorIcon,
  LocalShipping as AmbulanceIcon,
  Groups as NursesIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';
import axios from 'axios';

// Create a medical-themed color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

const API_BASE_URL = 'http://localhost:5000/api'; // Change if your backend runs on a different port

const signup = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Signup failed' };
  }
};

// Login API integration
const login = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');
    try {
      if (isLogin) {
        // Login
        const result = await login({
          email: data.email,
          password: data.password,
          role: data.role || 'hospital',
        });
        setSuccessMsg(result.message || 'Login successful');
        // Store token in localStorage
        if (result.token) {
          localStorage.setItem('token', result.token);
        }
        if (result.user) {
          localStorage.setItem('user', JSON.stringify(result.user));
        }
        // Redirect to /hospital-portal with login response as state
        navigate('/hospital-portal', { state: result });
      } else {
        // Signup
        const signupData = {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address,
          role: data.role || 'hospital',
        };
        const result = await signup(signupData);
        setSuccessMsg(result.message || 'Signup successful');
        // Optionally switch to login view
        setIsLogin(true);
      }
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Features icons and names for row display
  const featureIcons = [
    { icon: <DoctorIcon sx={{ color: 'primary.main', fontSize: 48 }} />, name: 'Doctors' },
    { icon: <AmbulanceIcon sx={{ color: 'primary.main', fontSize: 48 }} />, name: 'Ambulances' },
    { icon: <NursesIcon sx={{ color: 'primary.main', fontSize: 48 }} />, name: 'Nurses' },
    { icon: <HospitalIcon sx={{ color: 'primary.main', fontSize: 48 }} />, name: 'Hospitals' },
  ];

  // Lottie animation options
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
          px: 2
        }}
      >
        <Card 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            maxWidth: 900,
            overflow: 'hidden',
            boxShadow: 3,
            borderRadius: 2
          }}
        >
          {/* Left side with Lottie and feature icons row */}
          <Box 
            sx={{
              flex: 1,
              backgroundColor: 'white',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 400
            }}
          >
            {/* Lottie Animation */}
            <Box sx={{ width: 220, mx: 'auto', mb: 3 }}>
              <Lottie options={lottieOptions} height={180} width={220} />
            </Box>
            {/* Main heading and subtitle on left */}
            <Typography variant="h4" gutterBottom color="primary" align="center" sx={{ fontWeight: 700, letterSpacing: 2 }}>
              RAKSHA360
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center" sx={{ mb: 3, fontWeight: 400 }}>
              Your one-step solution for healthcare staffing needs
            </Typography>
            {/* Feature icons in a row */}
            <Card sx={{ width: '100%', p: 2, boxShadow: 2, borderRadius: 2, background: '#f7fbff', mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 1 }}>
                {featureIcons.map((feature, idx) => (
                  <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {feature.icon}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                {featureIcons.map((feature, idx) => (
                  <Typography key={idx} variant="body2" sx={{ textAlign: 'center', fontWeight: 500 }}>
                    {feature.name}
                  </Typography>
                ))}
              </Box>
            </Card>
          </Box>
          
          {/* Right side with login/signup form */}
          <Box 
            sx={{
              flex: 1,
              p: 4,
              backgroundColor: 'grey.50',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Company Logo on right side */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <img src={logo} alt="Company Logo" style={{ height: 120, marginBottom: 8 }} />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
              {!isLogin && (
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Hospital name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Hospital Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ''}
                    />
                  )}
                />
              )}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ 
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ''}
                  />
                )}
              />
              {!isLogin && (
                <>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Phone number is required' }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                        error={!!errors.phone}
                        helperText={errors.phone ? errors.phone.message : ''}
                      />
                    )}
                  />
                  <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Address (Optional)"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                      />
                    )}
                  />
                </>
              )}
              <Controller
                name="role"
                control={control}
                defaultValue="hospital"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Role"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    value="hospital"
                    disabled
                    helperText="Currently only hospital accounts are supported"
                  />
                )}
              />
              {isLogin && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" size="small" />}
                    label="Remember me"
                  />
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Box>
              )}
              {errorMsg && (
                <Typography color="error" sx={{ mt: 1, mb: 1 }}>
                  {errorMsg}
                </Typography>
              )}
              {successMsg && (
                <Typography color="primary" sx={{ mt: 1, mb: 1 }}>
                  {successMsg}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2, mb: 1.5, py: 1 }}
                disabled={loading}
              >
                {loading ? (isLogin ? 'Signing In...' : 'Signing Up...') : (isLogin ? 'Sign In' : 'Sign Up')}
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link 
                    href="#" 
                    variant="body2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLogin(!isLogin);
                    }}
                  >
                    {isLogin 
                      ? "Don't have an account? Sign Up" 
                      : "Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default Auth;