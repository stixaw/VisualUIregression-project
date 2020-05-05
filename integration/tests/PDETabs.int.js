const brands = require('../utils/brands')
const createStorybookUrl = require('../utils/createStorybookUrl')

describe('PDETabs', () => {
  let selector

  describe.each(brands)('as %s', brand => {
    describe('Default view', () => {
      const storybookComponentId = 'pde-tabs--default-tabs'

      beforeAll(async () => {
        const path = createStorybookUrl(storybookComponentId, brand)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-tabs')
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot()
      })
    })

    describe('With Icons', () => {
      const storybookComponentId = 'pde-tabs--with-icons'

      beforeAll(async () => {
        const path = createStorybookUrl(storybookComponentId, brand)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-tabs')
      })

    it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot()
      })
    })
  })
})
