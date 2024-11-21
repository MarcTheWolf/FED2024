const searches = ["Ragdoll", "Golden Retriever"]

const searchIS = {
    "Ragdoll" : [
        {

            "Name" : "Misty",
            "Gender" : "Female",
            "Age" : "10 month old",
            "Coat" : "Seal Point",
            "Pic" : "Misty.png"
        }, 

        {
            "Name" : "Cloud",
            "Gender" : "Female",
            "Age" : "1 year old",
            "Coat" : "Blue Point",
            "Pic" : "Cloud.png"
        },

        {
            "Name" : "YuXuan",
            "Gender" : "-",
            "Age" : "-",
            "Coat" : "-",
            "Pic" : "-"
        }
    
    ],


    "Golden Retriever" : [
        {
            "Name" : "Sunny",
            "Gender" : "Male",
            'Age' : "16 months old",
            "Coat" : "Cream",
            "Pic" : "Sunny.png"
        },

        {
            "Name" : "Max",
            "Gender" : "Male",
            'Age' : "14 months old",
            "Coat" : "Gold",
            "Pic" : "Max.png"
        }
    ]
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

    function closeAllLists(list) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (list != x[i] && list != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  
  
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
  
  autocomplete(document.getElementById("myInput"), searches);
  
  
  document.getElementById("myForm").addEventListener("submit", (event) => {
      event.preventDefault();   
  });
  document.getElementById("search-button").addEventListener("click", function() {
      var inputValue = document.getElementById("myInput").value;
      displayResult(inputValue)
  })
  
  function displayResult(breed) {
      if (searches.includes(breed)) {
        let html = `<div class="row text-center result-title"> 
        <u><h2>${breed}</h2></u>
            </div>
            <div class="row">`
            for (const i in searchIS[breed]) {
                html += `
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
                    <div class="pet-card">
                        <img src="${searchIS[breed][i]["Pic"]}">
                        <u><h3>${searchIS[breed][i]["Name"]}</h3></u>
                        <h5>${searchIS[breed][i]["Gender"]}</h5>
                        <h5>${searchIS[breed][i]["Age"]}</h5>
                        <h5>${searchIS[breed][i]["Coat"]}</h5>
                    </div>
                </div>
                `}

  
      
        resultsList.innerHTML = html;
      document.getElementById("search-button").addEventListener("click", function() {
          var inputValue = document.getElementById("myInput").value;
          displayResult(inputValue)
      })
      } else {
          
          // Handle the case where the breed is not found
          resultsList.innerHTML = `<p>Oops~ Album for ${breed} not found.</p>`;
  
      }
  }
  
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });