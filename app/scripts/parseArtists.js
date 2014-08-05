// This might work?

var wowfile = $.get('wayoutwest.json');

var yeeson = JSON.parse(wowfile)
var torsdag = []; 
var fredag = []; 
var lordag = []; 
for (var i = 0; i < 138; i++) { // Magic number :)
    if (yeeson[i].date === '2014-08-07') {
        torsdag.push(yeeson[i]);
    } else if (yeeson[i].date === '2014-08-08') {
        fredag.push(yeeson[i]);
    } else if (yeeson[i].date === '2014-08-09') {
        lordag.push(yeeson[i]);
    }   
}

console.log(torsdag[0].artist);

