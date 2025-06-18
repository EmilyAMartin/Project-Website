import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
	const [mode, setMode] = useState('dark');
	const theme = createTheme({
		palette: {
			mode,
		},
	});

	const toggleTheme = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
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
		</ThemeProvider>
	);
}

export default App;
