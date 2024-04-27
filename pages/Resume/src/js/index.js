function darkmode() {
    var elements = document.querySelectorAll(".changemode");
    var hidden = document.getElementById("modeButton-1");
    var show = document.getElementById("modeButton-2");
    
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '#121616';
        elements[i].style.color = 'white';
    }

    hidden.style.display = "none";
    show.style.display = "inline";
 }

 function lightmode() {
    var elements = document.querySelectorAll(".changemode");
    var hidden = document.getElementById("modeButton-2");
    var show = document.getElementById("modeButton-1");
    
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '#FCF6F5FF';
        elements[i].style.color = 'black';
    }

    hidden.style.display = "none";
    show.style.display = "inline";
 }