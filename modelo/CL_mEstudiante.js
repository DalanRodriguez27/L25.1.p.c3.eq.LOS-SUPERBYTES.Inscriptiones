export default class Cl_mEstudiante{
    constructor({cedula, nombre, apellido}){
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    set cedula(cedula){
        return this._cedula = +cedula;
    }

    get cedula(){
        return this._cedula;
    }

    set nombre(nombre){
        return this._nombre = nombre.toUpperCase();

    }

    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        return this._apellido = apellido.toUpperCase();
    }

    get apellido(){
        return this._apellido;
    }
}