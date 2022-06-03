class alumno {
    constructor(nombre, apellido, edad, ciudad){
    this.nombre= nombre;
    this.apellido= apellido;
    this.edad= edad;
    this.ciudad= ciudad;
}
}

let alumno1 = new alumno("Pepe", "Perez", 25, "Barcelona")
let alumno2 = new alumno("Facundo", "Ramallo", 33, "Barcelona")
let alumno3 = new alumno("Agustina", "Ferrando", 28, "Barcelona")
let alumno4 = new alumno("Maria", "Lopez", 29, "Barcelona")
let alumno5 = new alumno("Juan", "Puig", 26, "Barcelona")
let alumno6 = new alumno("Rocio", "Perez", 30, "Barcelona")

let totalAlumnos = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6]
console.log(totalAlumnos);

for (let i=0; i<totalAlumnos.length; i++){
    nombre= totalAlumnos[i].nombre;
    apellido= totalAlumnos[i].apellido;
    edad= totalAlumnos[i].edad;
    ciudad= totalAlumnos[i].ciudad;
    document.querySelector("div").innerHTML += `<div class="cards">Nombre: ${nombre}<br>
                                                Apellido: ${apellido}<br>
                                                Edad: ${edad}<br>
                                                Ciudad: ${ciudad}</div><br>`;

}