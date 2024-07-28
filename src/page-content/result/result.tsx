import { formatCurrency } from "@/src/shared/lib";
import { EngagingSection } from "@/src/widgets/engaging-section";

import styles from "./styles.module.scss";

type PropsType = {
  score: number;
};

export default function ResultPage({ score }: PropsType) {
  return (
    <div className={styles.wrapper}>
      <EngagingSection
        btnText="Try again"
        subtitle="Total score:"
        title={`${formatCurrency(score)} earned`}
      />
    </div>
  );
}
