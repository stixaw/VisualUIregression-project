## Visual UI Integration Testing

Automated Visual Testing is a quality assurance process meant to automatically verify that a UI visually appears as intended. There are many alternative names for this process, such as Visual Regression Testing, Visual Validation Testing, Visual UI Testing, or Visual Testing, but in all cases we’re talking about confirming the thing your users will see—the actual pixels—without caring about how it’s generated.

## Usage:

### Creating a snapshot:

The verbage is very simple:
``` const image = await page.screenshot()``

the expect is as simple as a jest html snapshot:
```expect(image).toMatchImageSnapshot()```


### Running the integration tests:
from the root of the project in terminal:
``` make test ```

This will run the storybook in the docker image for story book and then a second docker image for jest-puppeteer to run the specs.

The first time we run a test it will create a new image snapshot to use as the baseline for subsequent test runs. The snapshots are stored in the integration/tests/__image_snapshots__

After the approved snapshots are in the project for the component if there are changes to the snapshot detected it will put a new snapshot in the integration/tests/__image_snapshots__/__diff_output__ directory for your review

### Differences found
If differences are found they will be put in integration/tests/__image_snapshots__/__diff_output__

![alt text](https://miro.medium.com/max/7422/1*bH9xj6VoOyo7KNi3k_oJDQ.png)

left side is current approved snapshot
middle is the differences found by the threshold we set
right side is new snapshot

## Example test file:

this is a visual regression test for CHGButton:
it is similar to snapshot testing already available in jest.

```
/* eslint-disable no-undef */
const path = process.env.TEST_URL + '/iframe.html?id=chg-button--default'

describe('CHGButton', () => {

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
```
