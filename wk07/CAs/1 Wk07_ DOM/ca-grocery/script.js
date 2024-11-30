var elements = document.querySelectorAll("li.hot")
for (var i = 0; i < elements.length; i++) {
    elements[i].className = "cool"
}

var elements = document.getElementsByClassName("hot");
if (elements.length >= 3) {
    console.log("There are at least 3 hots")
    element[2].className = "cool";
}

var elements = document.getElementsByTagName("li");
if (element.length >= 1) {
    element[0].className="cool";
}