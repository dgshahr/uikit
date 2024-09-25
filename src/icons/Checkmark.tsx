import type { SVGProps } from 'react';
const CheckmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.613 17.57a.75.75 0 0 1-.53-.22l-4.375-4.376a.75.75 0 0 1 1.06-1.06l3.845 3.844 9.1-9.1a.75.75 0 1 1 1.06 1.061l-9.635 9.63a.75.75 0 0 1-.525.22"
    />
  </svg>
);
export default CheckmarkIcon;
