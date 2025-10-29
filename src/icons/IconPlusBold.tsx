import type { SVGProps } from 'react';
const IconPlusBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#2852E4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 3.333v9.334M3.333 8h9.334"
    />
  </svg>
);
export default IconPlusBold;
