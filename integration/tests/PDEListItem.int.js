const brands = require('../utils/brands')
const createStorybookUrl = require('../utils/createStorybookUrl')

describe('PDEListItem', () => {
  let element
  let selector

  beforeAll(() => {
    selector = '.list__item'
  })

  describe.each(brands)('as %s', brand => {
    describe('With Icons', () => {
      const storybookComponentId = 'pde-list-item--with-icons'

      describe('Not Selected', () => {
        beforeAll(async () => {
          const knobs = {
            Selected: false
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

      describe('Selected', () => {
        beforeAll(async () => {
          const knobs = {
            Selected: true
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })

          await page.setViewport({ height: 700, width: 700 })

          element = await page.$('.list__item.list__item--selected')
        })

        it('visually looks correct', async () => {
          // APIs from jest-puppeteer
          const image = await element.screenshot()

          // API from jest-image-snapshot
          expect(image).toMatchImageSnapshot()
        })
      })

      describe('Hovered', () => {
        beforeAll(async () => {
          const knobs = {
            Selected: false
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })

          await page.setViewport({ height: 700, width: 700 })

          element = await page.$(selector)
          await page.hover(selector)
        })

        it('visually looks correct', async () => {
          // APIs from jest-puppeteer
          const image = await element.screenshot()

          // API from jest-image-snapshot
          expect(image).toMatchImageSnapshot()
        })
      })

      describe('Compact Sizing', () => {
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

      describe('Default Sizing', () => {
        beforeAll(async () => {
          const knobs = {
            Size: 'default'
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
    })

    describe('With Text', () => {
      const storybookComponentId = 'pde-list-item--with-text'

      describe('Not Selected', () => {
        beforeAll(async () => {
          const knobs = {
            Selected: false
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

      describe('Selected', () => {
        beforeAll(async () => {
          const knobs = {
            Selected: true
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })

          await page.setViewport({ height: 700, width: 700 })

          element = await page.$('.list__item.list__item--selected')
        })

        it('visually looks correct', async () => {
          // APIs from jest-puppeteer
          const image = await element.screenshot()

          // API from jest-image-snapshot
          expect(image).toMatchImageSnapshot()
        })
      })

      describe('Hovered', () => {
        beforeAll(async () => {
          const knobs = {
            Selected: false
          }

          const path = createStorybookUrl(storybookComponentId, brand, knobs)

          await page.goto(path, {
            waitUntil: 'networkidle2'
          })

          await page.setViewport({ height: 700, width: 700 })

          element = await page.$(selector)
          await page.hover(selector)
        })

        it('visually looks correct', async () => {
          // APIs from jest-puppeteer
          const image = await element.screenshot()

          // API from jest-image-snapshot
          expect(image).toMatchImageSnapshot()
        })
      })

      describe('Compact Sizing', () => {
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

      describe('Default Sizing', () => {
        beforeAll(async () => {
          const knobs = {
            Size: 'default'
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
    })
  })
})
