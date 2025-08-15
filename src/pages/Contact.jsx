import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme, lighten } from '@mui/material/styles';

const Contact = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				backgroundColor: lighten(theme.palette.background.default, 0.05),
				minHeight: '60vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				py: 4,
				px: { xs: 1, sm: 2 },
				width: '100%',
			}}
		>
			<Box
				component='form'
				noValidate
				autoComplete='off'
				sx={{
					p: 4,
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					maxWidth: 400,
					width: '100%',
					boxShadow: 3,
					borderRadius: 3,
					background: theme.palette.background.paper, // Responsive to theme mode
					color: theme.palette.text.primary,
				}}
			>
				<Typography
					variant='h5'
					align='center'
					gutterBottom
				>
					Contact Me
				</Typography>
				<TextField
					label='Name'
					variant='outlined'
					required
					fullWidth
				/>
				<TextField
					label='Email'
					variant='outlined'
					required
					type='email'
					fullWidth
				/>
				<TextField
					label='Message'
					variant='outlined'
					required
					multiline
					rows={4}
					fullWidth
				/>
				<Button
					variant='contained'
					sx={{
						textTransform: 'none',
						borderRadius: '25px',
						backgroundColor: '#00838f',
						'&:hover': {
							backgroundColor: '#00695c',
						},
						width: '100%',
					}}
				>
					Send
				</Button>
				<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
					<a
						href='https://github.com/EmilyAMartin'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub'
					>
						<GitHubIcon
							fontSize='large'
							sx={{
								color: '#00838f',
								'&:hover': {
									color: '#00695c',
								},
							}}
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/emily-martin-5864492ba'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='LinkedIn'
					>
						<LinkedInIcon
							fontSize='large'
							sx={{
								color: '#00838f',
								'&:hover': {
									color: '#00695c',
								},
							}}
						/>
					</a>
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;
