import { Paper, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

export const BlogPage = () => {
	const [pTitle, setTitle] = useState('The king da blogga, the blogga bloggs');

	const entries = ['Blog Entry One', 'Blog Entry Two', 'Blog Entry Three'];

	useEffect(() => {
		document.title = pTitle + ' bloggzz';
	});

	const counter = (() => {
		let privateCounter = 0;

		const changeBy = (val) => (privateCounter += val);

		return {
			increment: () => changeBy(1),
			decrement: () => changeBy(-1),
			value: () => privateCounter,
		};
	})();
	counter.increment();
	counter.increment();
	console.log(counter.value());

	return (
		<Stack spacing={2}>
			{/* <Paper onClick={blogga}>Blog Entry 1</Paper>
			<Paper>Blog Entry 2</Paper>
			<Paper>Blog Entry 3</Paper> */}

			{entries.map((entry) => {
				return <Paper onClick={() => setTitle(pTitle + ' bloggz')}>{entry}</Paper>;
			})}
		</Stack>
	);
};
