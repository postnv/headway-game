import classNames from "classnames";

import { MouseEventHandler, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

type PropsType = PropsWithChildren<{
  selected?: boolean;
  disabled?: boolean;
  correct?: boolean;
  wrong?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

export default function OptionButton({
  children,
  selected,
  correct,
  wrong,
  disabled = false,
  onClick,
}: PropsType) {
  return (
    <button
      className={classNames(styles.btn, {
        [styles["btn-selected"]]: !!selected,
        [styles["btn-correct"]]: !!correct,
        [styles["btn-wrong"]]: !!wrong,
      })}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <span className={styles.wrapper}>
        <svg
          width="288"
          height="56"
          viewBox="0 0 288 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z"
            fill="white"
            stroke="#D0D0D8"
          />
        </svg>
      </span>
      <span className={styles.content}>{children}</span>
    </button>
  );
}
