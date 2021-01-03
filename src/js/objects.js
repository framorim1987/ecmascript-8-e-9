const cursos = {
    node: 90,
    react: 80,
    angular: 70,
    vue: 60
}

//Antes
const cursosKeys = Object.keys(cursos);
renderizarLista("object-antes", cursosKeys)

//Depois

const cursosEntries = Object.entries(cursos);
renderizarLista("object-depois", cursosEntries)
//console.log(Object.values(cursos));