import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
	return (
		<Box
			component='form'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				maxWidth: 400,
				margin: '0 auto',
				mt: 4,
			}}
			noValidate
			autoComplete='off'
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
			/>
			<TextField
				label='Email'
				variant='outlined'
				required
				type='email'
			/>
			<TextField
				label='Message'
				variant='outlined'
				required
				multiline
				rows={4}
			/>
			<Button
				variant='contained'
				color='primary'
				sx={{ textTransform: 'none' }}
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
						color='action'
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
						color='action'
					/>
				</a>
			</Box>
		</Box>
	);
};

export default Contact;
