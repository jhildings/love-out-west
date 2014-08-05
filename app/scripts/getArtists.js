console.log('\'Allo \'Allo!');

var concerts = [[],[],[]];

var tdiv = document.getElementById('listor').children[0];
var fdiv = document.getElementById('listor').children[1];
var sdiv = document.getElementById('listor').children[2];
var listElement = document.createElement("ul");
tdiv.appendChild(listElement);
fdiv.appendChild(listElement);
sdiv.appendChild(listElement);

function addToList(div, str) {
    var cons = document.createElement("li");
    cons.innerHTML = "<input type=\"checkbox\" />" + str;
    div.appendChild(cons); 
}

function getArtists() {
    var wow = $.getJSON('http://wayoutwest.se/ajax/events/', function(data) {
        $.each(data.data, function(index, element) {
            var date = element.start.substring(0,10);
            if (date == '2014-08-07') {
                concerts[0].push(element.artist);
                addToList(tdiv, element.artist);
            } 
            else if (date == '2014-08-08') {
                concerts[1].push(element.artist);
                addToList(fdiv, element.artist);
            } 
            else if (date == '2014-08-09') {
                concerts[2].push(element.artist);
                addToList(sdiv, element.artist);
            } 
        }); 
    });
}

