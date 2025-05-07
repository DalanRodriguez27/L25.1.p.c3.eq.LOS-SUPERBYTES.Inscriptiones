export default class Cl_mInscripcion {
    constructor({cedula}){
        this.cedula = cedula;
        this.materias = [];



        
    }

    set cedula(cedula){
        return this._cedula = +cedula;
    }

    get cedula(){
        return this._cedula;
    }

    agregar(codigo){
        return this.materias.push(codigo);
    }
    
    
    listado (dataMaterias) {
        return this.materias.map(codigo => {
            const materia = dataMaterias.find(dataMateria => dataMateria.codigo === codigo);
            if (materia) {
                return {cedula: materia.codigo, nombre: materia.nombre};
            }
            return null;
        }).filter(materia => materia !== null)
    }


    
}