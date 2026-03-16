import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, AppBar, Typography, IconButton, Tooltip } from '@mui/material';
import { FaGithub, FaReact, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { SiVite, SiTypescript, SiMui, SiReactrouter } from 'react-icons/si';

export function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'primary.main',
        height: '10rem',
        marginTop: '5rem',
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            width: '30%',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            sx={{ color: 'white' }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/projects"
            sx={{ color: 'white' }}
          >
            Projects
          </Link>
          <Link
            component={RouterLink}
            to="/about"
            sx={{ color: 'white' }}
          >
            About
          </Link>
          <Link
            component={RouterLink}
            to="/technologies"
            sx={{ color: 'white' }}
          >
            Page stack
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '30%',
          }}
        >
          <Typography
            variant="h6"
            color="white"
            sx={{ textAlign: 'center' }}
          >
            <p>Final Project</p>
            <p>
              Project stack <FaArrowTurnDown size={12} />
            </p>
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Tooltip title="React Official Website">
              <IconButton
                sx={{ color: 'white' }}
                href="https://react.dev/"
                target="_blank"
              >
                <FaReact /> <SiVite />
              </IconButton>
            </Tooltip>
            <Tooltip title="TypeScript Official Website">
              <IconButton
                sx={{ color: 'white' }}
                href="https://www.typescriptlang.org/"
                target="_blank"
              >
                <SiTypescript />
              </IconButton>
            </Tooltip>
            <Tooltip title="Material UI Official Website">
              <IconButton
                sx={{ color: 'white' }}
                href="https://mui.com/"
                target="_blank"
              >
                <SiMui />
              </IconButton>
            </Tooltip>
            <Tooltip title="React Router Official Website">
              <IconButton
                sx={{ color: 'white' }}
                href="https://reactrouter.com/"
                target="_blank"
              >
                <SiReactrouter />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30%',
          }}
        >
          <Tooltip title="My GitHub Profile">
            <IconButton
              href="https://github.com/Nazhdache4ka"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <FaGithub />
            </IconButton>
          </Tooltip>
          <Tooltip title="My LinkedIn Profile">
            <IconButton
              href="https://www.linkedin.com/in/ilia-iurkov-a947053a3/"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <FaLinkedin />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email Address">
            <IconButton
              href="mailto:ilya.yourkov@gmail.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <FaEnvelope />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </AppBar>
  );
}
