/** @type {import("@svgr/babel-plugin-transform-svg-component").Template} */

const svgrTemplate = (variables, { tpl }) => {
  let componentName = variables.componentName.startsWith('Svg')
    ? variables.componentName.slice(3)
    : variables.componentName;
  componentName += 'Icon';

  return tpl`
  ${variables.imports};
  
  ${variables.interfaces};
  
  const ${componentName} = (${variables.props}) => (
    ${variables.jsx}
  );
  
  ${[
    {
      type: variables.exports[0].type ?? 'ExportDefaultDeclaration',
      declaration: {
        type: variables.exports[0].declaration.type ?? 'Identifier',
        name: componentName,
      },
    },
  ]};
  `;
};

// eslint-disable-next-line no-undef
module.exports = svgrTemplate;
