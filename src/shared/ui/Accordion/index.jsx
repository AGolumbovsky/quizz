import * as React from 'react';
import AccordionWrapper from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

export const Accordion = ({ title, description, details, redirectBaseName }) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div>
			<AccordionWrapper
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography sx={{ width: '33%', flexShrink: 0 }}>{title}</Typography>
					<Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{details.map((value) => {
						return (
							<Link to={redirectBaseName + '/' + value.id}>
								<Typography textAlign="center">{value.name}</Typography>
							</Link>
						);
					})}
				</AccordionDetails>
			</AccordionWrapper>
		</div>
	);
};
