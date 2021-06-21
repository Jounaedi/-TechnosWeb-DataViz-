<?php
//Headers
header('Acces-Control-Allow-Origin: *');
header('Content-Type: application/json');

//on va recupèrer nos fichiers pour pouvoir faire une connexion, on rècupère le fichier de connexion à notre base de donées et ensuite à nos requetes faites en info.php
include_once '../../config/madb.php';
include_once '../../models/info.php';

//on instancie notre base de donnés et notre function connexion dans le madb et notre objet info
$database = new dataBase();
$db = $database->connexion();

$info = new Info($db);


$result = $info->lecture();

$num = $result->rowCount();

// on verifie nos infos 

if($num >0){
    $infos_arr = array();
    $infos_arr['data'] = array();
    
    //
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        //comment on peut voir je vais ouvoir modeliser mon json et le mettre en ordre
        $infos_item = array(
            't.TechnoID' => $TechnoID,
            'c.CategoryID' => $CategoryID,
            'Name' => $Name,
            'category_name' => $category_name,
            'reference_year' => $reference_year,
            'users_number_year_reference' => $users_number_year_reference,
            'totale_users_year_2004' => $totale_users_year_2004,
            'croissance_decroissance_2004' => $croissance_decroissance_2004,
            'totale_users_year_2012' => $totale_users_year_2012,
            'croissance_decroissance_2012' => $croissance_decroissance_2012,
            'totale_users_year_2017' => $totale_users_year_2017,
            'croissance_decroissance_2017' => $croissance_decroissance_2017,
            'totale_users_year_2020' => $totale_users_year_2020,
            'croissance_decroissance_2020' => $croissance_decroissance_2020,
        );
        array_push($infos_arr['data'],$infos_item);
    }

    echo json_encode($infos_arr);


} else{
    echo json_encode(
        array('messageErreur' => 'il ny a pas de donées')
    );
}
