import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper, styled } from '@mui/material';

const bull = (
	<Box
		component="span"
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
		•
	</Box>
);

const card = (
	<>
		<CardContent>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Word of the Day
			</Typography>
			<Typography variant="h5" component="div">
				be{bull}nev{bull}o{bull}lent
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
				adjective
			</Typography>
			<Typography variant="body2">
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Learn More</Button>
		</CardActions>
	</>
);
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export function CardsPage() {
	return (
		<Box sx={{ minWidth: 275 }}>
			<Grid container>
				<Grid item xs={4}>
					<Card variant="outlined">{card}</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">{card}</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">{card}</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">{card}</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">{card}</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">{card}</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">{card}</Card>
				</Grid>
			</Grid>
		</Box>
	);
}
