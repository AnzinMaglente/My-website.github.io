let game1description = document.getElementsByClassName("set1game")
let game2description = document.getElementsByClassName("set2game")

function forward() {   
    Array.from(game1description).forEach((x) => {
        if (x.style.display === "none") {
            x.style.display = "inline";
        } else {
            x.style.display = "none";
        }
    })
    Array.from(game2description).forEach((y) => {
        if (y.style.display === "inline") {
            y.style.display = "none";
        } else {
            y.style.display = "inline";
        }
    })
}

function backward() {   
    Array.from(game2description).forEach((x) => {
        if (x.style.display === "none") {
            x.style.display = "inline";
        } else {
            x.style.display = "none";
        }
    })
    Array.from(game1description).forEach((y) => {
        if (y.style.display === "inline") {
            y.style.display = "none";
        } else {
            y.style.display = "inline";
        }
    })
}

function darkmode() {
    var elements = document.querySelectorAll(".changemode");
    var elements2 = document.querySelectorAll(".changemode-2");
    var hidden = document.getElementById("modeButton-1");
    var show = document.getElementById("modeButton-2");
    
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '#121616';
        elements[i].style.color = 'white';
    }

    for (var i = 0; i < elements2.length; i++) {
        elements2[i].style.backgroundColor = '#FCF6F5FF';
        elements2[i].style.color = '#121616';
    }

    hidden.style.display = "none";
    show.style.display = "inline";
 }

 function lightmode() {
    var elements = document.querySelectorAll(".changemode");
    var elements2 = document.querySelectorAll(".changemode-2");
    var hidden = document.getElementById("modeButton-2");
    var show = document.getElementById("modeButton-1");
    
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'white';
        elements[i].style.color = 'black';
    }
    for (var i = 0; i < elements2.length; i++) {
        elements2[i].style.backgroundColor = '#181818';
        elements2[i].style.color = 'white';
    }

    hidden.style.display = "none";
    show.style.display = "inline";
 }