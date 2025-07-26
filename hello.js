const arrCtoF = (arrC) => {
  const arrF = [];
  for (let i = 0; i < arrC.length; i++) {
    tempF = (arrC[i] * 9) / 5 + 32;
    arrF.push(tempF);
  }
  return arrF;
};
