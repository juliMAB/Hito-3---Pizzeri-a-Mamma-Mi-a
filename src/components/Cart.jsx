import { formatPrice } from '../utils/formatters'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart: pizzaCart, increase, decrease, calculateTotal } = useCart()

  return (
    <div className="container py-5">
      <h2 className="mb-4">🛒 Carrito</h2>

      {pizzaCart.length === 0 ? (
        <div className="alert alert-light text-center">Tu carrito está vacío</div>
      ) : (
        <div className="list-group">
                {pizzaCart.map((pizza) => (
            <div key={pizza.id} className="list-group-item d-flex align-items-center gap-3">
              <img src={pizza.img} alt={pizza.name} style={{width: 100, height: 80, objectFit: 'cover', borderRadius: 8}} />

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="mb-1">Pizza {pizza.name}</h5>
                    <small className="text-muted d-block">{pizza.ingredients.join(', ')}</small>
                  </div>
                  <div className="text-end">
                    <div className="mb-1"><strong>{formatPrice(pizza.price)}</strong></div>
                    <div className="text-muted small">Subtotal: {formatPrice(pizza.price * pizza.count)}</div>
                  </div>
                </div>

                <div className="mt-2 d-flex align-items-center gap-2">
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => decrease(pizza.id)}>-</button>
                  <div className="px-3 py-1 border rounded">{pizza.count}</div>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => increase(pizza.id)}>+</button>
                </div>
              </div>
            </div>
          ))}

          <div className="list-group-item d-flex justify-content-between align-items-center mt-3">
            <div>
              <strong>Total</strong>
              <div className="text-muted small">{pizzaCart.reduce((total, p) => total + p.count, 0)} items</div>
            </div>
            <div className="text-end">
              <h4 className="mb-1">{formatPrice(calculateTotal())}</h4>
              <button className="btn btn-primary btn-sm">Pagar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart