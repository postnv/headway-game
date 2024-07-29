"use client";

import { useEffect, useRef } from "react";

export default function useUnmount(fn: () => void) {
  const fnRef = useRef(fn);

  fnRef.current = fn;

  useEffect(() => () => fnRef.current(), []);
}
