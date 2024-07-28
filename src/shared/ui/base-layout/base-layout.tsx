import { ReactNode } from "react";

import styles from "./styles.module.scss";

type PropsType = {
  children: ReactNode;
};

export default function BaseLayout({ children }: PropsType) {
  return <main className={styles.main}>{children}</main>;
}
