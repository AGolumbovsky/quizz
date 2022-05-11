import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export const MainTemplate = ({ children, navbar }) => {
	return (
		<Container maxWidth="xl">
			<Box sx={{ bgcolor: 'white', height: '100vh' }}>
				<div>{navbar}</div>
				<div>{children}</div>
			</Box>
		</Container>
	);
};
