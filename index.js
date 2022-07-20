let ticket = 200
function asignarValor(){
    let nombre = document.getElementById('nombre').value
    let mail = document.getElementById('email').value
    let cantidad = document.getElementById('cantidadEntrada').value
    cantidad = parseInt(cantidad)
    let categoria = document.getElementById('inputState').value

    switch (categoria) {
        case 'estudiante':
            let totalEstudiante = (ticket - ((ticket*80)/100)) * cantidad
            document.getElementById('totalCompra').textContent = [nombre+' el total a pagar, por ser Estudiante es de: $'+totalEstudiante]
            document.getElementById('totalCompra1').textContent = ['El ticket sera enviado al email: '+mail]
            break;
        case 'trainee':
            let totalTrainee = (ticket - ((ticket*50)/100)) * cantidad
            document.getElementById('totalCompra').textContent = [nombre+' el total a pagar, por ser Trainee es de: $'+totalTrainee]
            document.getElementById('totalCompra1').textContent = ['El ticket sera enviado al email: '+mail]
            break;
        default:
            let totalJunior = (ticket - ((ticket*15)/100)) * cantidad
            document.getElementById('totalCompra').textContent = [nombre+' el total a pagar, por ser Junior es de: $'+totalJunior]
            document.getElementById('totalCompra1').textContent = ['El ticket sera enviado al email: '+mail]
            break;
    }
}
