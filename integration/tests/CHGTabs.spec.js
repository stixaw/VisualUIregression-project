/* eslint-disable no-undef */
describe('CHGTabs', () => {
  describe('default', () => {
    const path = process.env.TEST_URL + '/iframe.html?id=chg-tabs--default'

    beforeAll(async () => {
      await page.goto(path)
      await page.setViewport({ height: 100, width: 600 })
    })

    it('visually looks correct', async () => {
      // APIs from jest-puppeteer
      const image = await page.screenshot()

      // API from jest-image-snapshot
      expect(image).toMatchImageSnapshot()
    })
  })

  describe('With Icons', () => {
    const path = process.env.TEST_URL + '/iframe.html?id=chg-tabs--with-icons'

    beforeAll(async () => {
      await page.goto(path)
      await page.setViewport({ height: 100, width: 600 })
    })

  it('visually looks correct', async () => {
      // APIs from jest-puppeteer
      const image = await page.screenshot()

      // API from jest-image-snapshot
      expect(image).toMatchImageSnapshot()
    })
  })

  describe('Empty Tabs', () => {
    const path = process.env.TEST_URL + '/iframe.html?id=chg-tabs--empty-tabs'

    beforeAll(async () => {
      await page.goto(path)
      await page.setViewport({ height: 100, width: 600 })
    })

    it('visually looks correct', async () => {
      // APIs from jest-puppeteer
      const image = await page.screenshot()

      // API from jest-image-snapshot
      expect(image).toMatchImageSnapshot()
    })
  })
})
