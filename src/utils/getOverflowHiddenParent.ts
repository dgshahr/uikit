import { isBrowser } from './isBrowser';

const overflowCondition = (style: CSSStyleDeclaration) =>
  style.overflow === 'hidden' || style.overflowX === 'hidden' || style.overflowY === 'hidden';

export function getOverflowHiddenParent(element: HTMLElement): HTMLElement | Window {
  if (!isBrowser()) return window;

  let current: HTMLElement | null = element;

  while (current) {
    const style = window?.getComputedStyle(current);
    if (overflowCondition(style)) {
      return current;
    }

    if (current.parentElement) {
      current = current.parentElement;
    } else {
      break;
    }
  }

  // Check html tag
  const html = document?.documentElement;
  const htmlStyle = window?.getComputedStyle(html);
  if (overflowCondition(htmlStyle)) {
    return html;
  }

  // Check if inside an iframe
  const inIframe = window?.self !== window?.top;
  return inIframe ? html : window;
}
