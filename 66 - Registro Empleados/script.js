let empleados = [];

function Empleado(legajo, nombre, apellido, nacimiento, cargo){
    this.legajo = legajo;
    this.nombre = nombre
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function agregarEmpleado(){
    let legajo = document.getElementById("txtLegajo").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let nacimiento = document.getElementById("txtNacimiento").value;
    let cargo = document.getElementById("txtCargo").value;

    let empleado = new Empleado(legajo, nombre, apellido, nacimiento, cargo);

    empleados.push(empleado);
    alert("Empleado ha sido agregado");
    limpiarCampos();
}

function limpiarCampos(){
    txtLegajo.value = "";
    txtNombre.value = "";
    txtApellido.value = "";
    txtNacimiento.value = "";
    txtCargo.value = "";
}

function mostrarEmpleado(){
    let listado = "";
    for(let empleado of empleados){
        for(let prop in empleado){
            listado = listado + prop.toUpperCase() + ": " + empleado[prop] + "; ";
        }
        listado = listado + "\n";
    }      
    alert(listado);
}