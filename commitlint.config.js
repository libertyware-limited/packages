module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-max-length': [2, 'always', 120],
    'scope-enum': [2, 'always', []],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'release',
        'revert',
        'style',
        'test'
      ]
    ]
  }
};