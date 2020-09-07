var baseUrl = "https://games-world.herokuapp.com";
var games;

function diplayPost(game) {
    var gameList = document.getElementById("api");
    var item = document.createElement("li");

    item.innerHTML = game.title + "  -  " + " ID: " + game._id;
    gameList.appendChild(item);
}



// fetch only one post by id
 fetch(baseUrl + "/games/5f52631364c20b00247f26d8", {method: "GET"})
.then(
    function(response){
        return response.json();
    }
).then(
    function(jsonResp) {
        console.log(jsonResp);
        games = jsonResp;
        diplayPost(games);
   }
); 

fetch(baseUrl + "/games", {method: "GET"})
.then(
    function(response){
        return response.json();
    }
).then(
    function(jsonResp) {
        games = jsonResp;
        games.forEach(function(element){
            diplayPost(element);            
        });

    }
)