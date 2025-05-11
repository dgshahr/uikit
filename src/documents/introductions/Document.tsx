import { Meta, Title, Subheading, Source } from '@storybook/blocks';
import type { FC } from 'react';
import { DESCRIPTION_CLASS } from '../constants';

const IntroductionsDocument: FC = () => {
  return (
    <>
      <Meta title="Getting Started/Introductions" />

      <Title>🚀 Introductions</Title>
      <p className={DESCRIPTION_CLASS}>
        The <strong>DGS UI Kit</strong> is a modern, accessible, and themeable component library
        built for React applications. It offers a comprehensive set of pre-styled, reusable
        components designed to speed up development and ensure visual consistency across projects.
        <br />
        All components come with built-in styles, design token support (via CSS variables), and full
        RTL compatibility. No additional configuration like Tailwind, PostCSS, or global CSS setup
        is required—just install and start building.
      </p>

      <Subheading>Installation</Subheading>
      <p className={DESCRIPTION_CLASS}>
        To start using the <strong>DGS UI Kit</strong>, simply install the package using your
        preferred package manager.
      </p>
      <Source
        language="bash"
        code={`npm install @dgshahr/uikit

# or with yarn
yarn add @dgshahr/uikit

# or with pnpm
pnpm add @dgshahr/uikit`}
      />

      <Subheading>Peer Dependencies</Subheading>
      <p className={DESCRIPTION_CLASS}>
        The only required peer dependency is <code>react</code>. Please make sure React 18.2.0 or
        newer is installed in your project.
      </p>
      <Source
        language="json"
        code={`"peerDependencies": {
"react": ">=18.2.0"
}`}
      />

      <Subheading>Usage</Subheading>
      <p className={DESCRIPTION_CLASS}>
        After installing the package, you can use components in two ways:
      </p>
      <Source
        language="tsx"
        code={`// Named import
import { Button } from '@dgshahr/uikit';

// OR direct module import
import Button from '@dgshahr/uikit/Button';`}
      />
      <p className={DESCRIPTION_CLASS}>
        Direct module imports are useful for optimizing bundle size in large-scale apps or when
        using a custom tree-shaking strategy.
      </p>

      <Subheading>Styles</Subheading>
      <p className={DESCRIPTION_CLASS}>
        All required styles are bundled with the package. No additional configuration (e.g.,
        Tailwind setup, PostCSS, or global CSS import) is necessary.
      </p>
    </>
  );
};

export default IntroductionsDocument;
