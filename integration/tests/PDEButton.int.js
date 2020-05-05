const brands = require('../utils/brands')
const createStorybookUrl = require('../utils/createStorybookUrl')

describe('PDEButton', () => {
  let selector, customDiffConfig
  const storybookComponentId = 'pde-button--default-button'

  beforeAll(() => {
      customDiffConfig = {
        failureThreshold: 0.01,
        failureThresholdType: 'percent'
      }
  })

  describe.each(brands)('as %s', brand => {
    describe('Not Disabled, Not Loading', () => {
      beforeAll(async () => {
        const knobs = {
          Disabled: false,
          'Is Loading': false
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })
        await page.setViewport({ height: 700, width: 700 })
        selector = await page.$('.pde-button')
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot()
      })
    })

    describe('Disabled, Not Loading', () => {
      beforeAll(async () => {
        const knobs = {
          Disabled: true,
          'Is Loading': false
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-button')
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot()
      })
    })

    //this test will have inconsistencies based on the loading symbol and its position at the time of the snapshot
    // please review the diff_output and run make test again if it still shows different do a make test-update to accept
    describe('Not Disabled, Loading', () => {
      beforeAll(async () => {
        const knobs = {
          Disabled: false,
          'Is Loading': true
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-button')
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot(customDiffConfig)
      })
    })

    describe('Primary', () => {
      beforeAll(async () => {
        const knobs = {
          Styles: 'primary'
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-button')
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot(customDiffConfig)
      })
    })

    describe('Secondary', () => {
      beforeAll(async () => {
        const knobs = {
          Styles: 'secondary'
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-button')
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot(customDiffConfig)
      })
    })

    describe('Default Size', () => {
      beforeAll(async () => {
        const knobs = {
          Size: 'default'
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-button')
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot(customDiffConfig)
      })
    })

    describe('Large Size', () => {
      beforeAll(async () => {
        const knobs = {
          Size: 'large'
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-button')
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot(customDiffConfig)
      })
    })
  })
})
