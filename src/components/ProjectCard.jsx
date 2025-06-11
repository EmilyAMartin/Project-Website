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
	width: 400,
	bgcolor: 'background.paper',
	borderRadius: 2,
	boxShadow: 24,
	p: 4,
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
			<Card sx={{ maxWidth: 345, m: 2 }}>
				<CardActionArea onClick={() => setOpen(true)}>
					{image && (
						<CardMedia
							component='img'
							height='140'
							image={image}
							alt={title}
						/>
					)}
					<CardContent>
						<Typography
							gutterBottom
							variant='h6'
							component='div'
						>
							{title}
						</Typography>
						{subtitle && (
							<Typography
								variant='subtitle2'
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
						<Box sx={{ display: 'flex', gap: 1, mt: 2, overflowX: 'auto' }}>
							{screenshots.map((src, idx) => (
								<img
									key={idx}
									src={src}
									alt={`Screenshot ${idx + 1}`}
									style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4 }}
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
