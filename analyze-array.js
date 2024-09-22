const analyzeArray = (array) => {
  const sum = array.reduce((prev, current) => prev + current, 0);

  return {
    average: sum / array.length || 0,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

module.exports = analyzeArray;
