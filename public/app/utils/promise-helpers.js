export const handleStatus = async (res) => {
  return res.ok ? res.json() : Promise.reject(res.statusText);
}

export const logger = (param) => {
  console.log(param);
  return param;
}