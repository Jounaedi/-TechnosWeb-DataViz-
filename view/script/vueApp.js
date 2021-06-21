
new Vue({
    el: "#mon_app",
    data: {
        timeBar : 1,

        // position point
        bottom : [],
        left : [],
        coef : 90,

        // info bulle
        infos : [],
        info : [],

        toggle0  : false,
        toggle1  : false,
        toggle2  : false,
        toggle3  : false,
        toggle4  : false,
        toggle5  : false,
        toggle6  : false,
        toggle7  : false,
        toggle8  : false,
        toggle9  : false,
        toggle10 : false,
        toggle11 : false,
        toggle12 : false,
        toggle13 : false,
        toggle14 : false,
        toggle15 : false,
        toggle16 : false,
        toggle17 : false,
        toggle18 : false,
        toggle19 : false,
        toggle20 : false,
        toggle21 : false,
        toggle22 : false,
        toggle23 : false,
        toggle24 : false,
        toggle25 : false,
        toggle26 : false,
        toggle27 : false,
        toggle28 : false,
        toggle29 : false,
        toggle30 : false,
        toggle31 : false,
        toggle32 : false,
        toggle33 : false,
        toggle34 : false,
        toggle35 : false,
        toggle36 : false,
        toggle37 : false,
        toggle38 : false,
        toggle39 : false,
        toggle40 : false,
        toggle41 : false,

        points : [],

        // selecteur
        toggleFront : false,
        toggleBack : false,
        toggleFrontBack : false,
        toggleLangage : false,
        toggleFramework : false,
        toggleOutil : false,
        toggleServeur : false,
        toggleBDD : false,

        // main page
        mainPage : "",

    },
    created() {
        this.fetchData()
        this.chargeInfo()
        this.printPage()
    },
    methods: {
        fetchData : function() {
            var ourResquest = new XMLHttpRequest()
            ourResquest.open('GET', "https://datavisual1.000webhostapp.com/api_test/api/info/lecture.php")
            ourResquest.onload = () => {
                var ourData = JSON.parse(ourResquest.responseText)
                ourData = ourData['data']
                this.left = []
                this.bottom = []
                if(this.timeBar == 1) {
                    this.coef = 40
                    ourData.forEach(data => {
                        if((Number(20 + data["croissance_decroissance_2004"]/1.2)) > 60 && (Number(20 + data["croissance_decroissance_2004"]/1.2)) < 200){
                            this.left.push(Number(20 + data["croissance_decroissance_2004"]/1.2))
                        } 
                        else {
                            this.left.push(Number(50 + data["croissance_decroissance_2004"]/1.8))
                        }
                        if(data["totale_users_year_2004"] <= 1000000) {
                            this.bottom.push(Number((50 * data["totale_users_year_2004"])/1000000))
                        } else if(data["totale_users_year_2004"] > 1000000 ) {
                            this.bottom.push(Number(((this.coef * data["totale_users_year_2004"]) / 15680000)+50))
                        }else {
                            this.bottom.push(Number(0))
                        }
                    });
                }else if(this.timeBar == 2) {
                    this.coef = 70
                    ourData.forEach(data => {
                        this.left.push(Number(50 + data["croissance_decroissance_2012"]/1.8))

                        if(data["totale_users_year_2012"] <= 1000000){
                            this.bottom.push(Number((50 * data["totale_users_year_2012"])/1000000))
                        } else if(data["totale_users_year_2012"] > 1000000 ) {
                            this.bottom.push(Number(((this.coef * data["totale_users_year_2012"]) / 15680000)+50))
                        }else {
                            this.bottom.push(Number(0))
                        }
                    });
                }else if(this.timeBar == 3) {
                    this.coef = 100
                    ourData.forEach(data => {
                        if((Number(50 + data["croissance_decroissance_2017"]/1)) <= 50 && (Number(50 + data["croissance_decroissance_2017"]/1)) > 25){
                            this.left.push(Number(50 + data["croissance_decroissance_2017"]/0.5))
                        } else if((Number(50 + data["croissance_decroissance_2017"]/1)) > 50 && (Number(50 + data["croissance_decroissance_2017"]/1)) < 70){
                            this.left.push(Number(50 + data["croissance_decroissance_2017"]/1.5))
                        } else {
                            this.left.push(Number(50 + data["croissance_decroissance_2017"]/1.8))
                        }
                        

                        if(data["totale_users_year_2017"] <= 1000000){
                            this.bottom.push(Number((50 * data["totale_users_year_2017"])/1000000))
                        } else if(data["totale_users_year_2017"] > 1000000 ) {
                            this.bottom.push(Number(((this.coef * data["totale_users_year_2017"]) / 15680000)+50))
                        }else {
                            this.bottom.push(Number(0))
                        }
                    });
                }else if(this.timeBar == 4) {
                    this.coef = 100
                    ourData.forEach(data => {
                        if((Number(50 + data["croissance_decroissance_2020"]/1)) <= 50 && (Number(50 + data["croissance_decroissance_2020"]/1)) > 25){
                            this.left.push(Number(50 + data["croissance_decroissance_2020"]/0.5))
                        } else if((Number(50 + data["croissance_decroissance_2020"]/1)) > 50 && (Number(50 + data["croissance_decroissance_2020"]/1)) < 70){
                            this.left.push(Number(50 + data["croissance_decroissance_2020"]/1))
                        } else {
                            this.left.push(Number(50 + data["croissance_decroissance_2020"]/1.8))
                        }

                        if(data["totale_users_year_2020"] < 1000000){
                            this.bottom.push(Number((50 * data["totale_users_year_2020"])/1000000))
                        } else if(data["totale_users_year_2020"] > 1000000 ) {
                            this.bottom.push(Number(((this.coef * data["totale_users_year_2020"]) / 15680000)+50))
                        }else {
                            this.bottom.push(Number(0))
                        }
                    });
                }
            }
            ourResquest.send()
        },
        chargeInfo : function() {
            var ourResquest = new XMLHttpRequest()
            ourResquest.open('GET', "https://datavisual1.000webhostapp.com/api_test/api/info/lecture.php")
            ourResquest.onload = () => {
                var ourData = JSON.parse(ourResquest.responseText)
                ourData = ourData['data']
                this.infos = []
                if(this.timeBar == 1) {
                    ourData.forEach(data => {
                        this.info = []
                        this.info.push(data["Name"])
                        if(data["totale_users_year_2004"] > 1000000) {
                            this.info.push(Number(data["totale_users_year_2004"] / 1000000) + "M")
                        }else if(data["totale_users_year_2004"] > 1000) {
                            this.info.push(Number(data["totale_users_year_2004"] / 1000) + "K")
                        }
                        
                        if(data["croissance_decroissance_2004"] > 0) {
                            this.info.push("+" + data["croissance_decroissance_2004"] + "%")
                        }else {
                            this.info.push(data["croissance_decroissance_2004"] + "%")
                        }
                        this.info.push(data["category_name"])

                        this.infos.push(this.info)
                    });
                }else if(this.timeBar == 2) {
                    ourData.forEach(data => {
                        this.info = []
                        this.info.push(data["Name"])
                        if(data["totale_users_year_2012"] > 1000000) {
                            this.info.push(Number(data["totale_users_year_2012"] / 1000000) + "M")
                        }else if(data["totale_users_year_2012"] > 1000) {
                            this.info.push(Number(data["totale_users_year_2012"] / 1000) + "K")
                        }
                        
                        if(data["croissance_decroissance_2012"] > 0) {
                            this.info.push("+" + data["croissance_decroissance_2012"] + "%")
                        }else {
                            this.info.push(data["croissance_decroissance_2012"] + "%")
                        }
                        this.info.push(data["category_name"])

                        this.infos.push(this.info)
                    });
                }else if(this.timeBar == 3) {
                    ourData.forEach(data => {
                        this.info = []
                        this.info.push(data["Name"])
                        if(data["totale_users_year_2017"] > 1000000) {
                            this.info.push(Number(data["totale_users_year_2017"] / 1000000) + "M")
                        }else if(data["totale_users_year_2017"] > 1000) {
                            this.info.push(Number(data["totale_users_year_2017"] / 1000) + "K")
                        }
                        
                        if(data["croissance_decroissance_2017"] > 0) {
                            this.info.push("+" + data["croissance_decroissance_2017"] + "%")
                        }else {
                            this.info.push(data["croissance_decroissance_2017"] + "%")
                        }
                        this.info.push(data["category_name"])

                        this.infos.push(this.info)
                    });
                }else if(this.timeBar == 4) {
                    ourData.forEach(data => {
                        this.info = []
                        this.info.push(data["Name"])
                        if(data["totale_users_year_2020"] > 1000000) {
                            this.info.push(Number(data["totale_users_year_2020"] / 1000000) + "M")
                        }else if(data["totale_users_year_2020"] > 1000) {
                            this.info.push(Number(data["totale_users_year_2020"] / 1000) + "K")
                        }
                        
                        if(data["croissance_decroissance_2020"] > 0) {
                            this.info.push("+" + data["croissance_decroissance_2020"] + "%")
                        }else {
                            this.info.push(data["croissance_decroissance_2020"] + "%")
                        }
                        this.info.push(data["category_name"])

                        this.infos.push(this.info)
                    });
                }
            }
            ourResquest.send()
        },
        printInfo : function(id, id_type) {
            if(this.infos.length > 1) {
                return this.infos[id][id_type];
            }
        },
        refreshBulle : function() {
        },
        rechargeSelect : function() {
            this.toggleFront = false
            this.toggleBack = false
            this.toggleFrontBack = false
            this.toggleLangage = false
            this.toggleFramework = false
            this.toggleOutil = false
            this.toggleServeur = false
            this.toggleBDD = false
        },
        printPage : function() {
            var ourResquest = new XMLHttpRequest()
            ourResquest.open('GET', "https://datavisual1.000webhostapp.com/api_test/api/info/lecturev2.php")
            ourResquest.onload = () => {
                var ourData = JSON.parse(ourResquest.responseText)
                ourData = ourData['data']
                if(this.timeBar == 1) {
                    this.mainPage = ourData[0]['codeBrut']
                }
                if(this.timeBar == 2) {
                    this.mainPage = ourData[1]['codeBrut']
                }
                if(this.timeBar == 3) {
                    this.mainPage = ourData[2]['codeBrut']
                }
                if(this.timeBar == 4) {
                    this.mainPage = ourData[3]['codeBrut']
                }
            },
            ourResquest.send()
        }

    },
    computed: {
        // langage
        // front
        css : function(){
            if(this.bottom[0] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 4) {
                return {
                    display : "flex",
                    bottom : this.bottom[0] + "%",
                    left : Number(this.left[0] - 3) + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[0] + "%",
                    left : this.left[0] + "%"
                }
            }
        },
        c : function(){
            if(this.bottom[1] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 4) {
                return {
                    display : "flex",
                    bottom : this.bottom[1] + "%",
                    left : Number(this.left[1] + 2) + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[1] + "%",
                    left : this.left[1] + "%"
                }
            }
        },
        cpp : function(){
            if(this.bottom[2] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[2] + "%",
                    left : this.left[2] + "%"
                }
            }
        },
        // back
        python : function(){
            if(this.bottom[3] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 4) {
                return {
                    display : "flex",
                    bottom : "92%",
                    left : this.left[3] + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[3] + "%",
                    left : this.left[3] + "%"
                }
            }
        },
        php : function(){
            if(this.bottom[4] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 1) {
                return {
                    display : "flex",
                    bottom : "90%",
                    left : this.left[4] + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[4] + "%",
                    left : this.left[4] + "%"
                }
            }
        },
        java : function(){
            if(this.bottom[5] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 1) {
                return {
                    display : "flex",
                    bottom : "92%",
                    left : this.left[5] + "%"
                }
            }else if(this.timeBar == 2) {
                return {
                    display : "flex",
                    bottom : "92%",
                    left : this.left[5] + "%"
                }
            }else if(this.timeBar == 3) {
                return {
                    display : "flex",
                    bottom : "92%",
                    left : this.left[5] + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[5] + "%",
                    left : this.left[5] + "%"
                }
            }
        },
        ruby : function(){
            if(this.bottom[6] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[6] + "%",
                    left : this.left[6] + "%"
                }
            }
        },
        sql : function(){
            if(this.bottom[7] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 1) {
                return {
                    display : "flex",
                    bottom : "90%",
                    left : Number(this.left[7] - 5)   + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[7] + "%",
                    left : this.left[7] + "%"
                }
            }
        },
        csh : function(){
            if(this.bottom[8] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[8] + "%",
                    left : this.left[8] + "%"
                }
            }
        },

        // front/back
        javaScript : function(){
            if(this.bottom[9] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 1) {
                return {
                    display : "flex",
                    bottom : Number(this.bottom[9] - 2) + "%",
                    left : Number(this.left[9] - 2) + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[9] + "%",
                    left : this.left[9] + "%"
                }
            }
        },
        typeScript : function(){
            if(this.bottom[10] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 3) {
                return {
                    display : "flex",
                    bottom : Number(this.bottom[10] - 1) + "%",
                    left : Number(this.left[10] - 3) + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[10] + "%",
                    left : this.left[10] + "%"
                }
            }
        },
        objectc : function(){
            if(this.bottom[11] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[11] + "%",
                    left : this.left[11] + "%"
                }
            }
        },
        kotlin : function(){
            if(this.bottom[12] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[12] + "%",
                    left : this.left[12] + "%"
                }
            }
        },
        // Frameworks
        // Front
        reactjs : function() {
            if(this.bottom[13] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[13] + "%",
                    left : this.left[13] + "%"
                }
            }
        },
        reactNatif : function(){
            if(this.bottom[14] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[14] + "%",
                    left : this.left[14] + "%"
                }
            }
        },
        angularJS : function(){
            if(this.bottom[15] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[15] + "%",
                    left : this.left[15] + "%"
                }
            }
        },
        angular : function(){
            if(this.bottom[16] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[16] + "%",
                    left : this.left[16] + "%"
                }
            }
        },
        vue : function(){
            if(this.bottom[17] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[17] + "%",
                    left : this.left[17] + "%"
                }
            }
        },
        bootstrap : function(){
            if(this.bottom[18] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 4) {
                return {
                    display : "flex",
                    bottom : this.bottom[18] + "%",
                    left : Number(this.left[18] - 2.5) + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[18] + "%",
                    left : this.left[18] + "%"
                }
            }
        },
        tailwind : function(){
            if(this.bottom[19] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[19] + "%",
                    left : this.left[19] + "%"
                }
            }
        },
        // back
        laravel : function(){
            if(this.bottom[20] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[20] + "%",
                    left : this.left[20] + "%"
                }
            }
        },
        symphony : function(){
            if(this.bottom[21] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 2) {
                return {
                    display : "flex",
                    bottom : this.bottom[21] + "%",
                    left : Number(this.left[21] + 2) + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[21] + "%",
                    left : this.left[21] + "%"
                }
            }
        },
        rails : function(){
            if(this.bottom[22] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[22] + "%",
                    left : this.left[22] + "%"
                }
            }
        },
        django : function(){
            if(this.bottom[23] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[23] + "%",
                    left : this.left[23] + "%"
                }
            }
        },
        cakePHP : function(){
            if(this.bottom[24] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[24] + "%",
                    left : this.left[24] + "%"
                }
            }
        },
        // front/back
        net : function(){
            if(this.bottom[25] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[25] + "%",
                    left : this.left[25] + "%"
                }
            }
        },
        // serveur
        apache : function(){
            if(this.bottom[26] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[26] + "%",
                    left : this.left[26] + "%"
                }
            }
        },
        nginx : function(){
            if(this.bottom[27] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[27] + "%",
                    left : this.left[27] + "%"
                }
            }
        },
        iis : function(){
            if(this.bottom[28] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[28] + "%",
                    left : this.left[28] + "%"
                }
            }
        },
        // BDD
        mySQL : function(){
            if(this.bottom[29] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[29] + "%",
                    left : this.left[29] + "%"
                }
            }
        },
        mongodb : function(){
            if(this.bottom[30] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[30] + "%",
                    left : this.left[30] + "%"
                }
            }
        },
        SQLServer : function(){
            if(this.bottom[31] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[31] + "%",
                    left : this.left[31] + "%"
                }
            }
        },
        postgreSQL : function(){
            if(this.bottom[32] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[32] + "%",
                    left : this.left[32] + "%"
                }
            }
        },
        oracle : function(){
            if(this.bottom[33] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[33] + "%",
                    left : this.left[33] + "%"
                }
            }
        },
        // outils
        adobeFlash : function(){
            if(this.bottom[34] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else if(this.timeBar == 2) {
                return {
                    display : "flex",
                    bottom : "92%",
                    left : this.left[34] + "%"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[34] + "%",
                    left : this.left[34] + "%"
                }
            }
        },
        wordpress : function(){
            if(this.bottom[35] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[35] + "%",
                    left : this.left[35] + "%"
                }
            }
        },
        shopify : function(){
            if(this.bottom[36] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[36] + "%",
                    left : this.left[36] + "%"
                }
            }
        },
        joomla : function(){
            if(this.bottom[37] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[37] + "%",
                    left : this.left[37] + "%"
                }
            }
        },
        nodejs : function(){
            if(this.bottom[38] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[38] + "%",
                    left : this.left[38] + "%"
                }
            }
        },
        lowCode : function(){
            if(this.bottom[39] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[39] + "%",
                    left : this.left[39] + "%"
                }
            }
        },
        git : function(){
            if(this.bottom[40] == 0) {
                return {
                    visibility : 'hidden',
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[40] + "%",
                    left : this.left[40] + "%"
                }
            }
        },
    }
})