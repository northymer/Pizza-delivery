export const getItemAmount = (id, cart) => {
    return cart.find(item => item.id === id)
        ? cart.find(item => item.id === id).amount
        : null
}