import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
	<Box
		component='footer'
		sx={{
			mt: 6,
			py: 3,
			textAlign: 'center',
			background: (theme) => theme.palette.background.default,
			borderRadius: 3,
		}}
	>
		<Typography
			variant='body2'
			color='text.secondary'
			sx={{ mb: 1 }}
		>
			Connect with me:
		</Typography>
		<Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
			<Link
				href='https://github.com/EmilyAMartin'
				target='_blank'
				rel='noopener'
				color='inherit'
				aria-label='GitHub'
				sx={{ transition: 'color 0.2s', '&:hover': { color: '#333' } }}
			>
				<GitHubIcon fontSize='large' />
			</Link>
			<Link
				href='https://www.linkedin.com/in/emily-martin-5864492ba'
				target='_blank'
				rel='noopener'
				color='inherit'
				aria-label='LinkedIn'
				sx={{ transition: 'color 0.2s', '&:hover': { color: '#0077b5' } }}
			>
				<LinkedInIcon fontSize='large' />
			</Link>
		</Box>
		<Typography
			variant='caption'
			color='text.secondary'
			sx={{ mt: 1, display: 'block' }}
		>
			&copy; {new Date().getFullYear()} Emily Martin. All rights reserved.
		</Typography>
	</Box>
);

export default Footer;
