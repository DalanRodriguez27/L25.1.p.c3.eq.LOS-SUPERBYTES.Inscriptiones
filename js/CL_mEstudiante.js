export default class CL_mEstudiante{
    constructor(cedula, nombre, apellido){
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    set cedula(cedula){
        this._cedula = +cedula;
    }

    get cedula(){
        return this._cedula;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get apellido(){
        return this._apellido;
    }
}