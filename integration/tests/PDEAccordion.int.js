const brands = require('../utils/brands')
const createStorybookUrl = require('../utils/createStorybookUrl')

describe('PDEAccordion', () => {
  let selector

  describe.each(brands)('as %s', brand => {
    describe('Default Accordion', () => {
      const storybookComponentId = 'pde-accordion--default-accordion'

      describe('expandable and open', () => {
        beforeAll(async () => {
          const knobs = {
            isExpandable: true,
            isOpen: true
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })
          await page.setViewport({ height: 700, width: 700 })
          selector = await page.$('.pde-accordion')
        })

        it('visually looks correct', async () => {
          // APIs from jest-puppeteer
          const image = await selector.screenshot()

          // API from jest-image-snapshot
          expect(image).toMatchImageSnapshot()
        })
      })

      describe('expandable and closed', () => {
        beforeAll(async () => {
          const knobs = {
            isExpandable: true,
            isOpen: false
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })
          await page.setViewport({ height: 700, width: 700 })
          selector = await page.$('.pde-accordion')
        })

        it('visually looks correct', async () => {
          // APIs from jest-puppeteer
          const image = await selector.screenshot()

          // API from jest-image-snapshot
          expect(image).toMatchImageSnapshot()
        })
      })

      describe('not expandable', () => {
        beforeAll(async () => {
          const knobs = {
            isExpandable: false
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })
          await page.setViewport({ height: 700, width: 700 })

          selector = await page.$('.pde-accordion')
        })

        it('visually looks correct', async () => {
          // APIs from jest-puppeteer
          const image = await selector.screenshot()

          // API from jest-image-snapshot
          expect(image).toMatchImageSnapshot()
        })
      })
    })

    describe('Action Panel Accordion', () => {
      const storybookComponentId = 'pde-accordion--action-panel-accordion'

      describe('expandable and open', () => {
        beforeAll(async () => {
          const knobs = {
            isExpandable: true,
            isOpen: true
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })
          await page.setViewport({ height: 700, width: 700 })
          selector = await page.$('.pde-accordion')
        })

        it('visually looks correct', async () => {
          // APIs from jest-puppeteer
          const image = await selector.screenshot()

          // API from jest-image-snapshot
          expect(image).toMatchImageSnapshot()
        })
      })

      describe('expandable and closed', () => {
        beforeAll(async () => {
          const knobs = {
            isExpandable: true,
            isOpen: false
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })
          await page.setViewport({ height: 700, width: 700 })
          selector = await page.$('.pde-accordion')
        })

        it('visually looks correct', async () => {
          // APIs from jest-puppeteer
          const image = await selector.screenshot()

          // API from jest-image-snapshot
          expect(image).toMatchImageSnapshot()
        })
      })

      describe('not expandable', () => {
        beforeAll(async () => {
          const knobs = {
            isExpandable: false
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })
          await page.setViewport({ height: 700, width: 700 })

          selector = await page.$('.pde-accordion')
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
})
