import CardPizza from './CardPizza'
import { pizzas } from '../pizzas'

const Home = () => {
  return (
    <div className="min-vh-100" style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      {/* Hero Banner */}
      <div className="container-fluid p-0">
        <div className="position-relative">
          <div className="row g-0">
            <div className="col-12">
              <div className="position-relative" style={{height: '500px', overflow: 'hidden'}}>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" 
                  className="w-100 h-100" 
                  alt="Pizza Hero" 
                  style={{
                    objectFit: 'cover',
                    filter: 'brightness(0.4) contrast(1.2)'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))'
                }}></div>
                
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
                  <div className="fade-in">
                    <h1 className="display-2 fw-bold mb-4" style={{
                      textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                      letterSpacing: '2px'
                    }}>
                      🍕 Pizzería Mamma Mía
                    </h1>
                    <p className="fs-3 mb-4 opacity-90" style={{
                      textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
                    }}>
                      ¡Las mejores pizzas artesanales de la ciudad!
                    </p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                      <button className="btn btn-light btn-lg px-5 py-3" style={{
                        borderRadius: '25px',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease'
                      }}>
                        <i className="fas fa-pizza-slice me-2"></i>
                        Ver Menú
                      </button>
                      <button className="btn btn-outline-light btn-lg px-5 py-3" style={{
                        borderRadius: '25px',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        border: '2px solid white',
                        transition: 'all 0.3s ease'
                      }}>
                        <i className="fas fa-phone me-2"></i>
                        Ordenar Ahora
                      </button>
                    </div>
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
                  <div className="text-white text-center fade-in" style={{animationDelay: '1s'}}>
                    <small className="d-block mb-2 opacity-75">Desliza para ver nuestras pizzas</small>
                    <i className="fas fa-chevron-down" style={{
                      animation: 'bounce 2s infinite',
                      fontSize: '1.5rem'
                    }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pizzas Section */}
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="d-inline-block position-relative">
            <h2 className="display-4 fw-bold mb-3" style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Nuestras Especialidades
            </h2>
            <div className="position-absolute bottom-0 start-50 translate-middle-x" style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              borderRadius: '2px'
            }}></div>
          </div>
          <p className="fs-5 text-muted mt-4 mx-auto" style={{maxWidth: '600px'}}>
            Cada pizza está elaborada con ingredientes frescos y masa artesanal, 
            horneada a la perfección para brindarte una experiencia única.
          </p>
        </div>

        {/* Features */}
        <div className="row mb-5 g-4">
          <div className="col-md-4 text-center">
            <div className="p-4">
              <div className="mb-3">
                <i className="fas fa-leaf text-success" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold">Ingredientes Frescos</h5>
              <p className="text-muted">Solo utilizamos los mejores ingredientes del mercado</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="p-4">
              <div className="mb-3">
                <i className="fas fa-fire text-danger" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold">Horno de Leña</h5>
              <p className="text-muted">Cocción tradicional que realza el sabor auténtico</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="p-4">
              <div className="mb-3">
                <i className="fas fa-clock text-primary" style={{fontSize: '3rem'}}></i>
              </div>
              <h5 className="fw-bold">Entrega Rápida</h5>
              <p className="text-muted">Tu pizza caliente en menos de 30 minutos</p>
            </div>
          </div>
        </div>

        {/* Pizzas Grid */}
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <div key={pizza.id} className="fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home