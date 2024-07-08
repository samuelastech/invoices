export const takeUntil = (times, fn) => {
  return () => times-- > 0 && fn();
};
