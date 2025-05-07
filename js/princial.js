import CL_mEstudiante from "./CL_mEstudiante.js";
import CL_mMateria from "./CL_mMateria.js";
import CL_Prueba from "./CL_Puebra.js";

let prueba = new CL_Prueba();

prueba.agregar(new  CL_mEstudiante("333", "Juan", "Pérez"));
prueba.agregarM(new CL_mMateria("123", "2", "Calculo I"))

alert(`Nombre: ${prueba.arrEstudiante[0].nombre}`);
alert(`Apellido: ${prueba.arrEstudiante[0].apellido}`)
alert(`Cedula: ${prueba.arrEstudiante[0].cedula}`);

alert(`Codigo: ${prueba.arrMateria[0].codigo}`)