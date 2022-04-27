const hooks = {
  updateValues: values => {
    console.log('updateValues', values)
    return values
  },
  test: string => {
    alert(string)
  },
}

return hooks // eslint-disable-line
