import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    // try to load from localStorage
    const stored = localStorage.getItem('auth')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setUser(parsed.user)
        setToken(parsed.token)
      } catch {
        // ignore parse errors
      }
    }
  }, [])

  useEffect(() => {
    if (user && token) {
      localStorage.setItem('auth', JSON.stringify({ user, token }))
    } else {
      localStorage.removeItem('auth')
    }
  }, [user, token])

  const login = async ({ email, password }) => {
    // Simulate API call and simple validation
    if (!email || !password) {
      throw new Error('Email y password requeridos')
    }
    const fakeToken = 'token-' + Math.random().toString(36).slice(2)
    const fakeUser = { id: Date.now(), email }
    setUser(fakeUser)
    setToken(fakeToken)
    return { user: fakeUser, token: fakeToken }
  }

  const register = async ({ name, email, password }) => {
    if (!name || !email || !password) {
      throw new Error('Todos los campos son requeridos')
    }
    const fakeToken = 'token-' + Math.random().toString(36).slice(2)
    const fakeUser = { id: Date.now(), name, email }
    setUser(fakeUser)
    setToken(fakeToken)
    return { user: fakeUser, token: fakeToken }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
