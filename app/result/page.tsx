import { ResultPage } from "@/src/page-content/result";

type PropsType = {
  searchParams: { score: string };
};

export default function Result({ searchParams }: PropsType) {
  const score = +searchParams.score || 0;

  return <ResultPage score={score} />;
}
