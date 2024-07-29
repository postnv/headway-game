import { ALPHABET } from "@/src/shared/constants";
import { AnswerType } from "@/src/entities/game";
import { Option } from "@/src/shared/ui/option";

import styles from "./styles.module.scss";

type PropsType = {
  answerIdx: number;
  answer: AnswerType;
  selectedAnswer?: AnswerType;
  onClick: (answer: AnswerType) => void;
};

export default function Answer({
  answer,
  selectedAnswer,
  answerIdx,
  onClick,
}: PropsType) {
  const wrong = selectedAnswer?.id === answer.id && !selectedAnswer.correct;
  const prefix = ALPHABET[answerIdx].toUpperCase();

  const handleAnswerClick = (targetAnswer: AnswerType) => () => {
    onClick(targetAnswer);
  };

  return (
    <div>
      <Option
        correct={selectedAnswer ? answer.correct : undefined}
        wrong={selectedAnswer ? wrong : undefined}
        onClick={handleAnswerClick(answer)}
      >
        <span className={styles.prefix}>{prefix}</span> {answer.answer}
      </Option>
    </div>
  );
}
