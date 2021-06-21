<?php

//on va donc sur cette page, dans le fichier config notre class de connexion, pour pouvoir premirement se connecter à notre base de donné en mysql

class dataBase {
    //1-insertion des paramètres de notre base de données
    private $host = 'localhost';
    private $database_name = 'id17011776_data_vis';
    private $username = 'id17011776_amin';
    private $password = '4>t_@SQkXD<p~9e3';
    private $conn;

    //crèation d'une function qui nous permettra de nous connecter à notre base de données en mettant nos paramètres prècedents...

    public function connexion() {
        //on specifie que notre $conn est actuellement vide parce-qu'il n'y a pas encore eu de connexion
        $this->conn = null;
        try{
            $this->conn = new PDO('mysql:host='. $this->host . ';dbname=' . $this->database_name, $this->username, $this->password);
            //on ajoute setAttribute pour reperer facilement les erreurs dans le code
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e) {
            echo 'Connection Error:' . $e->getMessage();
        }

        //on renvoie à la fin de notre fonction 
        return $this->conn;

    }
}