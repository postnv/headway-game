"use client";

import { Answer } from "./ui";
import { useGame } from "./lib";

import styles from "./styles.module.scss";

export default function Game() {
  const { selectedQuestion, selectedAnswer, verifyAnswer } = useGame();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>{selectedQuestion.question}</h1>
      <div className={styles.answers}>
        {selectedQuestion.answers.map((answer, idx) => (
          <Answer
            key={answer.id}
            answerIdx={idx}
            answer={answer}
            selectedAnswer={selectedAnswer}
            onClick={verifyAnswer}
          />
        ))}
      </div>
    </div>
  );
}
