const brands = require('../utils/brands')
const createStorybookUrl = require('../utils/createStorybookUrl')

describe('PDEActionPanelLink', () => {
  let selector
  const storybookComponentId = 'pde-action-panel-link--default-action-panel-link'

  describe.each(brands)('as %s', brand => {
    describe('Show Icon', () => {
      beforeAll(async () => {
        const knobs = {
          'Show Icon': true
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-action-panel-link')
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await selector.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot()
      })
    })

    describe('Hide Icon', () => {
      beforeAll(async () => {
        const knobs = {
          'Show Icon': false
        }

        const path = createStorybookUrl(storybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        selector = await page.$('.pde-action-panel-link')
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
