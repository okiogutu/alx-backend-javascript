export default function appendToEachArrayValue(array, appendString) {
  const tmp = [];
  for (const value of array) {
    tmp.push(appendString + value); // eslint-disable-line no-param-reassign
  }

  return tmp;
}
