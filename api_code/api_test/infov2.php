<?php
class Info{
    private $conn2;
    //ça nous permettra après pour recuper nos données dans une table specifique
    //private $table = 'technologies t';

    //on mettra par la suite les proprietès des donnèes pour l'affichage
    //public $techno_id;
    public $yearID;
    public $Anne;
    public $codeBrut;
    
    //on fait appele au construct pour stocker notre db dans conn
    public function __construct($db) {
        $this->conn2 = $db;
    }


    //une fois la constrution faite , on va les afficher, mais pour ce-la on va faire des requetes sql pour povoir les recuperer et les afficher
    public function lecture() {
        // on creera notre query où l'on va donc stocker nos requetes
        $query2 = 'SELECT cy.yearID, Anne, codeBrut FROM contenu_years cy
        JOIN contenu_id ci
        ON cy.yearID = ci.yearID
        JOIN contenu c
        ON c.contenuID = ci.contenuID';
        
        //on prepare deuxièment le statement
        $stmt2 = $this->conn2->prepare($query2);
        //et pour conclure on execute tout
        $stmt2->execute();
        
        return $stmt2;
    }
}