const cursos = {
    node: 90,
    react: 80,
    angular: 70,
    vue: 60
}

const cursosEntries = Object.entries(cursos);
cursosEntries.map(curso => console.log(`${curso[0]} - ${curso[1]}`));

