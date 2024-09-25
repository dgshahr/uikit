import type { SVGProps } from 'react';
const StarOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.103 3.67 1.828 3.652c.18.36.528.608.927.664l4.09.59a1.211 1.211 0 0 1 .682 2.071l-2.958 2.842c-.291.277-.424.68-.354 1.076l.7 4.012a1.228 1.228 0 0 1-1.788 1.28l-3.654-1.894a1.25 1.25 0 0 0-1.147 0l-3.656 1.895a1.228 1.228 0 0 1-1.787-1.28l.7-4.013a1.2 1.2 0 0 0-.354-1.075L3.37 10.648a1.211 1.211 0 0 1 .682-2.072l4.09-.589c.399-.056.746-.304.928-.664L10.9 3.67a1.24 1.24 0 0 1 2.202 0"
      clipRule="evenodd"
    />
  </svg>
);
export default StarOutlineIcon;
