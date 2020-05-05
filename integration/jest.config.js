module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.int\\.js$',
  setupFilesAfterEnv: ['./setupTests.js'],
  reporters: ['default']
}
