import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const profileImg = '/profileimg.jpg';

const Home = () => {
	return (
		<Box
			sx={{
				minHeight: '60vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: { xs: 'center', md: 'left' },
				flexDirection: { xs: 'column', md: 'row' },
				px: 2,
			}}
		>
			<Box
				sx={{
					mr: { md: 4 },
					mb: { xs: 3, md: 0 },
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<img
					src={profileImg}
					alt='Emily Martin'
					style={{
						width: 'min(80vw, 350px)',
						height: 'min(80vw, 350px)',
						objectFit: 'cover',
						borderRadius: '50%',
						boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
					}}
				/>
			</Box>
			<Box>
				<Typography
					variant='h2'
					gutterBottom
					sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
				>
					About Me
				</Typography>
				<Typography
					variant='h5'
					color='text.secondary'
					gutterBottom
					sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}
				>
					Software Developer & Visual Artist
				</Typography>
				<Typography
					variant='body1'
					sx={{ maxWidth: 600, mb: 4, mx: { xs: 'auto', md: 0 } }}
				>
					Welcome! I’m Emily, Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim,
					eget facilisis enim urna at sapien. Pellentesque habitant morbi tristique
					senectus et netus et malesuada fames ac turpis egestas. Etiam euismod,
					justo at facilisis cursus, urna erat dictum erat, ac dictum enim urna nec
					urna. Suspendisse potenti. Mauris euismod, sapien eu facilisis cursus, urna
					erat dictum erat, ac dictum enim urna nec urna.
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;
