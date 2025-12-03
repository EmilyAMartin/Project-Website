import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

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
	borderRadius: 3,
	boxShadow: 24,
	p: 3,
};

const ProjectCard = ({
	title,
	subtitle,
	description,
	image,
	screenshots = [],
}) => {
	const [open, setOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const theme = useTheme();

	return (
		<>
			<Card
				sx={{
					maxWidth: 690,
					m: 3,
					borderRadius: 3,
					overflow: 'hidden',
					transition: 'all 0.3s ease-in-out',
					background: theme.palette.background.paper,
					color: theme.palette.text.primary,
					'&:hover': {
						transform: 'translateY(-8px)',
						boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
						'& .card-media': {
							transform: 'scale(1.05)',
						},
						'& .zoom-icon': {
							opacity: 1,
						},
					},
				}}
			>
				<CardActionArea
					onClick={() => setOpen(true)}
					sx={{ position: 'relative' }}
				>
					{image && (
						<Box
							sx={{
								position: 'relative',
								overflow: 'hidden',
								height: 280,
								width: '100%',
							}}
						>
							<CardMedia
								component='img'
								image={image}
								alt={title}
								className='card-media'
								onError={(e) => {
									console.error(`Failed to load image: ${image}`);
									e.target.style.display = 'none';
								}}
								sx={{
									transition: 'transform 0.3s ease-in-out',
									objectFit: 'cover',
									width: '100%',
									height: 280,
									display: 'block',
								}}
							/>
							<Box
								className='zoom-icon'
								sx={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									opacity: 0,
									transition: 'opacity 0.3s ease-in-out',
									backgroundColor: 'rgba(0,0,0,0.7)',
									borderRadius: '50%',
									p: 1,
								}}
							>
								<ZoomInIcon sx={{ color: 'white', fontSize: 32 }} />
							</Box>
						</Box>
					)}
					<CardContent sx={{ p: 3 }}>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{
								fontWeight: 600,
								mb: 1,
							}}
						>
							{title}
						</Typography>
						{subtitle && (
							<Typography
								variant='body2'
								color='text.secondary'
								sx={{
									fontSize: '0.9rem',
									textTransform: 'uppercase',
									letterSpacing: '0.5px',
									fontWeight: 500,
								}}
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
				sx={{
					'& .MuiBackdrop-root': {
						backdropFilter: 'blur(4px)',
					},
				}}
			>
				<Box sx={modalStyle}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
							mb: 2,
						}}
					>
						<Box>
							<Typography
								variant='h4'
								sx={{
									fontWeight: 600,
									mb: 1,
								}}
							>
								{title}
							</Typography>
							{subtitle && (
								<Typography
									variant='body1'
									color='text.secondary'
									sx={{
										fontSize: '1rem',
										textTransform: 'uppercase',
										letterSpacing: '0.5px',
										fontWeight: 500,
									}}
								>
									{subtitle}
								</Typography>
							)}
						</Box>
						<IconButton
							onClick={() => setOpen(false)}
							sx={{
								color: 'text.secondary',
								'&:hover': {
									backgroundColor: 'rgba(0,0,0,0.04)',
								},
							}}
						>
							<CloseIcon />
						</IconButton>
					</Box>
					<Box sx={{ mb: 3 }}>
						<Chip
							label='Project Description'
							variant='outlined'
							sx={{
								mb: 2,
								borderColor: '#b39ddb',
								color: '#b39ddb',
								fontWeight: 500,
							}}
						/>
						<Typography
							variant='body1'
							sx={{
								lineHeight: 1.8,
								fontSize: '1.05rem',
								backgroundColor: 'rgba(179, 157, 219, 0.08)',
								p: 2,
								borderRadius: 2,
								borderLeft: '4px solid #b39ddb',
							}}
						>
							{description}
						</Typography>
					</Box>

					{screenshots.length > 0 && (
						<Box sx={{ mt: 4 }}>
							<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
								<Chip
									label={`Screenshots (${screenshots.length})`}
									variant='outlined'
									sx={{
										borderColor: '#b39ddb',
										color: '#b39ddb',
										fontWeight: 500,
									}}
								/>
							</Box>
							<Box sx={{ position: 'relative', mb: 2 }}>
								<Box
									component='img'
									src={screenshots[currentImageIndex]}
									alt={`Screenshot ${currentImageIndex + 1}`}
									onError={(e) => {
										e.target.style.display = 'none';
										e.target.nextSibling.style.display = 'flex';
									}}
									sx={{
										width: '100%',
										height: 'auto',
										maxHeight: '400px',
										objectFit: 'contain',
										borderRadius: 3,
										boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
										transition: 'all 0.3s ease-in-out',
									}}
								/>
								<Box
									sx={{
										display: 'none',
										width: '100%',
										height: '300px',
										maxHeight: '400px',
										backgroundColor: 'rgba(179, 157, 219, 0.12)',
										borderRadius: 3,
										border: '2px dashed #b39ddb',
										justifyContent: 'center',
										alignItems: 'center',
										flexDirection: 'column',
										color: '#b39ddb',
									}}
								>
									<Typography
										variant='h6'
										sx={{ mb: 1 }}
									>
										Image Not Available
									</Typography>
									<Typography
										variant='body2'
										color='text.secondary'
									>
										Screenshot {currentImageIndex + 1}
									</Typography>
								</Box>
							</Box>
							{screenshots.length > 1 && (
								<Box
									sx={{
										display: 'flex',
										gap: 1,
										justifyContent: 'center',
										flexWrap: 'wrap',
									}}
								>
									{screenshots.map((src, idx) => (
										<Box
											key={idx}
											sx={{ position: 'relative' }}
										>
											<Box
												component='img'
												src={src}
												alt={`Thumbnail ${idx + 1}`}
												onClick={() => setCurrentImageIndex(idx)}
												onError={(e) => {
													e.target.style.display = 'none';
													e.target.nextSibling.style.display = 'flex';
												}}
												sx={{
													width: 60,
													height: 60,
													objectFit: 'cover',
													borderRadius: 1,
													cursor: 'pointer',
													transition: 'all 0.2s ease-in-out',
													border:
														idx === currentImageIndex
															? '3px solid #b39ddb'
															: '3px solid transparent',
													opacity: idx === currentImageIndex ? 1 : 0.7,
													'&:hover': {
														opacity: 1,
														transform: 'scale(1.05)',
													},
												}}
											/>
											<Box
												sx={{
													display: 'none',
													width: 60,
													height: 60,
													backgroundColor: 'rgba(179, 157, 219, 0.12)',
													borderRadius: 1,
													border: '2px dashed #b39ddb',
													justifyContent: 'center',
													alignItems: 'center',
													cursor: 'pointer',
													transition: 'all 0.2s ease-in-out',
													borderColor: idx === currentImageIndex ? '#b39ddb' : 'transparent',
													opacity: idx === currentImageIndex ? 1 : 0.7,
													'&:hover': {
														opacity: 1,
														transform: 'scale(1.05)',
													},
												}}
												onClick={() => setCurrentImageIndex(idx)}
											>
												<Typography
													variant='caption'
													sx={{ fontSize: '0.6rem', color: '#b39ddb' }}
												>
													{idx + 1}
												</Typography>
											</Box>
										</Box>
									))}
								</Box>
							)}
						</Box>
					)}
				</Box>
			</Modal>
		</>
	);
};

export default ProjectCard;
