import conventionalCommit from './conventionalCommit.json' assert { type: 'json' };

const typesEnum = Object.keys(conventionalCommit.types);
const scopesEnum = Object.keys(conventionalCommit.scopes);

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typesEnum],
    'scope-case': [2, 'always', ['camel-case']],
    'scope-enum': [2, 'always', scopesEnum],
    'scope-empty': [1, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [
      2,
      'always',
      ['sentence-case', 'start-case', 'pascal-case', 'camel-case', 'lower-case'],
    ],
    'header-max-length': [1, 'always', 72],
  },
};
