/*
var user0 = {
    id: "0000",
    name: "John Doe",
    age: 25,
    bands: ["Amanda", "Barbados", "Cerise"]
};
var user1 = {
    id: "0001",
    name: "Pelle",
    age: 30,
    bands: ["Cerise", "Barbados"]
};
var user2 = {
    id: "0002",
    name: "Cowboy",
    age: 35,
    bands: ["Amanda", "Cerise", "Barbados", "Frost"]
};
var user3 = {
    id: "0003",
    name: "Banan",
    age: 20,
    bands: ["Frost"]
};


var users = [];
users.push(user0);
users.push(user1);
users.push(user2);
users.push(user3);
*/

function get_matches(u1, u2) {
    var common_bands = [];

    for (var i in u1.bands) {
        for (var j in u2.bands) {
            if (u1.bands[i] == u2.bands[j]) {
                common_bands.push(u1.bands[i]) 
            }
        }
    }
    return common_bands;
}

function get_best_match(u1, all_users) {
    var best_id = -1;
    var max_num = -1;
    var best_matches = [];
 
    for (var i in all_users) {
        var o = all_users[i];
        if (u1.id != o.id) {
            var matches = get_matches(u1, o);
            if (matches.length >= max_num) {
                best_id = o.id;
                max_num = matches.length;
                best_matches = matches;
            } 
        } 
    }
    return [best_id, best_matches];
}

// Returns an 2d-array of type
// [[userid, # of common bands]]
// The users with most commond bands (with the specified user) are first
function return_sorted_array(user, all_users) {
    var unsorted = [];

    for (var i in all_users) {
        var o = all_users[i];
        if (user.id != o.id) {
            unsorted.push([o.id, get_matches(user, o)]);   
        }
    }

    return unsorted.sort(compare);
}

function compare(a, b) {
    if (a[1] < b[1]) {
        return -1;
    }
    if (a[1] > b[1]) {
        return 1;
    }
    return 0;
}

function getUserByFBID(fbid, all_users) {
    for (var i in all_users) {
        if (all_users[i].fbid == fbid) {
            return all_users[i];
        }
    }

}
