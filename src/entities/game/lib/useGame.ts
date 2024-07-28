import { useState } from "react";
import { useRouter } from "next/navigation";
import { wait } from "@/src/shared/lib";
import { QuestionType, AnswerType } from "../types";

export default function useGame(questions: QuestionType[]) {
  const [selectedQuestion, setQuestion] = useState(questions[0]);
  const [selectedAnswer, setAnswer] = useState<AnswerType>();

  const router = useRouter();

  const finishGame = (score: number) => router.push(`/result?score=${score}`);

  const handleCorrectAnswer = () => {
    const questionIdx = questions.indexOf(selectedQuestion);

    if (questionIdx === questions.length - 1) {
      finishGame(selectedQuestion.sum);
    } else {
      setQuestion(questions[questionIdx + 1]);
      setAnswer(undefined);
    }
  };

  const handleWrongAnswer = () => {
    const questionIdx = questions.indexOf(selectedQuestion);
    const score = questions[questionIdx - 1]?.sum || 0;

    finishGame(score);
  };

  const verifyAnswer = (answer: AnswerType) => {
    setAnswer(answer);

    wait(answer.correct ? handleCorrectAnswer : handleWrongAnswer, 1000);
  };

  return { selectedQuestion, selectedAnswer, verifyAnswer };
}
