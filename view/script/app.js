const cursor = document.getElementById("cursor")
const night = document.querySelector(".nuit")
const buttonNight = document.getElementById("button_night")
var nightOn = false
const legende = document.getElementById("legende")
var legendeOn = false
const timeBar = document.getElementById("time_bar")

var ourResquest = new XMLHttpRequest()
ourResquest.open('GET', "https://datavisual1.000webhostapp.com/api_test/api/info/lecture.php")
ourResquest.onload = function() {
    var ourData = JSON.parse(ourResquest.responseText)
    ourData = ourData['data']
}
ourResquest.send()

buttonNight.addEventListener('click', function(){
    if(nightOn == false) {
        nightOn = true
        night.setAttribute('style', 'display: block;')
    } else {
        nightOn = false
        night.setAttribute('style', 'display: none;')
    }
})

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.clientY)+"px; left:"+(e.clientX)+"px;")
})

legende.addEventListener('click', function(){
    if(legendeOn == false) {
        legendeOn = true
        legende.setAttribute('style', 'right: -5px;')
    } else {
        legendeOn = false
        legende.setAttribute('style', '')
    }
})

const canvaTendance = document.getElementById("canvas_tendance")
const canvaEtabli = document.getElementById("canvas_etabli")
const canvamenacees = document.getElementById("canvas_menacees")
const canvaEmergeant = document.getElementById("canvas_emergeant")
var points = document.querySelectorAll(".button_point")

function elementPosition (a) {
    points = document.querySelectorAll(".button_point")
    var b = a.getBoundingClientRect();
    return {
      clientX: a.offsetLeft,
      clientY: a.offsetTop,
      clientX: (b.x || b.left),
      clientY: (b.y || b.top)
    }
  }


var positionTendance = elementPosition(canvaTendance)
var positionEtabli = elementPosition(canvaEtabli)
var positionmenacees = elementPosition(canvamenacees)
var positionEmergeant = elementPosition(canvaEmergeant)
var positionPoints = []
points.forEach(point => {
    positionPoints.push(elementPosition(point))
});

function recupPos() {
    positionPoints = []
    positionTendance = elementPosition(canvaTendance)
    positionEtabli = elementPosition(canvaEtabli)
    positionmenacees = elementPosition(canvamenacees)
    positionEmergeant = elementPosition(canvaEmergeant)
    points.forEach(point => {
        positionPoints.push(elementPosition(point))
    });

}

function testerCollision(woBox, woPoint ,boxBX, boxAX, boxBY, boxAY, largeurBoxA, largeurBoxB, hauteurBoxA, hauteurBoxB ) {
    if (!(boxBX > boxAX + largeurBoxA || boxBX < boxAX - largeurBoxB || boxBY > boxAY + hauteurBoxA || boxBY < boxAY - hauteurBoxB)) {
        if(woBox == "Tendance"){
            points[woPoint].setAttribute('style', 'background-color: #7EA477;')
        }else if(woBox == "Etabli"){
            points[woPoint].setAttribute('style', 'background-color: #55618B;')
        }else if(woBox == "menacees"){
            points[woPoint].setAttribute('style', 'background-color: #CC6363;')
        }else if(woBox == "Emergeant"){
            points[woPoint].setAttribute('style', 'background-color: #D1902E;')
        }
    }
}

function testColorPoint() {
    recupPos()
    let conteur = 0
    positionPoints.forEach(point => {
        testerCollision("Tendance", conteur ,point.clientX, positionTendance.clientX, point.clientY, positionTendance.clientY, canvaTendance.offsetWidth, points[conteur].offsetWidth, canvaTendance.offsetHeight, points[conteur].offsetHeight)
        testerCollision("Etabli", conteur ,point.clientX, positionEtabli.clientX, point.clientY, positionEtabli.clientY, canvaEtabli.offsetWidth, points[conteur].offsetWidth, canvaEtabli.offsetHeight, points[conteur].offsetHeight)
        testerCollision("menacees", conteur ,point.clientX, positionmenacees.clientX, point.clientY, positionmenacees.clientY, canvamenacees.offsetWidth, points[conteur].offsetWidth, canvamenacees.offsetHeight, points[conteur].offsetHeight)
        testerCollision("Emergeant", conteur ,point.clientX, positionEmergeant.clientX, point.clientY, positionEmergeant.clientY, canvaEmergeant.offsetWidth, points[conteur].offsetWidth, canvaEmergeant.offsetHeight, points[conteur].offsetHeight)
        conteur += 1
    });
}

const selectFront = document.getElementById("select_front")
const selectBack = document.getElementById("select_back")
const selectBDD = document.getElementById("select_BDD")
const selectLangage = document.getElementById("select_langage")
const selectFramework = document.getElementById("select_framework")
const selectOutil = document.getElementById("select_outil")
const selectServeur = document.getElementById("select_serveur")
const selectRecharge = document.getElementById("select_recharge")

setTimeout(function(){ testColorPoint(); }, 1500);

function change() {
    setTimeout(function(){ testColorPoint(); }, 1000);
    setTimeout(function(){ testColorPoint(); }, 800);
    setTimeout(function(){ testColorPoint(); }, 200);
    testColorPoint()
}
timeBar.onchange = change

selectFront.addEventListener('click', e => {
    setTimeout(function(){ testColorPoint(); }, 500);
});
selectBack.addEventListener('click', e => {
    setTimeout(function(){ testColorPoint(); }, 500);
});
selectBDD.addEventListener('click', e => {
    setTimeout(function(){ testColorPoint(); }, 500);
});
selectLangage.addEventListener('click', e => {
    setTimeout(function(){ testColorPoint(); }, 500);
});
selectFramework.addEventListener('click', e => {
    setTimeout(function(){ testColorPoint(); }, 500);
});
selectOutil.addEventListener('click', e => {
    setTimeout(function(){ testColorPoint(); }, 500);
});
selectServeur.addEventListener('click', e => {
    setTimeout(function(){ testColorPoint(); }, 500);
});
selectRecharge.addEventListener('click', e => {
    setTimeout(function(){ testColorPoint(); }, 500);
});