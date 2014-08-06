function getUsers(users) {
//    var users = []; 

    var bands = ["OutKast","Queens of the Stone Age","The National","Robyn","R\u00f6yksopp","Little Dragon","Icona Pop","Janelle Mon\u00e1e","Pusha T","Future","Neutral Milk Hotel","Poli\u00e7a","Blood Orange","Jamie xx","Joey Bada$$","Shlohmo","M\u00d8","I Break Horses","Darkside","Machinedrum","Marissa Nadler","Jungle","Jonathan Wilson","Jenny Wilson","Deafheaven","Forest Swords","Markus Kruneg\u00e5rd","Chloe Howl","Brody Dalle","Mighty Oaks","Circa Waves","Holly Herndon","Yumi Zouma","Hurula","Annika Norlin"];
    
      console.log(bands[1]); 
    var derp = $.getJSON('http://10.47.12.90/love-out-west/love-out-west/app/api.php', function(data) {
        $.each(data, function(index, elem) {
            users.push(elem);
        //    console.log(elem);
            console.log("elem.bands");
         //   console.log(elem.bands);  
            console.log(bands[1]); 
     //       console.log("fib: " + elem.fib + ", " + elem.name);
            var div = document.getElementById('users');
            div.innerHTML += "<p>" + elem.id + ": " + elem.name + "hej<br>";
        });
    }); 
}
