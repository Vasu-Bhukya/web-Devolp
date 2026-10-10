users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image" : "john.png"
    },
    {
        "name": "Jane Doe",
        "gender": "Female",
        "image" : "jane.png"
    }
]

var ind = 0;

function toggle(){
    if(ind == 0){
        ind = 1;
    }
    else{
        ind=0;
    }
    document.getElementById("user-name").innerHTML = users[ind].name;
    document.getElementById("user-gender").innerHTML = users[ind].gender;
    document.getElementById("user-image").src = users[ind].image;
}

function randomUser(){
    fetch("https://randomuser.me/api")
         .then(function(rawData){
             return rawData.json();
         })
         .then(function(jsonData){
            var user = jsonData.results[0];
            var gender = user.gender;
            var fullName = user.name.first + " " + user.name.last;
            var imageUrl = user.picture.large;
            
             document.getElementById("user-name").innerHTML = fullName;
             document.getElementById("user-gender").innerHTML = gender;
             document.getElementById("user-image").src = user.picture.large;
         });
}