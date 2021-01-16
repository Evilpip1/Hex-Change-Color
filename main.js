const button = document.querySelector('button')
const body = document.querySelector('body')
var text = document.querySelector('span')
const num = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]


button.addEventListener("click", HexChanger)
body.style.backgroundColor = "#fffff"


function HexChanger() {
    let hast = "#"
    for (let i = 0; i < 6; i++) {
        var num_selected = num[Math.floor(Math.random() * num.length)]
        body.style.backgroundColor = hast += num_selected
    }
    var actColor = hast + num_selected
    text.innerText = actColor
}
