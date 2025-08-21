import ProjectCard from '../components/ProjectCard.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import projectsData from './projectsData.js';
import { useTheme, lighten } from '@mui/material/styles';

const Projects = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				background:
					theme.palette.mode === 'dark'
						? `linear-gradient(135deg, ${lighten(
								theme.palette.primary.main,
								0.85
						  )}, ${lighten(theme.palette.background.default, 0.25)})`
						: '#fff',
				borderRadius: 3,
				minHeight: '60vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				py: 4,
				px: 2,
			}}
		>
			<Typography
				variant='h4'
				align='center'
				gutterBottom
				sx={{
					fontWeight: 700,
					letterSpacing: 1,

					mb: 3,
				}}
			>
				Projects
			</Typography>
			<Box
				sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}
			>
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
