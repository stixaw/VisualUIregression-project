const { configureToMatchImageSnapshot } = require('jest-image-snapshot')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  failureThreshold: 0.02,
  failureThresholdType: 'percent'
})

expect.extend({ toMatchImageSnapshot })
