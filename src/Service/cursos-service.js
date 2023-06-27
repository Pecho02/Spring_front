const listaCursos = async () => {
    try {
        return await fetch("http://localhost:8094/rest/curso/general/listar").then((respuesta) => respuesta.json());
    } catch (e) {
        alert('Ocurrio un error! ' + e);
    }
}
export const cursosServices = {
    listaCursos,
}