import CL_mEstudiantes from "./CL_mEstudiantes.js";
import CL_mMaterias from "./CL_mMaterias.js";

export default class CL_mSalon{
    constructor(nombre){
        this.nombre = nombre;
        this.estudiantes = new CL_mEstudiantes();
        this.materias = new CL_mMaterias();
        

    }

    set nombre(nombre){
        this._nombre = nombre.toUpperCase();
    }

    get nombre(){
        return this._nombre;
    }
}