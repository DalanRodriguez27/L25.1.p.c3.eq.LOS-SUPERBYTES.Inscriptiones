export default class Cl_mEstudiante{
    constructor({codigo, semestre, nombre}){
        this.codigo = codigo;
        this.semestre = semestre;
        this.nombre = nombre;
        


    }

    set codigo(codigo){
        return this._codigo = codigo.toUpperCase();
    }

    get codigo(){
        return this._codigo;
    }

    set semestre(semestre){
        return  this._semestre = +semestre;
    }

    get semestre(){
        return this._semestre;
    }

    set nombre(nombre){
        return this._nombre = nombre.toUpperCase();
    }

    get nombre(){
        return this._nombre;
    }

}