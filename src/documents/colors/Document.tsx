// @ts-expect-error no types for colors object
import DgThemeColors from '@dgshahr/dg-theme-tailwind-plugin/src/constants/colors';
import { Source, Title, Meta, Subheading, Unstyled } from '@storybook/blocks';
import type { FC } from 'react';

function getRgbValue(color: string) {
  const match = RegExp(/var\(--dgs-color-[^)]+\)/).exec(color);
  return match ? `rgb(${match[0]})` : '';
}

const ColorDocument: FC = () => {
  return (
    <>
      <Meta title="Getting Started/Colors" />

      <Title>🎨 Colors</Title>

      <p className="!dgs-ui-kit-font-p1-medium">
        DGS UI Kit includes a well-defined set of default colors that represent the brand&apos;s
        design language, including primary, secondary, gray and ... palettes. These colors are used
        consistently across all components to ensure visual harmony and accessibility. The color
        system is fully customizable. You can override the default colors by redefining the CSS
        variables, allowing you to adapt the UI kit to match your project&apos;s unique branding
        requirements.
      </p>
      <Subheading>Default Colors</Subheading>
      <Unstyled>
        <div className="dgs-ui-kit-flex dgs-ui-kit-gap-4">
          <div className="dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-shrink-0 dgs-ui-kit-gap-4">
            <div className="dgs-ui-kit-flex-1 dgs-ui-kit-font-p1-medium dgs-ui-kit-font-bold">
              Colors/Shades
            </div>
            {Object.keys(DgThemeColors).map((colorName) => (
              <div
                key={colorName}
                className="dgs-ui-kit-flex-1 dgs-ui-kit-font-p1-medium dgs-ui-kit-font-bold"
              >
                {colorName}
              </div>
            ))}
          </div>
          <div className="dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-4">
            <div className="dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-4">
              {Object.keys(DgThemeColors.primary).map((colorShade) => (
                <div
                  key={colorShade}
                  className="dgs-ui-kit-flex-1 dgs-ui-kit-font-p1-medium dgs-ui-kit-text-center"
                >
                  {colorShade}
                </div>
              ))}
            </div>
            {Object.keys(DgThemeColors).map((colorName) => (
              <div
                key={colorName}
                className=" dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-4"
              >
                {Object.keys(DgThemeColors[colorName]).map((colorShade) => (
                  <div
                    key={DgThemeColors[colorName][colorShade]}
                    className="dgs-ui-kit-flex-1 dgs-ui-kit-size-7 dgs-ui-kit-rounded-lg"
                    style={{
                      backgroundColor: getRgbValue(DgThemeColors[colorName][colorShade]),
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="!dgs-ui-kit-font-p1-medium dgs-ui-kit-mt-10">
          Every color in the palette includes 10 shades, with 50 being the lightest, and 900 being
          the darkest:
        </p>
        <div className="dgs-ui-kit-flex dgs-ui-kit-gap-4 dgs-ui-kit-justify-center dgs-ui-kit-my-5">
          {Object.keys(DgThemeColors.primary).map((colorShade) => (
            <div
              key={colorShade}
              className="dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-items-center dgs-ui-kit-font-p2-medium"
            >
              <div
                className="dgs-ui-kit-size-7 dgs-ui-kit-rounded-lg"
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
      <p className="!dgs-ui-kit-font-p1-medium">
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
