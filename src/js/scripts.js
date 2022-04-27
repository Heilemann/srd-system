const abilitymodifier = {
  3: -3,
  4: -2,
  5: -2,
  6: -1,
  7: -1,
  8: -1,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: +1,
  14: +1,
  15: +1,
  16: +2,
  17: +2,
  18: +3,
}

const hooks = {
  updateValues: values => {
    values['strength-modifier'] = abilitymodifier[values['strength']]
    console.log(
      'updateValues',
      values['strength-modifier'],
      '<--',
      values['strength'],
    )
    return values
  },
  test: string => {
    alert(string)
  },
}

return hooks // eslint-disable-line
