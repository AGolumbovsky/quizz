import { Accordion } from '../../shared/ui/Accordion';
export const TopicList = () => {
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
