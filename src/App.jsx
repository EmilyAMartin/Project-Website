import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
	return (
		<>
			<Navbar />
			<section id='home'></section>
			<Home />
			<section id='projects'>
				<Projects />
			</section>
			<section id='contact'>
				<Contact />
			</section>
		</>
	);
}

export default App;
