"use client";

import OptionButton from "@/src/shared/ui/option-button/option-button";
import { formatCurrency } from "@/src/shared/lib";
import { useGame, QuestionType, AnswerType } from "@/src/entities/game";

type PropsType = {
  questions: QuestionType[];
};

export default function GameSection({ questions }: PropsType) {
  const { selectedQuestion, selectedAnswer, verifyAnswer } = useGame(questions);

  const handleAnswerClick = (answer: AnswerType) => () => verifyAnswer(answer);

  return (
    <div>
      <div>
        <h1>{selectedQuestion.question}</h1>
        <div>
          {selectedQuestion.answers.map((answer) => {
            const disabled = selectedAnswer && selectedAnswer.id !== answer.id;
            const correct = selectedAnswer?.correct || answer.correct;
            const wrong =
              selectedAnswer?.id === answer.id && !selectedAnswer.correct;

            return (
              <OptionButton
                key={answer.id}
                disabled={disabled}
                correct={selectedAnswer ? correct : undefined}
                wrong={selectedAnswer ? wrong : undefined}
                onClick={handleAnswerClick(answer)}
              >
                {answer.answer}
              </OptionButton>
            );
          })}
        </div>
      </div>
      <div>
        {questions.map((question) => (
          <OptionButton
            key={question.id}
            selected={question.id === selectedQuestion.id}
            disabled={question.sum < selectedQuestion.sum}
          >
            {formatCurrency(question.sum)}
          </OptionButton>
        ))}
      </div>
    </div>
  );
}
