const brands = require('../utils/brands')
const createStorybookUrl = require('../utils/createStorybookUrl')

describe('PDEList', () => {
  let element
  const storybookComponentId = 'pde-list--list'
  let selector

  beforeAll(() => {
    selector = '#list'
  })

  describe.each(brands)('as %s', brand => {

    describe('Compact sizing', () => {
      beforeAll(async () => {
        const knobs = {
          Size: 'compact'
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        element = await page.$(selector)
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await element.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot()
      })
    })

    describe('Default sizing', () => {
      beforeAll(async () => {
        const path = createStorybookUrl(storybookComponentId, brand)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        element = await page.$(selector)
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await element.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot()
      })
    })
  })
})
