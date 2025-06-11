import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
			>
				Send
			</Button>
		</Box>
	);
};

export default Contact;
