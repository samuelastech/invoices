export const handleStatus = async (res) => {
  return res.ok ? res.json() : Promise.reject(res.statusText);
};

export const logger = (param) => {
  console.log(param);
  return param;
};

export const timeoutPromise = (milliseconds, promise) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => reject('Limite da promise excedido'), milliseconds);
  });

  return Promise.race([timeout, promise]);
};

export const delay = (milliseconds) => {
  return (data) => new Promise((resolve) => {
    return setTimeout(() => resolve(data), milliseconds);
  });
};

export const retry = (retries, milliseconds, fn) => {
  return fn.catch((error) => {
    console.log(retries);
    return delay(milliseconds)().then(() => {
      return retries > 1
        ? retry(--retries, milliseconds, fn)
        : Promise.reject(error)
    });
  });
};
