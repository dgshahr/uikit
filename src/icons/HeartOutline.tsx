import type { SVGProps } from 'react';
const HeartOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.25 21.172-.3-.13c-4.71-2.09-9.72-6.19-9.7-11.45.01-3.1 1.73-5.59 4.48-6.47 2.11-.68 4.04-.17 5.52 1.44 1.48-1.61 3.41-2.12 5.52-1.44 2.75.89 4.47 3.37 4.48 6.48.03 5.25-4.99 9.35-9.7 11.44zM8.5 4.322c-.42 0-.85.07-1.31.22-2.53.81-3.44 3.15-3.44 5.06-.02 4.42 4.5 8.07 8.5 9.92 4-1.85 8.52-5.5 8.5-9.92 0-1.91-.92-4.24-3.44-5.06-1.79-.58-3.28-.02-4.44 1.64l-.62.88-.62-.88c-.86-1.24-1.91-1.87-3.13-1.87z"
    />
  </svg>
);
export default HeartOutlineIcon;
