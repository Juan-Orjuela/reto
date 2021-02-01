"use strict";
let numEstudiante = 1;
const estudiantes = [];
const btnCont = document.getElementById("continuar");

btnCont.addEventListener("click", () => {
  if (numEstudiante <= 3) {
    //Guardar respuestas
    const nombre = document.getElementById("nombre");
    const sexo = document.getElementById("sexo");
    const edad = document.getElementById("edad");
    const nota = document.getElementById("nota");
    //Crear estudiante
    estudiantes[numEstudiante - 1] = {
      nombre: nombre.value,
      sexo: sexo.value,
      edad: edad.value,
      nota: nota.value,
    };
    //Limpiar campos
    nombre.value = "";
    sexo.value = "";
    edad.value = "";
    nota.value = "";
    //Incrementar
    numEstudiante++;

    //Mostrar resultados
    if (numEstudiante > 3) {
      verResultados();
    } else {
      //Cambiar Título
      document.querySelector("#col-2 h3").innerHTML =
        "Estudiante 0" + numEstudiante;
    }
  } else {
    console.log("No más estudiantes");
  }
});

//Ver los resultados

function verResultados() {
  document.getElementById("gran-cont").classList.add("mostrarResultados");

  for (let i = 0; i < estudiantes.length; i++) {
    const el = document.querySelector("#r-est" + (i + 1));
    //Regresar los datos
    el.querySelector(".nombre span").innerHTML = estudiantes[i].nombre;
    el.querySelector(".sexo span").innerHTML = estudiantes[i].sexo;
    el.querySelector(".edad span").innerHTML = estudiantes[i].edad;
    el.querySelector(".nota span").innerHTML = estudiantes[i].nota;
    //Evaluar la nota
    if (estudiantes[i].nota < 5) {
      el.classList.add("reprobado");
      el.querySelector(".resultado").innerHTML = "Reprobado";
    } else {
      el.classList.add("aprobado");
      el.querySelector(".resultado").innerHTML = "Aprobado";
    }
  }
}
