export const partialize = (fn, ...args) => {
  return fn.bind(null, ...args);
};

export const compose = (...fns) => {
  return (value) => {
    return fns.reduceRight((previousValue, fn) => {
      return fn(previousValue);
    }, value);
  }
};

export const pipe = (...fns) => {
  return (value) => {
    return fns.reduce((previousValue, fn) => {
      return fn(previousValue);
    }, value);
  }
};

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
