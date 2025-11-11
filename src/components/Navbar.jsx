import { useState } from 'react'
import { formatPrice } from '../utils/formatters'
import { useAuth } from '../hooks/useAuth'
import Login from './Login'
import Register from './Register'

const Navbar = () => {
  const total = 25000;
  const { user, logout } = useAuth()
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Brand */}
          <span className="navbar-brand mb-0 h1">🍕 Pizzería Mamma Mía!</span>
          
          {/* Toggle button for mobile */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Navigation items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav me-auto">
              <button className="btn btn-outline-light me-2">
                🍕 Home
              </button>
            </div>
            
            {/* Right side buttons */}
            <div className="navbar-nav">
              {user ? (
                <>
                  <button className="btn btn-outline-light me-2">
                    🔓 Profile
                  </button>
                  <button className="btn btn-outline-light me-2" onClick={logout}>
                    🔒 Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-outline-light me-2" onClick={() => setShowLogin(true)}>
                    🔐 Login
                  </button>
                  <button className="btn btn-outline-light me-2" onClick={() => setShowRegister(true)}>
                    🔐 Register
                  </button>
                </>
              )}
              <button className="btn btn-outline-info">
                🛒 Total: {formatPrice(total)}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Login/Register modals */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
      <div className="container mt-2 mb-3">
        <div className="alert alert-info d-flex justify-content-between align-items-center">
          <span>
            <strong>Demo:</strong> Estado actual del token: 
            <span className={`badge ${user ? 'bg-success' : 'bg-danger'} ms-2`}>
              {user ? 'Logueado' : 'No logueado'}
            </span>
          </span>
          <div>
            {!user && (
              <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setShowLogin(true)}>Login</button>
            )}
            {user && (
              <button className="btn btn-sm btn-outline-primary" onClick={logout}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar