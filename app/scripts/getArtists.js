console.log('\'Allo \'Allo!');

var concerts = [[],[],[]];

var tdiv = document.getElementById('bands').children[0];
var fdiv = document.getElementById('bands').children[1];
var sdiv = document.getElementById('bands').children[2];
var listElement = document.createElement("ul");
tdiv.appendChild(listElement);
fdiv.appendChild(listElement);
sdiv.appendChild(listElement);

function addToList(div, elem) {
    var cons = document.createElement("li");
    var time = elem.start.substring(11,16);
    var str = elem.artist + " " + time;
    cons.innerHTML = "<input type=\"checkbox\" />" + str;
    div.appendChild(cons); 
}

function getArtists() {
    var wow = $.getJSON('http://wayoutwest.se/ajax/events/', function(data) {
        $.each(data.data, function(index, element) {
            var date = element.start.substring(0,10);
            var time = element.start.substring(11,16);
            if (date == '2014-08-07') {
                addToList(tdiv, element);
            } 
            else if (date == '2014-08-08') {
                addToList(fdiv, element);
            } 
            else if (date == '2014-08-09') {
                addToList(sdiv, element);
            } 
        }); 
    });
}

