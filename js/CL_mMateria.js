export default class CL_mEstudiante{
    constructor(codigo, semestre, nombre){
        this.codigo = codigo;
        this.semestre = semestre;
        this.nombre = nombre;
        


    }

    set codigo(codigo){
        this._codigo = codigo.toUpperCase();
    }


    get codigo(){
        return this._codigo;
    }

    semestre(semestre){
        this._semestre = +semestre;
    }

    get semestre(){
        return this._semestre;
    }

}