import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = () => {
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
						color='inherit'
						onClick={() => handleScroll('home')}
						sx={{ textTransform: 'none', fontSize: '1.2rem' }}
					>
						Home
					</Button>
					<Button
						color='inherit'
						onClick={() => handleScroll('projects')}
						sx={{ textTransform: 'none', fontSize: '1.2rem' }}
					>
						Projects
					</Button>
					<Button
						color='inherit'
						onClick={() => handleScroll('contact')}
						sx={{ textTransform: 'none', fontSize: '1.2rem' }}
					>
						Contact
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
