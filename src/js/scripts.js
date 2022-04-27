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

const calculateAttributeModifier = value => {
  const attributeValue = parseInt(value, 10)

  if (attributeValue < 3) return '-3'
  if (attributeValue > 18) return '+3'
  if (typeof attributeValue === 'number') return abilitymodifier[attributeValue]
  return ''
}

const hooks = {
  updateValues: values => {
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

    return values
  },
}

return hooks
