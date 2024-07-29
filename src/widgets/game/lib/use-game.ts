import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore, AnswerType } from "@/src/entities/game";
import { wait, useUnmount } from "@/src/shared/lib";

export default function useGame() {
  const [selectedAnswer, setAnswer] = useState<AnswerType>();

  const { questions, selectedQuestion, score, nextQuestion, reset } =
    useGameStore((store) => store);

  const router = useRouter();

  const finishGame = (finalScore: number) => {
    router.push(`/result?score=${finalScore}`);
  };

  const handleCorrectAnswer = () => {
    const questionIdx = questions.indexOf(selectedQuestion);
    const lastQuestionIdx = questions.length - 1;

    if (questionIdx === lastQuestionIdx) {
      finishGame(selectedQuestion.sum);
    } else {
      setAnswer(undefined);
      nextQuestion();
    }
  };

  const handleWrongAnswer = () => finishGame(score);

  const verifyAnswer = (answer: AnswerType) => {
    setAnswer(answer);

    wait(answer.correct ? handleCorrectAnswer : handleWrongAnswer, 1000);
  };

  useUnmount(reset);

  return { selectedQuestion, selectedAnswer, verifyAnswer };
}
