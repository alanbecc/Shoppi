/**
 * this function calculates the total price of new order
 * @param {Array} products  cartProducts: Array of objects
 * @returns {Number} sum: Total price of all products in the cart
 */

export const totalPrice = (products) =>{
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum

}