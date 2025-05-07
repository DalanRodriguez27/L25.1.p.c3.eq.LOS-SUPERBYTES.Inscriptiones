export default class Cl_mEstudiantes{
    constructor(){
        this.array = [];
    }

    listado(){
        return this.array;
    }

    agregar(estudiante){
        return this.array.push(estudiante);

    }

    existe(cedula){
        let existe = false;
        this.array.forEach((estudiante) => {
            if (estudiante.cedula == cedula) {
                existe = true;
            }
        });
        return existe;
    }


}