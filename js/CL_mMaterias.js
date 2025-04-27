export default class CL_mMaterias{
    constructor(){
        this.arrMaterias = [];
    }

    listado(){
        return this.arrMaterias;
    }

    agregar(materia){
        this.arrMaterias.push(materia);
    }

}