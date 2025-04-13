function n(e, l) {
  const s = document.getElementsByClassName('sb-show-main').item(0);
  s && ((s.style.justifyContent = 'center'), (s.style.alignItems = 'center')),
    setTimeout(() => {
      Array.from(document.getElementsByClassName('innerZoomElementWrapper')).forEach((t) => {
        t &&
          ((t.style.display = e?.notFlex ? 'block' : 'flex'),
          (t.style.height = e?.height ?? 'auto'),
          (t.style.justifyContent = e?.justifyContent ?? 'center'),
          (t.style.alignItems = e?.alignItems ?? 'center'));
      });
    }, 200),
    setTimeout(() => {
      document.querySelectorAll('[scale="1"]').forEach((t) => {
        t.classList.add('!dgs-ui-kit-w-full');
      });
    }, 300);
}
export { n as f };
