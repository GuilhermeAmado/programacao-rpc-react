const getTime = (timestamp) => {
  return new Date(timestamp * 1000).toTimeString().slice(0, 5);
};

export default getTime;
