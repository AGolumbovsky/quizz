import { Accordion } from '../../shared/ui/Accordion';
// import { topics } from '../../topics_list_test.json';

export const TopicsList = () => {
	// console.log(topics);
	const topics = [
		{
			title: 'Verbs in Present',
			description:
				'A collection of quizzes on the present tense of the verbs BE, DO, and non-modal verbs',
			quizzes: [
				{ id: 1, name: 'quiz 1: BE in present' },
				{ id: 2, name: 'quiz 2: DO in present' },
			],
		},

		{
			title: 'Verbs in Past',
			description:
				'A collection of quizzes on the past tense of the verbs BE, DO, and non-modal verbs',
			quizzes: [
				{ id: 3, name: 'quiz 1: BE in past' },
				{ id: 4, name: 'quiz 2: DO in past' },
			],
		},
		{
			title: 'Modal Verbs',
			description: 'A collection of quizzes on modal verbs and Future tense',
			quizzes: [
				{ id: 5, name: 'quiz 1: WILL' },
				{ id: 6, name: 'quiz 2: CAN' },
				{ id: 7, name: 'quiz 3: SHOULD' },
			],
		},
		{
			title: 'Negations',
			description: 'A collection of quizzes on negations with NOT and other elements',
			quizzes: [
				{ id: 8, name: 'quiz 1: NOT' },
				{ id: 9, name: 'quiz 2: NEVER, NOBODY, NO, etc' },
				{ id: 10, name: 'quiz 3: no double negation' },
			],
		},
	];

	return (
		<div>
			{topics.map((topic) => {
				return (
					<Accordion
						title={topic.title}
						description={topic.description}
						details={topic.quizzes}
						redirectBaseName={'/quiz'}
					></Accordion>
				);
			})}
		</div>
	);
};
