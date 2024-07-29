"use client";

import React, { useState } from "react";
import classNames from "classnames";
import { useGameStore } from "@/src/entities/game";
import { formatCurrency } from "@/src/shared/lib";
import { MenuIcon, CloseIcon } from "@/src/shared/ui/icons";
import { Step } from "@/src/shared/ui/step";

import styles from "./styles.module.scss";

export default function GameProgress() {
  const [opened, setOpened] = useState(false);

  const questions = useGameStore((selector) => selector.questions);
  const selectedQuestion = useGameStore(
    (selector) => selector.selectedQuestion,
  );

  const steps = [...questions].reverse();

  const handleToggleMenu = () => setOpened((value) => !value);

  return (
    <>
      <button className={styles.menu} type="button" onClick={handleToggleMenu}>
        {opened ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div
        className={classNames(styles.sidebar, {
          [styles["menu-opened"]]: opened,
        })}
      >
        <dl className={styles.list}>
          {steps.map((question) => (
            <dt className={styles.listItem} key={question.id}>
              <Step
                selected={question.id === selectedQuestion.id}
                disabled={question.sum < selectedQuestion.sum}
              >
                {formatCurrency(question.sum)}
              </Step>
            </dt>
          ))}
        </dl>
      </div>
    </>
  );
}
