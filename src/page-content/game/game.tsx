import loadQuestions from "@/src/page-content/game/api/loadQuestions";
import GameSection from "@/src/widgets/game-section/game-section";

export default async function GamePage() {
  const questions = await loadQuestions();

  return (
    <div>
      <GameSection questions={questions} />
    </div>
  );
}
