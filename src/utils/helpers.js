export const formatePrice = (number, type = 'INR') => {
  const tempNumber = type === 'USD' ? number / 80 : number;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: type,
    minimumFractionDigits: 0,
  }).format(tempNumber);
};

export const getUniqueValues = (data, type) => {
  let unique = data?.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};

export const getUnique = (data, type) => {
  const unique = data?.map((item) => item[type]);
  return [...new Set(unique)];
};
