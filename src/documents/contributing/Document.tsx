import { Title, Source, Subheading } from '@storybook/blocks';
import type { FC } from 'react';
import { DESCRIPTION_CLASS } from '../constants';

import '@/src/styles.css';

const ContributingDocument: FC = () => {
  return (
    <>
      <Title>🤝 Contributing</Title>
      <p className={DESCRIPTION_CLASS}>
        Thank you for your interest in contributing! This UI Kit is an open and growing library of
        reusable components. We welcome bug reports, improvements, new components, and documentation
        enhancements.
      </p>

      <Subheading>Local Setup</Subheading>
      <p className={DESCRIPTION_CLASS}>
        To get started, clone the repository and install dependencies:
      </p>
      <Source
        language="bash"
        code={`# Clone the proejct
git clone https://github.com/dgshahr/uikit.git

# navigate to project director
cd uikit

# install the dependencies
npm install`}
      />

      <Subheading>Project Structure</Subheading>
      <p className={DESCRIPTION_CLASS}>
        Each component must be placed in its own folder under <code>src/components</code>, and{' '}
        <strong>
          must include an <code>index.ts</code> or <code>index.tsx</code> file
        </strong>{' '}
        . Vite is configured to treat each <code>index.ts</code> or <code>index.tsx</code> file in
        component folders as an entry point during the build process.
        <br />
        If a folder contains multiple components or exports, use <strong>named exports</strong> from
        the index file.
        <br />
        Additionally, each component must have a corresponding Storybook file named:
      </p>
      <Source
        language="bash"
        code={`{component-name}-stories.tsx`}
      />
      <p className={DESCRIPTION_CLASS}>
        This is required for automatic documentation generation in Storybook.
        <br />
        <br />
        Additionally, there is a root <code>index.ts</code> file inside the{' '}
        <code>src/components</code> folder. This file serves as the{' '}
        <strong>main entry point</strong> for the library and is responsible for re-exporting all
        components:
      </p>
      <Source
        language="typescript"
        code={`export { AccordionGroup, AccordionItem } from './Accordion';
export { default as Alert } from './Alert';
export { default as Badge } from './Badge';
export { default as Breadcrumb } from './Breadcrumb';
export { default as Button } from './Button';
// ...and so on
`}
      />
      <p className={DESCRIPTION_CLASS}>
        This allows users to import components directly from the library without needing to specify
        the full path to each component.
      </p>
      <Source
        language="typescript"
        code={`import { Button, Alert } from '@dgshahr/uikit';`}
      />
      <p className={DESCRIPTION_CLASS}>Example component folder:</p>
      <Source
        language="text"
        code={`src/
├── components/
│   └── Button/
│       ├── Button.stories.tsx      # Required: Storybook file for documentation
│       ├── index.tsx               # Required: entry point for build (contains button component in this case)
│       └── variant.ts              # Optional: additional files for the component
│
│   └── index.ts                    # Required: main entry point for the library
`}
      />

      <Subheading>Running the UI Kit</Subheading>
      <p className={DESCRIPTION_CLASS}>Start Storybook to view components locally:</p>
      <Source
        language="bash"
        code={`npm run dev`}
      />

      <Subheading>Committing Changes</Subheading>
      <p className={DESCRIPTION_CLASS}>
        When committing changes, please follow the{' '}
        <strong>
          <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a>
        </strong>{' '}
        format. This helps in generating a changelog and understanding the nature of changes made.
        <br />
        Example commit messages:
      </p>
      <Source
        language="bash"
        code={`feat(button): add loading state
fix(alert): correct close button padding
docs(colors): update color override example`}
      />

      <Subheading>Building for Production</Subheading>
      <p className={DESCRIPTION_CLASS}>
        To build the UI Kit for production, run the following command:
      </p>
      <Source
        language="bash"
        code={`npm run build`}
      />
      <p className={DESCRIPTION_CLASS}>
        This will create a <code>dist</code> folder containing the production-ready files.
        <br />
        This command will also check <code>exports</code> in the <code>package.json</code> file to
        ensure that all components are properly exported with their respective paths, and if any
        component is missing, it will add it to the <code>exports</code> section. This scrip is
        located in the <code>/scripts/generate-exports.js</code>
      </p>

      <Subheading>Submitting a Pull Request</Subheading>
      <p className={DESCRIPTION_CLASS}>Once you&apos;re happy with your changes:</p>
      <ol className={DESCRIPTION_CLASS}>
        <li>1. Push your branch to GitHub.</li>
        <li>2. Open a Pull Request against the `develop` branch.</li>
        <li>3. Provide a clear description of the changes, including source code if applicable.</li>
        <li>4. Keep your PRs small and focused.</li>
      </ol>

      <Subheading>Need Help?</Subheading>
      <p className={DESCRIPTION_CLASS}>
        If you have questions or ideas, feel free to open an issue or start a discussion.
      </p>
    </>
  );
};

export default ContributingDocument;
