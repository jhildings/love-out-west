function getUsers(users) {
//    var users = [];
    var derp = $.getJSON('http://10.47.12.90/love-out-west/love-out-west/app/api.php', function(data) {
        $.each(data, function(index, elem) {
            users.push(elem);
            console.log(elem);
            console.log("elem.bands");
            console.log(elem.bands);
            console.log("fib: " + elem.fib + ", " + elem.name);
            var div = document.getElementById('users');
            div.innerHTML += "<p>" + elem.id + ": " + elem.name + "<br>";
        });
    });
}
