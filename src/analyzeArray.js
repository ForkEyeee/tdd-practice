const analyzeArray = (array) => {
  const arraySum = array.reduce((prev, curr) => prev + curr, 0);
  return {
    average: arraySum / array.length,
    max: Math.max(...array),
    min: Math.min(...array),
    length: array.length,
  };
};

export default analyzeArray;
