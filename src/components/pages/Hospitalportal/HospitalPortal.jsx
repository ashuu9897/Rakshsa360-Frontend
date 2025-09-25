import { AppBar, Toolbar, Typography, Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import React, { useState } from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

const drawerTabs = [
  { label: 'Doctors', icon: <LocalHospitalIcon />, key: 'doctors' },
  { label: 'Nurses', icon: <MedicalServicesIcon />, key: 'nurses' },
  { label: 'Ambulances', icon: <LocalShippingIcon />, key: 'ambulances' }
]

const HospitalPortal = () => {
  const [selectedTab, setSelectedTab] = useState('doctors')

  // Demo data for content
  const doctors = [
    { name: 'Dr. Priya Sharma', specialization: 'Cardiologist', status: 'Available', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Dr. Sanjay Patel', specialization: 'Neurologist', status: 'Available', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' }
  ]
  const nurses = [
    { name: 'Nurse Anjali', specialization: 'ICU', status: 'Available', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Nurse Raj', specialization: 'ER', status: 'Available', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }
  ]
  const ambulances = [
    { name: 'Ambulance #1', specialization: 'ALS', status: 'Available', avatar: 'https://cdn-icons-png.flaticon.com/512/2967/2967350.png' },
    { name: 'Ambulance #2', specialization: 'BLS', status: 'Available', avatar: 'https://cdn-icons-png.flaticon.com/512/2967/2967350.png' }
  ]

  const getTabData = () => {
    if (selectedTab === 'doctors') return doctors
    if (selectedTab === 'nurses') return nurses
    if (selectedTab === 'ambulances') return ambulances
    return []
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{ bgcolor: 'background.paper', zIndex: 1301 }}
      >
        <Box sx={{ width: '100%', maxWidth: '1600px', mx: 'auto' }}>
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: 72 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 1, fontFamily: 'Montserrat, sans-serif' }}>
              Hospital Portal
            </Typography>
            <Avatar sx={{ bgcolor: 'primary.main', cursor: "pointer" }}>H</Avatar>
          </Toolbar>
        </Box>
      </AppBar>
      {/* Drawer below AppBar */}
      <Box sx={{ display: 'flex', pt: { xs: '56px', sm: '72px' } }}>
        <Drawer
          anchor="left"
          open
          variant="permanent"
          PaperProps={{
            sx: {
              top: { xs: 56, sm: 72 },
              height: `calc(100vh - ${window.innerWidth < 600 ? 56 : 72}px)`,
              bgcolor: 'primary.50',
              borderRight: '1px solid',
              borderColor: 'primary.light',
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              pt: 0,
              overflow: 'visible'
            }
          }}
        >
          <Box sx={{
            width: 220,
            py: 3,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'visible'
          }}>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                letterSpacing: 1,
                textAlign: 'center',
                mb: 3,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: { xs: 20, md: 24 }
              }}
            >
              Navigation
            </Typography>
            <Divider sx={{ mb: 2, width: '80%' }} />
            <List sx={{ flex: 1, width: '100%' }}>
              {drawerTabs.map(tab => (
                <ListItem
                  button
                  key={tab.key}
                  selected={selectedTab === tab.key}
                  onClick={() => setSelectedTab(tab.key)}
                  sx={{
                    mb: 1.5,
                    borderRadius: 2,
                    color: selectedTab === tab.key ? 'primary.main' : 'grey.700',
                    bgcolor: selectedTab === tab.key ? 'white' : 'primary.50',
                    '&:hover': { bgcolor: 'primary.100' },
                    transition: 'all 0.2s',
                    mx: 1,
                    cursor: 'pointer',
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: 600,
                    boxShadow: selectedTab === tab.key ? 2 : 0
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                    {tab.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={tab.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: { xs: 16, md: 18 },
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: 2, width: '80%' }} />
            <Typography variant="caption" sx={{ color: 'grey.600', mt: 2, fontFamily: 'Montserrat, sans-serif' }}>
              &copy; {new Date().getFullYear()} Raksha360
            </Typography>
          </Box>
        </Drawer>
        {/* Main content area */}
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 2, md: 4 },
            bgcolor: 'grey.50',
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box sx={{
            width: '100%',
            maxWidth: 1100,
            mx: 'auto',
            mt: 2,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3
          }}>
            {getTabData().map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  boxShadow: '0 4px 16px rgba(25,118,210,0.07)',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: 220,
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(25,118,210,0.10)',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <Avatar src={item.avatar} alt={item.name} sx={{ width: 72, height: 72, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontFamily: 'Montserrat, sans-serif' }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Montserrat, sans-serif' }}>
                  {item.specialization}
                </Typography>
                <Box
                  sx={{
                    bgcolor: 'success.50',
                    color: 'success.main',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: 14,
                    mb: 2,
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {item.status}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HospitalPortal
