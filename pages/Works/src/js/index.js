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