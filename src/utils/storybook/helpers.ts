import type { CSSProperties } from 'react';

export function fullWidthStory(
  docOptions?: {
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    height?: string;
    notFlex?: boolean;
  },
  mainOptions?: {
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
  },
) {
  const mainElement = document
    ?.getElementsByClassName('sb-show-main')
    .item(0) as HTMLElement | null;
  if (mainElement) {
    mainElement.style.justifyContent = mainOptions?.justifyContent ?? 'center';
    mainElement.style.alignItems = mainOptions?.alignItems ?? 'center';
  }
  setTimeout(() => {
    Array.from(
      document?.getElementsByClassName('innerZoomElementWrapper') as HTMLCollectionOf<HTMLElement>,
    ).forEach((element) => {
      if (element) {
        element.style.display = docOptions?.notFlex ? 'block' : 'flex';
        element.style.height = docOptions?.height ?? 'auto';
        element.style.justifyContent = docOptions?.justifyContent ?? 'center';
        element.style.alignItems = docOptions?.alignItems ?? 'center';
      }
    });
  }, 200);

  setTimeout(() => {
    document?.querySelectorAll('[scale="1"]').forEach((element) => {
      element.classList.add('dgsuikit:!w-full');
    });
  }, 300);
}
