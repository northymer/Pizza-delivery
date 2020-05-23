export const getItemAmount = (id, cart) => {
  return cart.find(item => item.id === id)
    ? cart.find(item => item.id === id).amount
    : null
}

export const getTitleItem = (typeItem) => {
  switch (typeItem) {
  case 'pizza':
    return 'Pizza'
  default:
    return ''
  }
}

export const rounded = (number) => {
  return number.toFixed(2)
}