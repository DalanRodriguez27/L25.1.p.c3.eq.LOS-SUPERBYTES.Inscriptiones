import Cl_mInscripcion from "./Cl_mInscripcion.js";


export default class Cl_mInscritos{
    constructor(){
        this.arrEstudiantesInscritos = []
    }

    indexEstudiante(cedula){
        let index = -1;
        for(let i = 0; i < this.arrEstudiantesInscritos.length; i++){
            if(this.arrEstudiantesInscritos[i].cedula == cedula){
                index = i;
                break;
            }
        }
        return index;
    }

    agregar(inscrito){
        return this.arrEstudiantesInscritos.push(inscrito);
    }

    inscribirMateria(data){
        let index = this.indexEstudiante(data.cedula);
        if(index == -1){
            this.inscripcion = new Cl_mInscripcion({cedula: data.cedula})
            this.inscripcion.agregar(data.codigo)
            this.arrEstudiantesInscritos.push({ cedula: this.inscripcion.cedula, materias: this.inscripcion.materias });
        }else{
            this.arrEstudiantesInscritos[index].materias.push(data.codigo);
        }
    }

    listado (data) {
        return this.arrEstudiantesInscritos.map(obj => {
            const estudiante = data.find(dataEstudiante => dataEstudiante.cedula === obj.cedula);
            if (estudiante) {
                return {cedula: estudiante.cedula, nombre: estudiante.nombre, cntMaterias: obj.materias.length};
            }
            return null;
        }).filter(estudiante => estudiante !== null)
    }
}