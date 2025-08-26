import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
	const [mode, setMode] = useState('dark');
	const theme = createTheme({
		palette: {
			mode,
		},
		typography: {
			fontFamily: [
				'Inter',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
			].join(','),
			h1: { fontWeight: 600 },
			h2: { fontWeight: 600 },
			h3: { fontWeight: 600 },
			h4: { fontWeight: 600 },
			h5: { fontWeight: 600 },
			h6: { fontWeight: 600 },
		},
	});

	const toggleTheme = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ minHeight: '100vh', py: 0 }}>
				<Navbar
					toggleTheme={toggleTheme}
					mode={mode}
				/>
				<section id='home'></section>
				<Home />
				<section id='projects'>
					<Projects />
				</section>
				<section id='contact'>
					<Contact />
				</section>
				<Footer />
			</Box>
		</ThemeProvider>
	);
}
export default App;
