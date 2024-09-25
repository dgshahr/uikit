import type { SVGProps } from 'react';
const VoiceIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.75 9.8a.75.75 0 0 1 .75.75c0 4.593-3.525 8.374-8 8.757v2.443a.75.75 0 0 1-1.5 0v-2.443c-4.475-.383-8-4.164-8-8.756a.75.75 0 0 1 1.5 0c0 4.018 3.252 7.288 7.25 7.288S19 14.569 19 10.55a.75.75 0 0 1 .75-.75m-8-8.8c2.653 0 4.811 2.167 4.811 4.831v4.688c0 2.663-2.158 4.83-4.812 4.83-2.652 0-4.811-2.167-4.811-4.83V5.831C6.938 3.167 9.097 1 11.75 1m0 1.5c-1.826 0-3.312 1.494-3.312 3.331v4.688c0 1.835 1.486 3.33 3.311 3.33 1.826 0 3.313-1.495 3.313-3.33V5.831c0-1.837-1.486-3.331-3.312-3.331"
      clipRule="evenodd"
    />
  </svg>
);
export default VoiceIcon;
