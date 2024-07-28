import { EngagingSection } from "@/src/widgets/engaging-section";

import styles from "./styles.module.scss";

export default function StartPage() {
  return (
    <div className={styles.wrapper}>
      <EngagingSection title="Who wants to be a millionaire?" />
    </div>
  );
}
