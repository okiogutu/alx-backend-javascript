export default function iterateThroughObject(reportWithIterator) {
  let res = [];
  for (const employee of reportWithIterator) {
    res.push(employee);
  }
  return res.join(" | ");
}
