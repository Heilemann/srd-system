/**
 * Hooks allo the frame to listen to updates from the application
 *
 * Hooks are fired the by the application when certain events occur. The `hooks` object is
 * a map of hooks that are fired by the application, with each key being the name of the
 * hook, and the value being either a function, or an array of functions, to be called when
 * the hook is fired.
 *
 * `beforeUpdateValues`
 * - Fires after the values for the loaded document are changed, but before they are hydrated into the document.
 * - The `values` object is the values that will be hydrated into the document.
 * - Returned should be the values that will be hydrated into the document.
 *
 */
const abilitymodifier = {
  3: '-3',
  4: '-2',
  5: '-2',
  6: '-1',
  7: '-1',
  8: '-1',
  9: '0',
  10: '0',
  11: '0',
  12: '0',
  13: '+1',
  14: '+1',
  15: '+1',
  16: '+2',
  17: '+2',
  18: '+3',
}

const doLookup = value => {
  const attributeValue = parseInt(value, 10)
  const capValue = Math.max(Math.min(attributeValue, 18), 3)

  if (typeof attributeValue === 'number') {
    return abilitymodifier[capValue]
  } else {
    return ''
  }
}

const calculateAttributeModifier = () => {
  const attributes = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma',
  ]

  attributes.forEach(attribute => {
    const attributeModifier = calculateAttributeModifier(values[attribute])
    values[attribute + 'Modifier'] = attributeModifier
  })
  debugger
  return values
}

const hooks = {
  updateValues: calculateAttributeModifier,
}
