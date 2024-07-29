import { createStore } from "zustand";
import { QuestionType } from "./types";

export type GameStateType = {
  questions: QuestionType[];
  selectedQuestion: QuestionType;
  score: number;
};

export type GameActionsType = {
  nextQuestion: () => void;
  reset: () => void;
};

export type GameStoreType = GameStateType & GameActionsType;

export const createGameStore = (initialState: GameStateType) =>
  createStore<GameStoreType>()((set, get) => ({
    ...initialState,
    nextQuestion: () => {
      const { questions, selectedQuestion } = get();

      const nextQuestionIdx = questions.indexOf(selectedQuestion) + 1;
      const nextQuestion = questions[nextQuestionIdx] ?? selectedQuestion;

      set({
        selectedQuestion: nextQuestion,
        score: selectedQuestion.sum,
      });
    },
    reset: () => {
      const { questions } = get();

      set({ selectedQuestion: questions[0], score: 0 });
    },
  }));
