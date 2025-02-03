export default function focusAndOpenKeyboard(el: HTMLElement | null, timeout = 100) {
  if (!el) return;
  // Align temp input element approximately where the input element is
  // so the cursor doesn't jump around
  const tempEl = document.createElement('input');
  tempEl.style.position = 'absolute';
  tempEl.style.top = `${el.offsetTop + 7}px`;
  tempEl.style.left = `${el.offsetLeft}px`;
  tempEl.style.height = `${0}px`;
  tempEl.style.opacity = `${0}px`;
  // Put this temp element as a child of the page <body> and focus on it
  document.body.appendChild(tempEl);
  tempEl.focus();

  // The keyboard is open. Now do a delayed focus on the target element
  setTimeout(() => {
    el.focus();
    el.click();
    // Remove the temp element
    document.body.removeChild(tempEl);
  }, timeout);
}
