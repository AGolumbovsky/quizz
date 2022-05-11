import { Routes, Route } from 'react-router-dom';
import { BlogPage } from './pages/Blog';
import { CardsPage } from './pages/Cards';
import { HomePage } from './pages/Home';
import { QuizzesPage } from './pages/Quizzes';
import { MainTemplate } from './shared/ui/templates/main';
import { BasicNavbar } from './shared/ui/BasicNavbar';
import { QuizPage } from './pages/Quiz';

function App() {
	return (
		<div className="App">
			<MainTemplate navbar={<BasicNavbar />}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="quizzes" element={<QuizzesPage />} />
					<Route path="cards" element={<CardsPage />} />
					<Route path="blog" element={<BlogPage />} />
					<Route path="quiz/:id" element={<QuizPage />} />
				</Routes>
			</MainTemplate>
		</div>
	);
}

export default App;
