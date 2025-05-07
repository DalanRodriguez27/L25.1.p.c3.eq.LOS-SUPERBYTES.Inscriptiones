export default class Cl_mMaterias{
    constructor(){
        this.arrMaterias = [];
    }

    listado(){
        return this.arrMaterias;
    }

    agregar(materia){
        return this.arrMaterias.push(materia);
    }

    existe(codigo){
        let existe = false;
        this.arrMaterias.forEach((materia) => {
            if (materia.codigo == codigo) {
                existe = true;
            }
        });
        return existe;
    }

}