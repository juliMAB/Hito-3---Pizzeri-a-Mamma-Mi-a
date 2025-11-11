import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const Login = ({ onClose }) => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await login({ email, password })
      onClose()
    } catch (err) {
      setError(err.message || 'Error')
    }
  }

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{background: 'rgba(0,0,0,0.5)', zIndex: 1050}}>
      <div className="card p-4" style={{width: 360}}>
        <h5 className="mb-3">Iniciar sesión</h5>
        {error && <div className="alert alert-danger small">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Entrar</button>
            <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
