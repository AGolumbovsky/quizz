export const MainTemplate = ({ children, navbar }) => {
	return (
		<div>
			<div>{navbar}</div>
			<div>{children}</div>
		</div>
	);
};
