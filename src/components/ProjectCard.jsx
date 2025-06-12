import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '95vw', sm: 500, md: 800, lg: 1090 },
	maxWidth: '95vw',
	maxHeight: '90vh',
	overflowY: 'auto',
	bgcolor: 'background.paper',
	borderRadius: 2,
	boxShadow: 24,
	p: 2,
};

const ProjectCard = ({
	title,
	subtitle,
	description,
	image,
	screenshots = [],
}) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Card sx={{ maxWidth: 690, m: 3 }}>
				<CardActionArea onClick={() => setOpen(true)}>
					{image && (
						<CardMedia
							component='img'
							height='280'
							image={image}
							alt={title}
						/>
					)}
					<CardContent>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
						>
							{title}
						</Typography>
						{subtitle && (
							<Typography
								variant='h7'
								color='text.secondary'
								gutterBottom
							>
								{subtitle}
							</Typography>
						)}
					</CardContent>
				</CardActionArea>
			</Card>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
			>
				<Box sx={modalStyle}>
					<Typography
						variant='h5'
						gutterBottom
					>
						{title}
					</Typography>
					{subtitle && (
						<Typography
							variant='subtitle1'
							color='text.secondary'
							gutterBottom
						>
							{subtitle}
						</Typography>
					)}
					<Typography
						variant='body1'
						gutterBottom
					>
						{description}
					</Typography>
					{screenshots.length > 0 && (
						<Box
							sx={{
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'row' },
								gap: 2,
								mt: 2,
								overflowX: { xs: 'visible', sm: 'auto' },
								alignItems: 'center',
							}}
						>
							{screenshots.map((src, idx) => (
								<Box
									key={idx}
									component='img'
									src={src}
									alt={`Screenshot ${idx + 1}`}
									sx={{
										width: { xs: '90vw', sm: 120, md: 180, lg: 250 },
										maxWidth: { xs: '100%', sm: 180, md: 250 },
										height: 'auto',
										objectFit: 'cover',
										borderRadius: 2,
										flexShrink: 0,
									}}
								/>
							))}
						</Box>
					)}
				</Box>
			</Modal>
		</>
	);
};

export default ProjectCard;
