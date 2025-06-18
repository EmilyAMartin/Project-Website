import ProjectCard from '../components/ProjectCard.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import projectsData from './projectsData.js';

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
				{projectsData.map((project, idx) => (
					<ProjectCard
						key={idx}
						{...project}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Projects;
