import type { SVGProps } from 'react';
const HeartRateIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M8.412 4.942c.364-1.094 1.912-1.094 2.276 0l4.262 12.784 1.783-5.35a1.65 1.65 0 0 1 1.566-1.128h2.951a.75.75 0 0 1 0 1.5h-2.951a.15.15 0 0 0-.143.103l-2.068 6.204c-.364 1.094-1.912 1.093-2.276 0L9.55 6.27l-1.783 5.35A1.65 1.65 0 0 1 6.2 12.748H3.25a.75.75 0 0 1 0-1.5h2.951a.15.15 0 0 0 .143-.102z"
      clipRule="evenodd"
    />
  </svg>
);
export default HeartRateIcon;
