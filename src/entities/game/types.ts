export type AnswerType = {
  answer: string;
  id: number;
  correct: boolean;
};

export type QuestionType = {
  id: number;
  question: string;
  answers: AnswerType[];
  sum: number;
};
