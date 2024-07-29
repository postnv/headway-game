import { wait } from "@/src/shared/lib";
import { QuestionType } from "@/src/entities/game";

import questions from "./__mocks__/questions.json";

export default async function mockLoadQuestions(): Promise<QuestionType[]> {
  return new Promise((res) => {
    wait(() => res(questions), 300);
  });
}
