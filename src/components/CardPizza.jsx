import { formatPrice } from '../utils/formatters'
import { useCart } from '../context/CartContext'

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addToCart } = useCart()
  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3 h-100">
        <div className="d-flex align-items-center gap-3">
          <img src={img} alt={name} style={{width: 100, height: 80, objectFit: 'cover', borderRadius: 8}} />

          <div className="flex-grow-1">
            <div className="d-flex justify-content-between">
              <h5 className="mb-1">Pizza {name}</h5>
              <div className="text-end"><strong>{formatPrice(price)}</strong></div>
            </div>

            <ul className="list-unstyled mb-2" style={{margin: 0, padding: 0}}>
              {ingredients.map((ingredient, index) => (
                <li key={index} className="small text-muted text-capitalize">• {ingredient}</li>
              ))}
            </ul>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => alert(desc || name)}
                >Ver</button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => addToCart({ id, name, price, ingredients, img })}
                >Añadir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza