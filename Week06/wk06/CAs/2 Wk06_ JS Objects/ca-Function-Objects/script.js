//Fill in the ??? to complete the function object.
function Singer(name, specialty, power, hitpoints, level, gender )
{
    this.name = name,
    this.specialty = specialty,
    this.power = power,
    this.hitpoints = hitpoints,
    this.level = level,
    this.gender = gender

    this.maxPower = function() {
        return (this.power * this.level) - this.hitpoints
    }

    this.evalHitPoints = function(hp) {
        switch(true) {
            case(hp >= 71 && hp <= 100):
                return "Amazing";
            
            case(hp >= 51 && hp <= 70):
                return "Strong";

            case(hp >= 0 && hp <= 50): 
                return "Weak";

            default:
                return "NA"
            
        }
    }

    this.singerProfile = function() {
        return `${this.name} Level ${this.level}, Gender ${this.gender}, Specialty ${this.specialty}, Power ${this.power}, Hitpoints ${this.evalHitPoints}`
    }
}


    


//Create the function objects momobae and minabae.
let momobae = new Singer("Momobae", "K-pop", 49, 28, 7, "Female")
let minabae = new Singer("Minibae","Invisibility", 48, 85, 3, "Male" )




//create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("mystyle")
// and give it some content
newDiv1.innerHTML = "Momobae's Singer Profile: <br>" +momobae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv1);

//create a new element using javascript
let newDiv2 = document.createElement("div");
//add class to element through javascript
newDiv2.classList.add("mystyle")
// and give it some content
newDiv2.innerHTML = "Minabae's Singer Profile: <br>" +minabae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv2);