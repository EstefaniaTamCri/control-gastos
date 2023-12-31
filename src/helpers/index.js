export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

export const formatearFecha = (fecha) => {
  const date = new Date(fecha);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return date.toLocaleDateString("es-ES", options);
};
