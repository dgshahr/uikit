import type { SVGProps } from 'react';
const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.683 8.305a.75.75 0 0 1-.096 1.056L4.422 12l3.165 2.639a.75.75 0 1 1-.96 1.152L2.77 12.575a.75.75 0 0 1 0-1.152l3.857-3.214a.75.75 0 0 1 1.056.096M16.816 8.305a.75.75 0 0 1 1.057-.096l3.857 3.214a.75.75 0 0 1 0 1.152l-3.857 3.215a.75.75 0 1 1-.96-1.152l3.165-2.639-3.165-2.638a.75.75 0 0 1-.097-1.056M15.078 4.225a.75.75 0 0 1 .448.961L10.383 19.33a.75.75 0 0 1-1.41-.513l5.143-14.143a.75.75 0 0 1 .962-.449"
      clipRule="evenodd"
    />
  </svg>
);
export default CodeIcon;
