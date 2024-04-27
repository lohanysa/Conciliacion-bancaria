var buscar = document.getElementById('buscarDeAnulacion');
var formulario = document.getElementById('anulacionDeCheque');
//var numero_Cheque = document.getElementById('noCheque');

//TRAE LOS DATOS DEL CHEQUE Y VERIFICA QUE EXISTAN
buscar.addEventListener('click', function(e){
    e.preventDefault();
    var datos=new FormData(formulario)
    fetch("../php/anulacion_Verificacion.php", {
        method: 'POST',
        body: datos,
    })
    .then(res=> res.json())
    //aqui va los datos
    .then(datos =>{
        if (typeof datos === 'object' &&  Object.keys(datos).length > 0) {
            document.getElementById('fechaDeAnulacion').value = datos.fechaDeAnulacion;
            document.getElementById('beneficiarioDeAnulacion').value = datos.beneficiarioDeAnulacion; 
            document.getElementById('sumaDeAnulacion').value = datos.sumaDeAnulacion;
            document.getElementById('detalleDeAnulacion').value = datos.detalleDeAnulacion;
        }else{
            alert(datos)
           }
    })
})

//*******************ANULA EL CHEQUE 
formulario.addEventListener('submit', function(e){
//evita que por defecto procece el formulario xd
    e.preventDefault();
    //vas hacer un nuevo formulario del formulario
    //es para guardar los datos.
    var datos_2=new FormData(formulario)
    //el metodo fetch envia la informacion al formulario, por defecto utiliza el mtodo get
    //pero lo podemos modificar diciendole que utilize el metodo post
    fetch("../php/anulacion_update.php", {
        method: 'POST',
        body: datos_2
    })
    //esto es para de codificar las respuesta del php, ademas el fetch siempre retorna un valor en formato json
    //en el rest esta la respuesta decodificada
    .then(res=> res.json())
    //aqui va los datos
    .then(data_2 =>{
        alert(data_2)
        })
    }) 


    /************************EVENTO DE CIRCULACION **********************************/
    formulario.addEventListener('submit', function(e){
        //evita que por defecto procece el formulario xd
            e.preventDefault();
            //vas hacer un nuevo formulario del formulario
            //es para guardar los datos.
            var datos_3=new FormData(formulario)
            //el metodo fetch envia la informacion al formulario, por defecto utiliza el mtodo get
            //pero lo podemos modificar diciendole que utilize el metodo post
            fetch("../php/anulacion_update.php", {
                method: 'POST',
                body: datos_3
            })
            //esto es para de codificar las respuesta del php, ademas el fetch siempre retorna un valor en formato json
            //en el rest esta la respuesta decodificada
            .then(res=> res.json())
            //aqui va los datos
            .then(data =>{
                alert(data)
                })
            }) 