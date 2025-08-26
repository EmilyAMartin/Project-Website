import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const skills = [
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
];

const Home = () => {
	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '70vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				py: { xs: 4, md: 8 },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, row on desktop
					alignItems: 'center',
					justifyContent: 'center',
					gap: { xs: 4, md: 8 },
					width: '100%',
					maxWidth: 1100,
					mx: 'auto',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						mb: { xs: 2, md: 0 }, // Add margin below image on mobile
					}}
				>
					<img
						src='/profileimg.jpg'
						alt='Emily Martin'
						style={{
							width: 'min(70vw, 220px)', // Smaller on mobile
							height: 'min(70vw, 220px)',
							maxWidth: 320,
							maxHeight: 320,
							objectFit: 'cover',
							borderRadius: '50%',
							boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
						}}
					/>
				</Box>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					style={{ flex: 1, width: '100%' }}
				>
					<Box
						sx={{
							maxWidth: 600,
							mx: { xs: 'auto', md: 0 },
							textAlign: { xs: 'center', md: 'left' },
						}}
					>
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
							sx={{ mb: 4 }}
						>
							Hi, I'm Emily! I'm a visual artist and software developer. With a
							lifelong passion for art and film, I love problem-solving and creating
							new things. Recently, I’ve developed an interest in coding and aspire to
							become a full-stack developer in the near future. Follow me on GitHub for
							my most recent projects.
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
								{skills.map((skill) => (
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
											cursor: 'pointer',
											transition: 'transform 0.2s, box-shadow 0.2s',
											'&:hover': {
												transform: 'scale(1.12)',
												boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
												background: 'linear-gradient(90deg, #f5f5f5 0%, #bdbdbd 100%)',
											},
										}}
									>
										{skill}
									</Box>
								))}
							</Box>
						</Box>
					</Box>
				</motion.div>
			</Box>
		</Box>
	);
};

export default Home;
