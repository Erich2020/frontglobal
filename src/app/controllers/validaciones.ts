export const Patterns = {
    // Validacion  de un numero 
    numero: /^\d+/,
    //Validacion de un numero telefonico a 10 digitos
    telefono: /^\d{10}/,
    // Validacion de Un Correo Electronico estandard
    email : /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/,
    //Validacion de un domicilio limitado a 300 carácteres
    domicilio: /[A-Za-z0-9'\\.\\-\\s\\,\#]{1,300}/,
    // Validacion generica de Texto limitado a 100 carácteres
    nombres : /(.*){1,100}/,
};
