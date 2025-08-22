import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
	return (
		<Box
			sx={{
				borderRadius: 3,
				minHeight: '60vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: { xs: 'center', md: 'left' },
				flexDirection: { xs: 'column', md: 'row' },
				px: 2,
				gap: 6,
				py: 4,
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
					src='/profileimg.jpg'
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
					sx={{
						fontSize: { xs: '2rem', md: '3rem' },
					}}
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
				<Box sx={{ mt: 4 }}>
					<Typography
						variant='h4'
						gutterBottom
						sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
					>
						Skills
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: 2,
							justifyContent: { xs: 'center', md: 'flex-start' },
						}}
					>
						{[
							'HTML',
							'CSS',
							'JavaScript',
							'React',
							'Git',
							'Github',
							'Node.Js',
							'Express.Js',
							'Rest API',
							'MySQL',
						].map((skill) => (
							<Box
								key={skill}
								sx={{
									px: 1.7,
									py: 0.7,
									borderRadius: '18px',
									background: 'linear-gradient(90deg, #e0e0e0 0%, #bdbdbd 100%)',
									color: '#222',
									fontWeight: 500,
									fontSize: { xs: '0.95rem', md: '1rem' },
									boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
									mb: 1,
								}}
							>
								{skill}
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
export default Home;
