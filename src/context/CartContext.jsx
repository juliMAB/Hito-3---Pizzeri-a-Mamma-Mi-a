import { createContext, useContext, useState } from 'react'
import { pizzaCart as initialPizzaCart } from '../pizzas'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialPizzaCart)

  const addToCart = (pizza) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === pizza.id)
      if (exists) {
        return prev.map(p => p.id === pizza.id ? { ...p, count: p.count + 1 } : p)
      }
      return [...prev, { ...pizza, count: 1 }]
    })
  }

  const increase = (id) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, count: p.count + 1 } : p))
  }

  const decrease = (id) => {
    setCart(prev =>
      prev
        .map(p => p.id === id ? { ...p, count: Math.max(0, p.count - 1) } : p)
        .filter(p => p.count > 0)
    )
  }

  const calculateTotal = () => cart.reduce((total, p) => total + p.price * p.count, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, increase, decrease, calculateTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
