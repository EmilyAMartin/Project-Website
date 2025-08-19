import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';

const Navbar = ({ toggleTheme, mode }) => {
	const theme = useTheme();
	const handleScroll = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				color='transparent'
				elevation={0}
				sx={{
					backgroundColor: 'transparent',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Toolbar>
					<Button
						onClick={() => handleScroll('home')}
						sx={{
							textTransform: 'none',
							fontSize: '1.2rem',
							fontWeight: 700,
							letterSpacing: 1,
							background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
							transition: 'transform 0.2s',
							'&:hover': {
								transform: 'scale(1.07)',
								background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
							},
						}}
					>
						Home
					</Button>
					<Button
						onClick={() => handleScroll('projects')}
						sx={{
							textTransform: 'none',
							fontSize: '1.2rem',
							fontWeight: 700,
							letterSpacing: 1,
							background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
							transition: 'transform 0.2s',
							'&:hover': {
								transform: 'scale(1.07)',
								background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
							},
						}}
					>
						Projects
					</Button>
					<Button
						onClick={() => handleScroll('contact')}
						sx={{
							textTransform: 'none',
							fontSize: '1.2rem',
							fontWeight: 700,
							letterSpacing: 1,
							background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
							transition: 'transform 0.2s',
							'&:hover': {
								transform: 'scale(1.07)',
								background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
							},
						}}
					>
						Contact
					</Button>
					<IconButton
						sx={{ ml: 2 }}
						onClick={toggleTheme}
						color='inherit'
						aria-label='toggle dark mode'
					>
						{mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
