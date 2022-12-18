/**
 * @function
 * Transforms Blob to javascript object
 * @param {Blob} file
 * @return {Object|Boolean}
 */
const readFile = async file => {
  const raw = await file.text();
  let structure;
  try {
    structure = JSON.parse(raw);
  } catch (e) {
    structure = false;
    console.error('JSON parsing error'); // TODO: add Toast
  }
  return structure;
};

export default readFile;
