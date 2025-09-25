import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Box, Typography, Button, Grid, Card, Avatar, 
  Container, Chip, IconButton, useTheme, useMediaQuery
} from '@mui/material';
import {
  LocalHospital,
  People,
  MedicalServices,
  Star,
  LinkedIn,
  Twitter,
  GitHub,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  PlayArrow,
  Pause
} from '@mui/icons-material';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import logo from '../../../assets/logo.png';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Medical Officer, Medilife Hospital',
    text: 'Raksha360 transformed our staffing process. We found qualified doctors and nurses in record time! Highly recommended for any hospital.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    name: 'Mr. Rajesh Verma',
    role: 'Admin, CityCare Hospital',
    text: 'The equipment request feature is a game changer. Raksha360 is the future of medical resource management.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    name: 'Dr. Anjali Mehta',
    role: 'Surgeon, Sunrise Hospital',
    text: 'Our hospital was able to quickly fill urgent nurse positions. The platform is intuitive and secure.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5
  },
  {
    name: 'Dr. Sanjay Patel',
    role: 'Medical Director, Apollo Hospitals',
    text: 'The seamless process of requesting specialized staff has significantly improved our emergency response capabilities.',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5
  }
];

const features = [
  { icon: <People sx={{ fontSize: 40 }} />, title: 'Request Doctors', description: 'Find and onboard qualified doctors for your hospital in minutes.' },
  { icon: <LocalHospital sx={{ fontSize: 40 }} />, title: 'Request Nurses', description: 'Fill urgent nurse positions with ease and reliability.' },
  { icon: <MedicalServices sx={{ fontSize: 40 }} />, title: 'Request Equipment', description: 'Get access to medical equipment and supplies instantly.' },
  { icon: <LocalHospital sx={{ fontSize: 40 }} />, title: 'Staff Management', description: 'Efficiently manage your medical staff schedules and assignments.' }
];

const founders = [
  {
    name: 'Dr. Alex',
    role: 'Founder & CEO',
    bio: 'Medical professional with 10+ years of experience in healthcare management. Passionate about improving healthcare accessibility through technology.',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Smith Johnson',
    role: 'Co-Founder & CTO',
    bio: 'Seasoned software developer specializing in healthcare solutions. Expert in building scalable platforms that solve real-world problems.',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Typewriter text for headings
  const [heroText] = useTypewriter({
    words: ['Healthcare Staffing', 'Medical Resources', 'Hospital Needs'],
    loop: true,
    delaySpeed: 1000,
  });

  const [featureText] = useTypewriter({
    words: ['Why Choose Us?', 'Our Advantages', 'Key Benefits'],
    loop: true,
    delaySpeed: 2000,
  });

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setTestimonialIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
      <Box sx={{ 
        minHeight: '100vh', 
        overflow: 'hidden'
      }}>
        {/* Fixed Get Started Button */}
        <Box sx={{
          position: 'fixed',
          top: 24,
          right: 32,
          zIndex: 1200,
          display: { xs: 'none', sm: 'block' }
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ 
                borderRadius: 2, 
                fontWeight: 600, 
                px: 4,
                boxShadow: '0 4px 14px 0 rgba(25, 118, 210, 0.39)'
              }}
              onClick={() => navigate('/auth')}
            >
              Get Started
            </Button>
          </motion.div>
        </Box>
        {/* Navigation */}
        <Container>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            py: 3 
          }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Raksha360 Logo" style={{ height: 100, marginRight: 12,  }} />
                {/* <Typography variant="h4" color="primary" sx={{ fontWeight: 800 }}>
                  Raksha360
                </Typography> */}
              </Box>
            </motion.div>
            {/* Hide original button on desktop, show only on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ display: 'none' }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ 
                  borderRadius: 2, 
                  fontWeight: 600, 
                  px: 4,
                  boxShadow: '0 4px 14px 0 rgba(25, 118, 210, 0.39)'
                }}
                onClick={() => navigate('/auth')}
              >
                Get Started
              </Button>
            </motion.div>
          </Box>
        </Container>

      {/* Hero Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Chip 
                  label="Revolutionizing Healthcare Staffing" 
                  color="primary" 
                  variant="outlined"
                  sx={{ mb: 2, fontWeight: 600 }}
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <Typography variant="h2" color="primary" sx={{ fontWeight: 800, mb: 2 }}>
                  Your One-Stop Portal for
                </Typography>
                <Typography variant="h2" color="secondary" sx={{ fontWeight: 800, mb: 2, minHeight: '80px' }}>
                  {heroText}
                  <Cursor cursorStyle="|" />
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <Typography variant="h6" color="textSecondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                  Hospitals can instantly request doctors, nurses, equipment, and more. 
                  Join hundreds of healthcare providers already using Raksha360.
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ 
                    borderRadius: 2, 
                    fontWeight: 600, 
                    px: 4, 
                    py: 1.5, 
                    mr: 2,
                    boxShadow: '0 4px 14px 0 rgba(220, 0, 78, 0.39)'
                  }}
                  onClick={() => navigate('/auth')}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ 
                    borderRadius: 2, 
                    fontWeight: 600, 
                    px: 4, 
                    py: 1.5 
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
            
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" color="primary" align="center" sx={{ fontWeight: 700, mb: 2 }}>
              <span style={{ color: '#1976d2' }}>{featureText}</span>
              <Cursor cursorStyle="|" />
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
              Our platform offers comprehensive solutions for all your healthcare staffing needs
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ 
                    p: 4, 
                    boxShadow: '0 8px 24px rgba(149, 157, 165, 0.2)',
                    borderRadius: 3, 
                    textAlign: 'center',
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 28px rgba(149, 157, 165, 0.3)'
                    }
                  }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Founders Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" color="primary" align="center" sx={{ fontWeight: 700, mb: 2 }}>
              Meet Our Founders
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
              The visionary leaders behind Raksha360's mission to transform healthcare staffing
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} justifyContent="center">
            {founders.map((founder, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ 
                    p: 4, 
                    boxShadow: '0 8px 24px rgba(149, 157, 165, 0.2)',
                    borderRadius: 3, 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <Avatar 
                      src={founder.avatar} 
                      alt={founder.name}
                      sx={{ width: 120, height: 120, mb: 3 }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {founder.name}
                    </Typography>
                    <Chip 
                      label={founder.role} 
                      color="primary" 
                      variant="outlined"
                      sx={{ mb: 2, fontWeight: 600 }}
                    />
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                      {founder.bio}
                    </Typography>
                    <Box>
                      {founder.social.linkedin && (
                        <IconButton color="primary" href={founder.social.linkedin}>
                          <LinkedIn />
                        </IconButton>
                      )}
                      {founder.social.twitter && (
                        <IconButton color="primary" href={founder.social.twitter}>
                          <Twitter />
                        </IconButton>
                      )}
                      {founder.social.github && (
                        <IconButton color="primary" href={founder.social.github}>
                          <GitHub />
                        </IconButton>
                      )}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" color="primary" align="center" sx={{ fontWeight: 700, mb: 2 }}>
              What Our Clients Say
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
              Hear from healthcare providers who have transformed their staffing with Raksha360
            </Typography>
          </motion.div>
          
          <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto', mb: 4 }}>
            <Card sx={{ 
              p: 4, 
              boxShadow: '0 8px 24px rgba(149, 157, 165, 0.2)',
              borderRadius: 3, 
              textAlign: 'center',
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Avatar 
                src={testimonials[testimonialIndex].avatar} 
                alt={testimonials[testimonialIndex].name}
                sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} sx={{ color: '#ffb400', fontSize: 20 }} />
                ))}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {testimonials[testimonialIndex].name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {testimonials[testimonialIndex].role}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                "{testimonials[testimonialIndex].text}"
              </Typography>
            </Card>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
              <IconButton onClick={prevTestimonial} color="primary">
                <KeyboardArrowLeft />
              </IconButton>
              
              <Box sx={{ display: 'flex', mx: 2 }}>
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      bgcolor: index === testimonialIndex ? 'primary.main' : 'grey.400',
                      mx: 0.5,
                      cursor: 'pointer',
                      transition: 'background-color 0.3s'
                    }}
                  />
                ))}
              </Box>
              
              <IconButton onClick={nextTestimonial} color="primary">
                <KeyboardArrowRight />
              </IconButton>
              
              {/* <IconButton 
                onClick={() => setAutoPlay(!autoPlay)} 
                color="primary"
                sx={{ ml: 2 }}
              >
                {autoPlay ? <Pause /> : <PlayArrow />}
              </IconButton> */}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 2 }}>
              Ready to Transform Your Healthcare Staffing?
            </Typography>
            <Typography variant="h6" align="center" sx={{ mb: 4, opacity: 0.9 }}>
              Join hundreds of hospitals already using Raksha360
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ 
                  borderRadius: 2, 
                  fontWeight: 600, 
                  px: 5, 
                  py: 1.5,
                  boxShadow: '0 4px 14px 0 rgba(220, 0, 78, 0.4)'
                }}
                onClick={() => navigate('/auth')}
              >
                Get Started Now
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 3, bgcolor: 'primary.dark', color: 'white', textAlign: 'center' }}>
        <Container>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            &copy; {new Date().getFullYear()} Raksha360. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;