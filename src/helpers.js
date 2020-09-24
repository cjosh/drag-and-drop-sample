export const getValidJSON = jsonInput => {
  if (typeof jsonInput !== 'string') return false;
  let validJSON = [];
  try {
    validJSON = JSON.parse(jsonInput.replace(/(\r\n|\n|\r)/gm, ''));
  } catch (e) {
    return false;
  }
  return validJSON;
};