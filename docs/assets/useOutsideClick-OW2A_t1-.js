import { r as n } from './index-CTzypqlY.js';
const s = (t) => {
  const e = n.useRef(null);
  return (
    n.useEffect(() => {
      const r = (c) => {
        e.current && !e.current.contains(c.target) && t();
      };
      return (
        document.addEventListener('click', r, !0),
        () => {
          document.removeEventListener('click', r, !0);
        }
      );
    }, [e, t]),
    e
  );
};
export { s as u };
