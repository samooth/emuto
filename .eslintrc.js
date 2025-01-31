module.exports = {
  extends: 'standard',
  plugins: ['jest', 'flowtype'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  rules: {
    'no-console': 'error',
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [2, 'never'],
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/object-type-delimiter': [2, 'comma'],
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': [
      2,
      'always',
      {
        annotateUndefined: 'never',
      },
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [2, 'always'],
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]+)+Type$'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
  },
  env: {
    'jest/globals': true,
    'jest': true,
  },
  parser: '@babel/eslint-parser',
};
