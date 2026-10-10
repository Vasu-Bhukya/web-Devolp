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