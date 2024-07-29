import classNames from "classnames";
import { PropsWithChildren, KeyboardEvent } from "react";
import { Shape } from "@/src/shared/ui/utility";

import styles from "./styles.module.scss";

type PropsType = PropsWithChildren<{
  selected?: boolean;
  disabled?: boolean;
  correct?: boolean;
  wrong?: boolean;
  onClick?: () => void;
}>;

export default function Option({
  children,
  selected,
  correct,
  wrong,
  disabled = false,
  onClick,
}: PropsType) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") onClick?.();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={classNames(styles.option, {
        [styles["option-selected"]]: selected,
        [styles["option-correct"]]: correct,
        [styles["option-wrong"]]: wrong,
        [styles["option-disabled"]]: disabled,
      })}
    >
      <span className={styles.wrapper}>
        <Shape type="lg" />
      </span>
      <span className={styles.content}>{children}</span>
    </div>
  );
}
