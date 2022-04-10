import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { QuizzesPage } from './pages/Quizzes';
import { MainTemplate } from './ui/templates/main';
import { BasicNavbar } from './ui/templates/shared/BasicNavbar';

function App() {
	return (
		<div className="App">
			<MainTemplate navbar={<BasicNavbar />}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="quizzes" element={<QuizzesPage />} />
				</Routes>
			</MainTemplate>
		</div>
	);
}

export default App;
