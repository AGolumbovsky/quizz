import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
	({ theme, checked }) => ({
		'.MuiFormControlLabel-label': checked && {
			color: theme.palette.primary.main,
		},
	})
);

function MyFormControlLabel(props) {
	const radioGroup = useRadioGroup();

	let checked = false;

	if (radioGroup) {
		checked = radioGroup.value === props.value;
	}

	return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function RadioButtonGroup({ onChange }) {
	const handleOnChange = (event, value) => {
		onChange(value);
	};
	return (
		<RadioGroup name="use-radio-group" defaultValue="first" onChange={handleOnChange}>
			<MyFormControlLabel value="firstlakdflkdf" label="First" control={<Radio />} />
			<MyFormControlLabel value="second" label="Second" control={<Radio />} />
		</RadioGroup>
	);
}
