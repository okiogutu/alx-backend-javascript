export default function createIteratorObject(report) {
  const all = Object.values(report.allEmployees).reduce((a, b) => {
    a.push(...b);
    return a;
  }, []);
  let idx = 0;
  const maxIdx = all.length;
  return {
    next() {
      if (idx < maxIdx) {
        const res = { value: all[idx], done: false };
        idx += 1;
        return res;
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]: () => this.next(),
  };
}
