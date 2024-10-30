var recipes = ["Falafel", "Tomato Soup", "Kaya Toast"]
var ingredients = {
    "Falafel" : ["Dried chickpeas", "Fresh herbs", "Onion", "Garlic", "Kosher salt and pepper", "Spices", "Baking powder", "Sesame seeds"],
    "Tomato Soup" : ["Butter","Yellow onion","Garlic","Crushed tomatoes","Chicken stock","Basil","Sugar","Black pepper","Whipping cream","Parmesan cheese"],
    "Kaya Toast" : ["Bread", "Butter", "Kaya"]
}

var instructions = {
    "Falafel" : [
        "Soak chickpeas for 24 hours. Cover them in plenty of water and add baking soda to help soften them as they soak. The chickpeas will at least double in size as they soak. Drain very well.",
        "Make mixture. Add chickpeas, fresh herbs (parsley, cilantro, and dill), garlic, onion, and spices to food processor and pulse a little bit at a time until the mixture is finely ground. You’ll know it’s ready when the texture is more like coarse meal.",
        "Refrigerate (important.) Transfer the falafel mixture to a bowl, cover and refrigerate for at least 1 hour or overnight. The chilled mixture will hold together better, making it easier to form the falafel patties.",
        "Form patties or balls. Once the falafel mixture has been plenty chilled, stir in baking powder and toasted sesame seeds, then scoop golf ball-sized balls and form into balls or patties (if you go the patties route, do not flatten them too much, you want them to still be nice and fluffy when they’re cooked.)",
        "Fry. Frying is the traditional way to cook falafel and yields the most authentic and best result. Heat the oil on medium-high until it bubbles softly (your oil should be hot enough around 375 degrees F, but not too hot that it causes the falafel to fall apart. \n Carefully drop the falafel in the oil, using a slotted spoon, and fry for 3-5 minutes until medium brown on the outside. Avoid over-crowding the falafel; fry them in batches if necessary.)"
    ],
    "Tomato Soup" : [
        "Heat a non-reactive pot over medium heat. Melt in 4 Tbsp butter then sautee onions until softened and golden (10-12 min). Add minced garlic and saute another minute.",
        "Stir in two 28 oz cans of crushed tomatoes with their juice, your chicken stock, chopped basil, sugar and black pepper. Bring to a boil then reduce heat, partially cover and simmer 10 minutes.",
        "Use an immersion blender in the pot or blend in batches using a blender (be careful not to overfill the blender with hot liquid) and return soup to the pot.",
        "Stir in the heavy cream and shredded parmesan. Return to a simmer and season to taste if needed.",
        "Ladle into warm bowls and garnish with more parmesan and basil."
    ],
    "Kaya Toast" : [
        "Get two slices of breads",
        "Cut the crust off the bread",
        "Toast the slices of bread in your toaster and toast until they are golden brown, slightly darker if I may put it that way",
        "Spread the kaya generously on both sides of the toast",
        "Cut thin slices of cold butter and arrange it on top of the toast, about 4 slices",
        "Top with another piece of toast"
    ]
}

var imgLink = {
    "Falafel" : "Falafel.png",
    "Kaya Toast" : "kayatoast.png",
    "Tomato Soup" : "Tomatosoup.png"
}

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });


  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });


  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}


document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("myInput"), recipes);


document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();   
});
document.getElementById("search-button").addEventListener("click", function() {
    var inputValue = document.getElementById("myInput").value;
    displayRecipes(inputValue)
})

function displayRecipes(food) {
    if (recipes.includes(food)) {
        var curringredient = ingredients[food]
        var currinstructions = instructions[food]
        html = `      
        <div class="container">
        <div class="row">
            <div class="col text-center">
              <h2><u>${food} Recipe</u></h2>
            </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 text-center">
            <img src="${imgLink[food]}" class="img-fluid">
          </div>
          <div class="col-lg-6 col-md-12 text-center">
              <h3><u>Ingredients</u></h3>
              <div class="text-left">
              <ul>`
        if (curringredient) {
            curringredient.forEach(element => {
                html += `
                <li>${element}</li>
                `
            });
        }

        html += `
              </ul>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 text-center">
            <h3><u>Instructions</u></h3>
            <div class="text-left">
              <ol>`
        if (currinstructions) {
            currinstructions.forEach(element => {
                html += `
                <li>${element}</li>`
            })
        }

        html += `
              </ol>
            </div>
          </div>
      </div>`

    
    resultsList.innerHTML = html;
    document.getElementById("search-button").addEventListener("click", function() {
        var inputValue = document.getElementById("myInput").value;
        displayRecipes(inputValue)
    })
    } else {
        
        // Handle the case where the food is not found
        resultsList.innerHTML = `<p>Oops~ Recipe for ${food} not found.</p>`;

    }
}

document.addEventListener("click", function (e) {
  closeAllLists(e.target);
});


