var rute1 = document.getElementById('rute1');
var rute2 = document.getElementById('rute2');
var rute3 = document.getElementById('rute3');
var rute4 = document.getElementById('rute4');
var rute5 = document.getElementById('rute5');
var rute6 = document.getElementById('rute6');
var rute7 = document.getElementById('rute7');
var rute8 = document.getElementById('rute8');
var rute9 = document.getElementById('rute9');
rute9.innerHTML = "";

randomize()

function swapElements(element1, element2) {
    var temp = element1.innerHTML;
    element1.innerHTML = element2.innerHTML;
    element2.innerHTML = temp;
    //console.log(temp);
}

function randomize() {
    swapElements(rute4, rute6);
    swapElements(rute3, rute7);
    swapElements(rute4, rute7);
    swapElements(rute6, rute2);
    swapElements(rute9, rute8);
    swapElements(rute1, rute2);
    swapElements(rute7, rute3);
    swapElements(rute1, rute7);
    swapElements(rute2, rute5);
}

function clicked(element, alt1, alt2, alt3, alt4) {
    if (!alt3) {
        alt3 = alt1;
    }
    if (!alt4) {
        alt4 = alt1
    }
    if (document.getElementById(alt1).innerHTML == '') {
        swapElements(element, document.getElementById(alt1));
    }
    else if (document.getElementById(alt2).innerHTML == '') {
        swapElements(element, document.getElementById(alt2));
    }
    else if (document.getElementById(alt3).innerHTML == '') {
        swapElements(element, document.getElementById(alt3));

    }
    else if (document.getElementById(alt4).innerHTML == '') {
        swapElements(element, document.getElementById(alt4));
    }
    if (rute1.innerHTML == '<img src="img/Smiley1.png" alt="1">' &&
        rute2.innerHTML == '<img src="img/Smiley2.png" alt="2">' &&
        rute3.innerHTML == '<img src="img/Smiley3.png" alt="3">' &&
        rute4.innerHTML == '<img src="img/Smiley4.png" alt="4">' &&
        rute5.innerHTML == '<img src="img/Smiley5.png" alt="5">' &&
        rute6.innerHTML == '<img src="img/Smiley6.png" alt="6">' &&
        rute7.innerHTML == '<img src="img/Smiley7.png" alt="7">' &&
        rute8.innerHTML == '<img src="img/Smiley8.png" alt="8">')
        {
        rute9.innerHTML = '<img src="img/Smiley9.png" alt="9">';
        rute1.style.outline = "none";
        rute2.style.outline = "none";
        rute3.style.outline = "none";
        rute4.style.outline = "none";
        rute5.style.outline = "none";
        rute6.style.outline = "none";
        rute7.style.outline = "none";
        rute8.style.outline = "none";
        rute9.style.outline = "none";

    }
}