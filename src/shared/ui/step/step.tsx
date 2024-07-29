import { PropsWithChildren } from "react";
import classNames from "classnames";
import { Shape } from "@/src/shared/ui/utility";

import styles from "./styles.module.scss";

type PropsType = PropsWithChildren<{
  selected?: boolean;
  disabled?: boolean;
}>;

export default function Step({ children, selected, disabled }: PropsType) {
  return (
    <div
      className={classNames(styles.step, {
        [styles["step-selected"]]: selected,
        [styles["step-disabled"]]: disabled,
      })}
    >
      <span className={styles.wrapper}>
        <Shape type="sm" />
      </span>
      <span className={styles.content}>{children}</span>
    </div>
  );
}
