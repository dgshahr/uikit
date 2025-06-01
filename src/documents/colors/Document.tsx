// @ts-expect-error no types for colors object
import DgThemeColors from '@dgshahr/dg-theme-tailwind-plugin/dist/constants/colors';
import { Source, Title, Subheading, Unstyled } from '@storybook/blocks';
import clsx from 'clsx';
import type { FC } from 'react';
import { DESCRIPTION_CLASS } from '../constants';

import '@/src/styles.css';

function getRgbValue(color: string) {
  const match = RegExp(/var\(--dgs-color-[^)]+\)/).exec(color);
  return match ? `rgb(${match[0]})` : '';
}

const ColorDocument: FC = () => {
  return (
    <>
      <Title>🎨 Colors</Title>

      <p className={DESCRIPTION_CLASS}>
        DGS UI Kit includes a well-defined set of default colors that represent the brand&apos;s
        design language, including primary, secondary, gray and ... palettes. These colors are used
        consistently across all components to ensure visual harmony and accessibility. The color
        system is fully customizable. You can override the default colors by redefining the CSS
        variables, allowing you to adapt the UI kit to match your project&apos;s unique branding
        requirements.
      </p>
      <Subheading>Default Colors</Subheading>
      <Unstyled>
        <div className="dgsuikit:flex dgsuikit:gap-4">
          <div className="dgsuikit:flex dgsuikit:flex-col dgsuikit:shrink-0 dgsuikit:gap-4">
            <div className="dgsuikit:flex-1 dgsuikit:font-p1-medium dgsuikit:font-bold">
              Colors/Shades
            </div>
            {Object.keys(DgThemeColors).map((colorName) => (
              <div
                key={colorName}
                className="dgsuikit:flex-1 dgsuikit:font-p1-medium dgsuikit:font-bold"
              >
                {colorName}
              </div>
            ))}
          </div>
          <div className="dgsuikit:flex dgsuikit:flex-col dgsuikit:gap-4">
            <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:gap-4">
              {Object.keys(DgThemeColors.primary).map((colorShade) => (
                <div
                  key={colorShade}
                  className="dgsuikit:flex-1 dgsuikit:font-p1-medium dgsuikit:text-center"
                >
                  {colorShade}
                </div>
              ))}
            </div>
            {Object.keys(DgThemeColors).map((colorName) => (
              <div
                key={colorName}
                className="dgsuikit:flex dgsuikit:items-center dgsuikit:gap-4"
              >
                {Object.keys(DgThemeColors[colorName]).map((colorShade) => (
                  <div
                    key={DgThemeColors[colorName][colorShade]}
                    className="dgsuikit:flex-1 dgsuikit:size-7 dgsuikit:rounded-lg"
                    style={{
                      backgroundColor: getRgbValue(DgThemeColors[colorName][colorShade]),
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className={clsx('dgsuikit:mt-10', DESCRIPTION_CLASS)}>
          Every color in the palette includes 10 shades, with 50 being the lightest, and 900 being
          the darkest:
        </p>
        <div className="dgsuikit:flex dgsuikit:gap-4 dgsuikit:justify-center dgsuikit:my-5">
          {Object.keys(DgThemeColors.primary).map((colorShade) => (
            <div
              key={colorShade}
              className="dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:font-p2-medium"
            >
              <div
                className="dgsuikit:size-7 dgsuikit:rounded-lg"
                style={{
                  backgroundColor: getRgbValue(DgThemeColors.primary[colorShade]),
                }}
              />
              {colorShade}
            </div>
          ))}
        </div>
      </Unstyled>
      <Subheading>How to override colors</Subheading>
      <p className={DESCRIPTION_CLASS}>
        To override the default colors, you can redefine the CSS variables in your global CSS file.
        this will allow you to customize the colors used in the DGS UI Kit components. The color
        variables template is:{' '}
        <code>{`--dgs-color-{color-name}-{color-shade}: {rgb numbers}`}</code>
        <br />
        For example, to change the primary-100 color to a custom value, you can add the following
        CSS to your global CSS file:
        <br />
        <Source
          language="css"
          code={`:root {
        --dgs-color-primary-100: 16 185 143;
}`}
        />
        <br />
        This will change the primary color to a custom value. You can do this for any color in the
        DGS UI Kit. Just make sure to use the correct color name and shade in the variable name.
        <br />
        <br />
        <strong>Note:</strong> The DGS UI Kit uses rgb numbers for colors, so make sure to use the
        correct format when overriding the colors.
      </p>
    </>
  );
};

export default ColorDocument;
