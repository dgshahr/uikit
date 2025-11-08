'use client';
import { r as n } from './index-CTzypqlY.js';
import { i as u } from './isBrowser-CEYOmsdG.js';
const o = (r) => {
  const e = n.useRef(null);
  return (
    n.useEffect(() => {
      if (!u()) return;
      const t = (s) => {
        e.current && !e.current.contains(s.target) && r();
      };
      return (
        document?.addEventListener('click', t, !0),
        () => {
          document?.removeEventListener('click', t, !0);
        }
      );
    }, [e, r]),
    e
  );
};
export { o as u };
