"use client";

import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { useStore } from "zustand";

import { createGameStore, GameStoreType } from "../model";
import { QuestionType } from "../types";

type GameStoreApiType = ReturnType<typeof createGameStore>;

type PropsType = PropsWithChildren<{
  questions: QuestionType[];
}>;

export const GameContext = createContext<GameStoreApiType>(
  {} as GameStoreApiType,
);

export function GameProvider({ children, questions }: PropsType) {
  const storeRef = useRef(
    createGameStore({ questions, selectedQuestion: questions[0], score: 0 }),
  );

  return (
    <GameContext.Provider value={storeRef.current}>
      {children}
    </GameContext.Provider>
  );
}

export const useGameStore = <T,>(selector: (state: GameStoreType) => T): T => {
  const store = useContext(GameContext);

  if (!store) {
    throw new Error(`useGameStore must be used within GameStoreProvider`);
  }

  return useStore(store, selector);
};
