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
					description='Portfolio is a web platform I developed to support artists and creators in cataloging their work while also discovering inspiration from others. It features an Artwork Page for users to upload, organize, and manage their own pieces; a Gallery Page that integrates with the Art Institute of Chicago’s open API, allowing users to browse and save works from their collection; and an Account Page where users can create personal profiles and manage their accounts. Visitors can simply explore the gallery for inspiration or sign up to upload their own projects, curate collections, and build a personalized catalog of favorite works. This project was inspired by my own need for a space to archive my art—one that would allow creators like myself to easily document their work, find inspiration, and brainstorm ideas within a unified and user-friendly platform.'
					image='/portfolio.jpg'
					screenshots={['/8.jpg', '/9.jpg', '/10.jpg', '/11.jpg']}
				/>
			</Box>
		</Box>
	);
};

export default Projects;
