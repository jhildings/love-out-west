console.log('\'Allo \'Allo!');

var concerts = new Array(3);
concerts[0] = new Array();
concerts[1] = new Array();
concerts[2] = new Array();

concerts[0].push("apa");
concerts[0].push("bepa");

var tdiv = document.getElementById('listor').children[0];
var fdiv = document.getElementById('listor').children[1];
var sdiv = document.getElementById('listor').children[2];
var listElement = document.createElement("ul");
tdiv.appendChild(listElement);
fdiv.appendChild(listElement);
sdiv.appendChild(listElement);


function addToList(array, str) {
    var cons = document.createElement("li");
    cons.innerHTML = str;
    if (array == 0) {
        tdiv.appendChild(cons);
    } else if (array == 1) {
        fdiv.appendChild(cons);
    } else if (array == 2) {
        sdiv.appendChild(cons);
    }
}

var wow = $.getJSON('http://wayoutwest.se/ajax/events/', function(data) {
    $.each(data.data, function(index, element) {
        var date = element.start.substring(0,10);
        if (date == '2014-08-07') {
            concerts[0].push(element.artist);
            addToList(0, element.artist);
        } 
        else if (date == '2014-08-08') {
            concerts[1].push(element.artist);
            addToList(1, element.artist);
        } 
        else if (date == '2014-08-09') {
            concerts[2].push(element.artist);
            addToList(2, element.artist);
        } 
    }); 

});

