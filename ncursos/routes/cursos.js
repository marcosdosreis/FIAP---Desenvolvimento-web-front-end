module.exports = function (app) {
    var cursos = app.controllers.cursos;
    app.get('/menu', cursos.menu);
    app.get('/cadCurso', cursos.cadastroCurso);
    app.get('/listaCursos', cursos.listaCursos);
};