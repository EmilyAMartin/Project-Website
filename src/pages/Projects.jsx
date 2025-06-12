import ProjectCard from '../components/ProjectCard.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Projects = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<Typography
				variant='h5'
				align='center'
				gutterBottom
			>
				Projects
			</Typography>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				<ProjectCard
					title='Spirit Realm'
					subtitle='HTML, CSS, JavaScript'
					description='Spirit Realm is an endless side scroller game based on folklore legends. The first level of the game is based on a Will-O-Wisp spirit. The legend talks about how travelers encounter an atmospheric ghost light when traveling at night, especially near bogs, swamps or marshes. In the first level the player will help guide a Will-O-Wisp spirit through a bog while avoiding other bog creatures. Once the player reaches a score of 10,0000 they have successfully completed the first level!'
					image='/spirit.jpg'
					screenshots={['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg']}
				/>
				<ProjectCard
					title='Color Rush'
					subtitle='HTML, CSS, JavaScript'
					description='Color Rush is a game I developed to refine my skills in working with grids and arrays. The objective is to identify all matching color pairs within a 30-second time limit. To increase the challenge, I selected a color palette with subtle variations, making it more difficult to distinguish between similar hues. The 30-second timer encourages quick decision-making and adds an element of urgency. Best of luck!'
					image='/colorrush.jpg'
					screenshots={['/5.jpg', '/6.jpg', '/7.jpg']}
				/>
				<ProjectCard
					title='Portfolio'
					subtitle='React, Material-UI,API'
					description='My Personal Portfolio Website'
					image='/portfolio.jpg'
					screenshots={['/8.jpg', '/9.jpg', '/10.jpg', '/11.jpg']}
				/>
			</Box>
		</Box>
	);
};

export default Projects;
