const readFile = async file => {
  const raw = await file.text();
  let structure;
  try {
    structure = JSON.parse(raw); // eslint-disable-line fp/no-mutation
  } catch (e) {
    structure = false; // eslint-disable-line fp/no-mutation
    console.error('JSON parsing error'); // TODO: add Toast
  }
  return structure;
};

export default readFile;
