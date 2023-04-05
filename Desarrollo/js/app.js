const diaSemana = ['Lunes','Martes','Miercoles','Jueves','Vierner','Sabado','Domingo'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];

function cargaApp()
{
    let fechaActual = new Date();
    //console.log(fechaActual);
    //console.log(fechaActual.getDate()); 
    //console.log(fechaActual.getMonth());
    //console.log(fechaActual.getFullYear());
    //console.log(fechaActual.getDay());
    //console.log(fechaActual.getHours()+':'+fechaActual.getMinutes()+':'+fechaActual.getSeconds());
    let textoFecha = document.getElementById('fecha');
    let textoHora = document.getElementById('hora');
    let textoSegundos = document.getElementById('seg');
    let textoPmAm = document.getElementById('pmam');
    textoFecha.innerHTML = diaSemana[fechaActual.getDay()]+' '+fechaActual.getDate()+' de '+meses[fechaActual.getMonth()]+' del '+fechaActual.getFullYear();
    textoHora.innerHTML = fechaActual.getHours()+':'+fechaActual.getMinutes();
    textoSegundos.innerHTML = fechaActual.getSeconds();
    if(fechaActual.getHours() > 12)
    {
        textoPmAm.innerHTML = 'PM';
    }else
    {
        textoPmAm.innerHTML = 'AM';
    }

    textoHora.className = 'fs-1 text-bolder';
}

setInterval(cargaApp,1000);