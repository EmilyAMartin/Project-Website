import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
	return (
		<Box
			sx={{
				minHeight: '60vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<Typography
				variant='h2'
				gutterBottom
			>
				Emily Martin
			</Typography>
			<Typography
				variant='h5'
				color='text.secondary'
				gutterBottom
			>
				Software Developer & Visual Artist
			</Typography>
			<Typography
				variant='body1'
				sx={{ maxWidth: 600, mb: 4 }}
			>
				Welcome! I’m Emily, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget
				facilisis enim urna at sapien. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Etiam euismod, justo
				at facilisis cursus, urna erat dictum erat, ac dictum enim urna nec urna.
				Suspendisse potenti. Mauris euismod, sapien eu facilisis cursus, urna erat
				dictum erat, ac dictum enim urna nec urna.
			</Typography>
		</Box>
	);
};

export default Home;
