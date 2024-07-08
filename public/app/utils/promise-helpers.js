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
