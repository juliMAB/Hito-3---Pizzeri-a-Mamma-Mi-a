const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="mb-2">
              © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
            </p>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-2">
                <p className="small text-light mb-1">
                  📍 Santiago, Chile
                </p>
              </div>
              <div className="col-md-4 mb-2">
                <p className="small text-light mb-1">
                  📞 +56 9 1234 5678
                </p>
              </div>
              <div className="col-md-4 mb-2">
                <p className="small text-light mb-1">
                  📧 contacto@mammamia.cl
                </p>
              </div>
            </div>
            <hr className="my-3 border-light opacity-25" />
            <p className="small text-light mb-0">
              Hecho con ❤️ usando React + Vite + Bootstrap | Las mejores pizzas de la ciudad
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer