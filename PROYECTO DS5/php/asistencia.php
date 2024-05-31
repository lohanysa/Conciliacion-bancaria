<?php 
require_once "../conexion/conexion.php";
    moverarchivo();


function moverArchivo(){
    if(isset($_FILES['archivo'])){
        $directorioDestino = "../html/uploads/";
        $archivoSubido = $directorioDestino . basename($_FILES['archivo']['name']);

        // Intenta mover el archivo de la vista cliente a tu directorio uploads
        if (move_uploaded_file($_FILES['archivo']['tmp_name'], $archivoSubido)) {
            $archivo = file(
                "../html/uploads/asistencia.dat",
                FILE_SKIP_EMPTY_LINES | FILE_IGNORE_NEW_LINES
            );

                if ($archivo !== false) {

                    foreach ($archivo as $linea) {
                        /*explode() divide una cadena en un array, utilizando otro string como delimitador.
                         En este caso, la cadena $linea se dividirá en elementos de un array cada vez que encuentre una
                         tabulación ("\t"). 
                        Los elementos resultantes se almacenarán en la variable $datos.*/

                        if (!empty(trim($linea))) {
                            $datos = explode("\t", trim($linea));
                            MariaDB($datos);
                            /*foreach($datos as $valores){
                                if(strlen($valores)>2)  {
                                    list($fecha, $hora) = explode(" ",trim($valores));
                                    MariaDB($datos,$fecha, $hora);
                                    break;
                                }
                            }*/
                     
                }
                    
            }
        }
        } else {
            echo json_encode("Hubo un error subiendo el archivo.");
        }
    } else {
        echo json_encode("El archivo está vacío.");
    }

}


function MariaDB($datos){

echo json_decode($datos);


} /*  phpMyAdmin intentó conectarse con el servidor MySQL, y el servidor rechazó esta conexión.
 Deberá revisar el host, nombre de usuario y contraseña en config.inc.php y 
asegurarse que corresponden con la información provista por el administrador del servidor MySQL. */


?>