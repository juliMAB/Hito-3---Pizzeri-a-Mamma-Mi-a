// Función para formatear números con separador de miles
export const formatCurrency = (number) => {
  return number.toLocaleString('es-CL')
}

// Función para formatear precios con signo de peso
export const formatPrice = (number) => {
  return `$${formatCurrency(number)}`
}