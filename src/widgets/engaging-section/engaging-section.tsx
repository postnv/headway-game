import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/shared/ui/button";

import styles from "./styles.module.scss";

type PropsType = {
  title: ReactNode;
  subtitle?: string;
  btnText?: string;
  href?: string;
};

export default function EngagingSection({
  title,
  subtitle,
  btnText = "Start",
  href = "/game",
}: PropsType) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src="/thumbs-up.webp" alt="thumbs up" fill priority />
      </div>
      <div className={styles.content}>
        <div>
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          <h1 className={styles.title}>{title}</h1>
        </div>
        <Link className={styles.button} href={href} prefetch={false}>
          <Button>{btnText}</Button>
        </Link>
      </div>
    </div>
  );
}
