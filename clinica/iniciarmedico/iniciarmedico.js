let button = {

    Email : 'dario@gmail',
    Contraseña : '123456',
        
}

localStorage.setItem('Nuevo Paciente', JSON.stringify(button));

let Registro = JSON.parse(localStorage.getItem('Nuevo Paciente'));
    console.log(Registro)

var Registro = ('Nuevo Paciente')
