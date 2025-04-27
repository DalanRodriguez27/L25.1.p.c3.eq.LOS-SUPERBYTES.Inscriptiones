export default class CL_mEstudiantes{
    constructor(){
        this.arrEstudiantes = [];
    }

    listado(){
        return this.arrEstudiantes;
    }

    agregar(estudiante){
        this.arrEstudiantes.push(estudiante);

    }


}