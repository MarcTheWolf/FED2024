//Create momobae literal object here.
let momobae = {
    'name' : "Momobae",
    'specialty' : 'K-Pop',
    "Power": 49,
    "Hitpoints" : 28,
    "Level": 7,
    "Gender": "Female"
}

//create a new element using javascript
let newDiv = document.createElement("div");
//add class to element through javascript
newDiv.classList.add("mystyle")
// and give it some content
newDiv.innerHTML = "Name: " + momobae.name + "<br>Specialty: " + momobae.specialty + "<br>Power: " + momobae.power + "<br>Hitpoints: " + momobae.hitpoints + "<br>Level: " + momobae.level + "<br>Gender: " + momobae.gender;
//add the div to the body of the html
document.body.appendChild(newDiv);


