module.exports = (storybookComponentId, brand = 'comphealth', knobs = {}) => {
  let basePath = `${process.env.TEST_URL}/iframe.html?id=${storybookComponentId}&contexts=Theme=${encodeURIComponent(brand)}`

  Object.keys(knobs).forEach(knobKey => {
    basePath += `&knob-${encodeURIComponent(knobKey)}=${encodeURIComponent(knobs[knobKey])}`
  })

  return basePath
}
