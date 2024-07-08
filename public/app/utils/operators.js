export const takeUntil = (times, fn) => {
  return () => times-- > 0 && fn();
};

export const debounceTime = (milliseconds, fn) => {
  let timer = 0;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, milliseconds);
  };
};
