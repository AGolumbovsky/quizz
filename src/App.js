import { MainTemplate } from './ui/templates/main';
import { BasicNavbar } from './ui/templates/shared/BasicNavbar';

function App() {
	return (
		<div className="App">
			<MainTemplate navbar={<BasicNavbar />}>main content</MainTemplate>
		</div>
	);
}

export default App;
