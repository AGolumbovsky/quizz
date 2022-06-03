import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BackButton } from './BackButton';
import { EndScreen } from './EndScreen';
import { NextButton } from './NextButton';
import { GoToReviewButton } from './GoToReviewButton';
import { ResultsScreen } from './ResultsScreen';

export function Question() {
	const [state, setState] = useState(false);

	const currentQuestion = useSelector((state) => state.currentQuestion);
	const questionIndex = useSelector((state) => state.questionIndex);
	const questionsCount = useSelector((state) => state.questionsCount);
	const isFromReview = useSelector((state) => state.isFromReview);

	const userAnswers = useSelector((state) => state.userAnswers);

	const dispatch = useDispatch();

	const handleSelection = (id) => {
		dispatch({
			type: 'SELECTED_ANSWER',
			questionId: currentQuestion.id,
			selectedAnswerId: id,
		});
	};

	const showResults = () => {
		setState(true);
	};

	if (state) return <ResultsScreen />;

	if (questionIndex == questionsCount) return <EndScreen showResults={showResults} />;

	return (
		<div>
			<p>Question {questionIndex + 1}:</p>
			{
				<div>
					<div>{currentQuestion.question}</div>
					<div>
						{' '}
						{currentQuestion.options.map((option) => (
							<p
								className={
									userAnswers[questionIndex + 1] === option.id
										? 'question-highlighted'
										: ''
								}
								key={option.id}
								onClick={() => handleSelection(option.id)}
							>
								{option.value}
							</p>
						))}{' '}
					</div>
				</div>
			}
			<span className="buttons-inline">
				{isFromReview ? (
					<GoToReviewButton />
				) : (
					questionIndex > 0 && <BackButton questionIndex={questionIndex - 1}></BackButton>
				)}
				{!isFromReview && <NextButton questionIndex={questionIndex + 1}></NextButton>}
			</span>
		</div>
	);
}
