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

const attributes = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
]

const calculateAttributeModifier = attribute => {
  const attributeValue = parseInt(attribute.value, 10)
  const attributeModifier = Math.floor((attributeValue - 10) / 2)
  console.log(attribute, attributeModifier)
  // return attributeModifier
}

const hooks = {
  updateValues: values => {
    attributes.forEach(attribute => {
      const attributeModifier = calculateAttributeModifier(values[attribute])
      // values[attribute].modifier = abilitymodifier[attributeModifier]
    })
    values['strengthModifier'] = abilitymodifier[values['strength']]
    return values
  },
}

return hooks // eslint-disable-line
