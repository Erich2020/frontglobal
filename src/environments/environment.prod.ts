/**
 * Constante para la puesta en produccion sobre las configuraciones de los servicios web.
 * Se implementan al complilar la solucion dist/
 */
export const environment = {
  production: true,
  ApiURL:"http://localhost:3000",
  EndPoints:{
    Personas:{
      Registrar:"/api/personas/",
      Actualizar:"/api/personas/",
      Eliminar: "/api/personas/",
      Consultar:"/api/personas/",
      ConsultaNombre:"/api/personas/nombre/",
      ConsultaPaterno:"/api/personas/paterno/",
      ConsultaMaterno:"/api/personas/materno/",  
    },
   }
};
