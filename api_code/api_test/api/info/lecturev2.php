<?php
//Headers
header('Acces-Control-Allow-Origin: *');
header('Content-Type: application/json');

//on va recupèrer nos fichiers pour pouvoir faire une connexion, on rècupère le fichier de connexion à notre base de donées et ensuite à nos requetes faites en info.php
include_once '../../config/madb.php';
include_once '../../models/infov2.php';

//on instancie notre base de donnés et notre function connexion dans le madb et notre objet info
$database = new dataBase();
$db = $database->connexion();

$info = new Info($db);


$result = $info->lecture();

$num = $result->rowCount();

// on verifie nos infos2 

if($num >0){
    $infos2_arr = array();
    $infos2_arr['data'] = array();
    
    //
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        //comment on peut voir je vais ouvoir modeliser mon json et le mettre en ordre
        $infos2_item = array(
            'cy.yearID' => $yearID,
            'Anne' => $Anne,
            'codeBrut' => $codeBrut
        );
        array_push($infos2_arr['data'],$infos2_item);
    }

    echo json_encode($infos2_arr);


} else{
    echo json_encode(
        array('messageErreur' => 'il ny a pas de donées')
    );
}