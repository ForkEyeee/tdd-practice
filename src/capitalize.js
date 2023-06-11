const capitalize = (string) => {
  const capitalLetter = string[0].toUpperCase();
  return capitalLetter + string.slice(1);
};

export default capitalize;
