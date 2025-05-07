import CL_mEstudiantes from "./CL_mEstudiantes.js";
import CL_mMaterias from "./Cl_mMaterias.js";
import CL_mInscritos from "./Cl_mInscritos.js";


export default class Cl_mSemestre{
    constructor({nombre}){
        this.nombre = nombre;
        this.estudiantes = new CL_mEstudiantes();
        this.materias = new CL_mMaterias();
        this.inscritos = new CL_mInscritos();

    }

    set nombre(nombre){
        return this._nombre = nombre.toUpperCase();
    }

    get nombre(){
        return this._nombre;
    }
}