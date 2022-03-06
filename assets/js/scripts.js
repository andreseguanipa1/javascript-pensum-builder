let materias = [];
let mostrarNota = false;
let aviso = document.getElementById("aviso");
let arreglo = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
let index = 0;
let semestre = 0;

function mostrar() {

    console.log("funcion mostrar");

    if (mostrarNota) {
        document.getElementById("mostrar").style.display = "block";
        mostrarNota = false;

    } else {
        document.getElementById("mostrar").style.display = "none";
        mostrarNota = true;

    }

}

function borrar(indx) {

    if ((materias.length - 1) > 0) {

        materias.splice(indx, 1);

        setTimeout(function () {

            for (let i = 0; i < (materias.length); i++) {
                materias[i].id = i;
            }

            cargar();

        }, 100);

    } else {

        materias = [];
        aviso.innerHTML = "";
        cargar();

    }

}

function agregar(agregar) {

    materias.push(agregar);
    materias[materias.length - 1].id = materias.length - 1;
    cargar();

    aviso.innerHTML = "<b>Click en el punto rojo para Eliminar</b>";
    document.getElementById("name").value = '';
    document.getElementById("semester").value = '1';
    document.getElementById("calification").value = '';

}

function setValues() {

    let nombre = document.getElementById("name").value;
    let semestre = document.getElementById("semester").value;
    let calification = document.getElementById("calification").value;
    let cursando = document.getElementById("studying").checked;

    let newMateria = {
        nombre,
        semestre,
        calification,
        cursando
    }

    agregar(newMateria);

}

function cargar() {


    for (let i = 1; i < 13; i++) {

        let getSemester = document.getElementById(`${i}`);
        let div = '';

        materias.map(materia => {

            let color = '';

            materia.cursando ? color = `background-color: #FFF` : (materia.calification < 9.5 ? color = color = `background-color: rgb(168, 0, 0); color: #fff` : color = `background-color: rgb(28, 105, 28); color: #fff`);

            if (materia.semestre == i) {

                div = div + `
                    <div class="borrar" onclick="borrar(${materia.id})"></div>
                    <div class="materia" style="${color}">
                        ${materia.nombre} <br />
                        ${materia.calification}
                    </div>
                `;

            }

        });

        div = `<label for="" class="semesters">${arreglo[parseInt(i) - 1]}</label>` + div;

        getSemester.innerHTML = div;

    }

    console.log(materias);


}