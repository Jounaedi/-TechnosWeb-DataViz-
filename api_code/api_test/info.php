<?php
class Info{
    private $conn;
    //ça nous permettra après pour recuper nos données dans une table specifique
    private $table = 'technologies t';

    //on mettra par la suite les proprietès des donnèes pour l'affichage
    //public $techno_id;
    public $Name;
    public $category_name;
    public $reference_year;
    public $users_number_year_reference;
    public $totale_users_year_2004;
    public $croissance_decroissance_2004;
    public $totale_users_year_2012;
    public $croissance_decroissance_2012;
    public $totale_users_year_2017;
    public $croissance_decroissance_2017;
    public $totale_users_year_2020;
    public $croissance_decroissance_2020;
    public $CategoryID;
    public $TechnoID;
    
    //on fait appele au construct pour stocker notre db dans conn
    public function __construct($db) {
        $this->conn = $db;
    }


    //une fois la constrution faite , on va les afficher, mais pour ce-la on va faire des requetes sql pour povoir les recuperer et les afficher
    public function lecture() {
        // on creera notre query où l'on va donc stocker nos requetes
        $query = 'SELECT t.TechnoID, c.CategoryID, Name, category_name, reference_year, users_number_year_reference, totale_users_year_2004, croissance_decroissance_2004, totale_users_year_2012, croissance_decroissance_2012, totale_users_year_2017, croissance_decroissance_2017, totale_users_year_2020, croissance_decroissance_2020      FROM technologies t INNER JOIN category_id c
        ON t.TechnoID = c.TechnoID
        JOIN categories ct
        ON c.CategoryID = ct.CategoryID
        INNER JOIN valeur_id v
        ON t.TechnoID = v.TechnoID
        JOIN valeur vl
        ON v.ValeurID = vl.ValeurID';
        
        //on prepare deuxièment le statement
        $stmt1 = $this->conn->prepare($query);
        //et pour conclure on execute tout
        $stmt1->execute();
        
        return $stmt1;
    }
}