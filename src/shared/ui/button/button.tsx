import { PropsWithChildren, MouseEventHandler } from "react";

import styles from "./styles.module.scss";

type PropsType = PropsWithChildren<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

export default function Button({ children, onClick }: PropsType) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
