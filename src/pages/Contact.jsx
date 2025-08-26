import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const Contact = () => {
	const theme = useTheme();
	// removed hover state, no longer needed after refactor
	const [sending, setSending] = useState(false);

	const handleSend = (e) => {
		e.preventDefault();
		setSending(true);
		setTimeout(() => setSending(false), 1500); // Simulate send
	};

	return (
		<Box
			sx={{
				minHeight: '60vh',
				borderRadius: 3,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				py: 6,
				px: { xs: 1, sm: 2 },
				width: '100%',
			}}
		>
			<Typography
				variant='h4'
				align='center'
				gutterBottom
				sx={{
					fontWeight: 700,
					letterSpacing: 1,
					background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}
			>
				Let’s Connect
			</Typography>
			<Typography
				variant='body1'
				align='center'
				color='text.secondary'
				sx={{ mb: 1 }}
			>
				Have a question or want to work together? Fill out the form below!
			</Typography>
			<Box
				component='form'
				noValidate
				autoComplete='off'
				onSubmit={handleSend}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 3,
					maxWidth: 420,
					width: '100%',
					background: 'transparent',
					color: theme.palette.text.primary,
					boxShadow: 'none',
					p: 0,
					m: '0 auto',
				}}
			>
				<TextField
					label='Name'
					variant='outlined'
					required
					fullWidth
					InputLabelProps={{
						sx: { color: theme.palette.text.secondary },
					}}
					InputProps={{
						sx: {
							'&:focus-within fieldset': {
								borderColor: theme.palette.primary.main,
							},
						},
					}}
				/>
				<TextField
					label='Email'
					variant='outlined'
					required
					type='email'
					fullWidth
					InputLabelProps={{
						sx: { color: theme.palette.text.secondary },
					}}
					InputProps={{
						sx: {
							'&:focus-within fieldset': {
								borderColor: theme.palette.primary.main,
							},
						},
					}}
				/>
				<TextField
					label='Message'
					variant='outlined'
					required
					multiline
					rows={4}
					fullWidth
					InputLabelProps={{
						sx: { color: theme.palette.text.secondary },
					}}
					InputProps={{
						sx: {
							'&:focus-within fieldset': {
								borderColor: theme.palette.primary.main,
							},
						},
					}}
				/>
				<Button
					type='submit'
					variant='contained'
					disabled={sending}
					endIcon={<SendIcon />}
					sx={{
						textTransform: 'none',
						borderRadius: '25px',
						fontWeight: 600,
						fontSize: '1.1rem',
						py: 1.2,
						background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
						boxShadow: 2,
						transition: 'background 0.3s, transform 0.2s',
						'&:hover': {
							background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
							transform: 'scale(1.03)',
						},
					}}
				>
					{sending ? 'Sending...' : 'Send Message'}
				</Button>
			</Box>
		</Box>
	);
};

export default Contact;
