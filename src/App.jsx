import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Navbar />
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
