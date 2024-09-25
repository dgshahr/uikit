import type { SVGProps } from 'react';
const SmilingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <path
      fill="currentColor"
      d="M12.25 16.521a4.39 4.39 0 0 1-3.476-1.775.75.75 0 1 1 1.19-.914 2.79 2.79 0 0 0 4.57 0 .75.75 0 1 1 1.19.914 4.39 4.39 0 0 1-3.475 1.775M8.975 10a.977.977 0 0 1-.374-1.875.973.973 0 0 1 1.274.528A.975.975 0 0 1 8.974 10zM15.475 10a.977.977 0 0 1-.374-1.875.973.973 0 0 1 1.274.528.975.975 0 0 1-.901 1.348z"
    />
  </svg>
);
export default SmilingIcon;
