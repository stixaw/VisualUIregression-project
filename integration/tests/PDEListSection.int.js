const brands = require('../utils/brands')
const createStorybookUrl = require('../utils/createStorybookUrl')

describe('PDEListSectionHeader', () => {
  let element
  let sectionHeaderStorybookComponentId
  let sectionHeaderSelector
  let listWithSectionsStorybookComponentId
  let listWithSectionsSelector

  beforeAll(() => {
    sectionHeaderStorybookComponentId = 'pde-list-section--list-section-header'
    sectionHeaderSelector = '.list__section'
    listWithSectionsStorybookComponentId = 'pde-list-section--list-with-sections'
    listWithSectionsSelector = '#list'
  })

  describe.each(brands)('as %s', brand => {
    describe('List Section Header', () => {
      beforeAll(async () => {
        const path = createStorybookUrl(sectionHeaderStorybookComponentId, brand)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        element = await page.$(sectionHeaderSelector)
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await element.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot()
      })
    })

    describe('Compact Sizing: List With Sections', () => {
      beforeAll(async () => {
        const knobs = {
          Size: 'compact'
        }
        const path = createStorybookUrl(listWithSectionsStorybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        element = await page.$(listWithSectionsSelector)
      })

      it('visually looks correct', async () => {
        // APIs from jest-puppeteer
        const image = await element.screenshot()

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot()
      })
    })

    describe('Default Sizing: List With Sections', () => {
      beforeAll(async () => {
        const knobs = {
          Size: 'default'
        }
        const path = createStorybookUrl(listWithSectionsStorybookComponentId, brand, knobs)

        await page.goto(path, {
          waitUntil: 'networkidle2'
        })

        await page.setViewport({ height: 700, width: 700 })

        element = await page.$(listWithSectionsSelector)
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
