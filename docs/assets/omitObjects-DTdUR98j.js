function c(o, t) {
  const e = { ...o };
  for (const n of t) delete e[n];
  return e;
}
export { c as o };
