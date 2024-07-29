import { loadQuestions } from "@/src/shared/api";
import { GameProvider } from "@/src/entities/game";
import { GameProgress } from "@/src/widgets/game-progress";
import { Game } from "@/src/widgets/game";

import styles from "./styles.module.scss";

export default async function GamePage() {
  const questions = await loadQuestions();

  return (
    <GameProvider questions={questions}>
      <div className={styles.main}>
        <Game />
        <GameProgress />
      </div>
    </GameProvider>
  );
}
