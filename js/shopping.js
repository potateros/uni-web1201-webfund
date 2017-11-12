if(document.getElementById("karinga-submit") != null){
    document.getElementById("karinga-submit").onclick = function submitted() {
        var karinga_select = document.getElementById("karinga-select");
        var karinga = karinga_select.options[karinga_select.selectedIndex].value;
        localStorage.setItem("karinga", karinga);
        alert("You have added " + localStorage.karinga + " Karinga packs to cart!");
    };
}

if(document.getElementById("sasaba-submit") != null){
    document.getElementById("sasaba-submit").onclick = function submitted(){
        var sasaba_select = document.getElementById("sasaba-select");
        var sasaba = sasaba_select.options[sasaba_select.selectedIndex].value;
        localStorage.setItem("sasaba", sasaba);
        alert("You have added " + localStorage.sasaba + " Sasaba packs to cart!");
    }
}

if(document.getElementById("gich-submit") != null){
    document.getElementById("gich-submit").onclick = function submitted() {
        var gich_select = document.getElementById("gich-select");
        var gich = gich_select.options[gich_select.selectedIndex].value;
        localStorage.setItem("gich", gich);
        alert("You have added " + localStorage.gich + " Gichathaini packs to cart!");
    };
}

if(document.getElementById("bodum-submit") != null){
    document.getElementById("bodum-submit").onclick = function submitted() {
        var bodum_select = document.getElementById("bodum-select");
        var bodum = bodum_select.options[bodum_select.selectedIndex].value;
        localStorage.setItem("bodum", bodum);
        alert("You have added " + localStorage.bodum + " Bodum French Press to cart!");
    };
}

// if(document.getElementById("bodum-submit") != null){
//     document.getElementById("bodum-submit").onclick = function submitted() {
//         var gich_select = document.getElementById("bodum-select");
//         var gich = gich_select.options[gich_select.selectedIndex].value;
//         localStorage.setItem("gich", gich);
//         alert("You have added " + localStorage.gich + " Bodum French Press to cart!");
//     };
// }

// if(document.getElementById("bodum-submit") != null){
//     document.getElementById("bodum-submit").onclick = function submitted() {
//         var gich_select = document.getElementById("bodum-select");
//         var gich = gich_select.options[gich_select.selectedIndex].value;
//         localStorage.setItem("gich", gich);
//         alert("You have added " + localStorage.gich + " Bodum French Press to cart!");
//     };
// }

// if(document.getElementById("bodum-submit") != null){
//     document.getElementById("bodum-submit").onclick = function submitted() {
//         var gich_select = document.getElementById("bodum-select");
//         var gich = gich_select.options[gich_select.selectedIndex].value;
//         localStorage.setItem("gich", gich);
//         alert("You have added " + localStorage.gich + " Bodum French Press to cart!");
//     };
// }

// if(document.getElementById("bodum-submit") != null){
//     document.getElementById("bodum-submit").onclick = function submitted() {
//         var gich_select = document.getElementById("bodum-select");
//         var gich = gich_select.options[gich_select.selectedIndex].value;
//         localStorage.setItem("gich", gich);
//         alert("You have added " + localStorage.gich + " Bodum French Press to cart!");
//     };
// }

// if(document.getElementById("bodum-submit") != null){
//     document.getElementById("bodum-submit").onclick = function submitted() {
//         var gich_select = document.getElementById("bodum-select");
//         var gich = gich_select.options[gich_select.selectedIndex].value;
//         localStorage.setItem("gich", gich);
//         alert("You have added " + localStorage.gich + " Bodum French Press to cart!");
//     };
// }

// if(document.getElementById("bodum-submit") != null){
//     document.getElementById("bodum-submit").onclick = function submitted() {
//         var gich_select = document.getElementById("bodum-select");
//         var gich = gich_select.options[gich_select.selectedIndex].value;
//         localStorage.setItem("gich", gich);
//         alert("You have added " + localStorage.gich + " Bodum French Press to cart!");
//     };
// }

// if(document.getElementById("bodum-submit") != null){
//     document.getElementById("bodum-submit").onclick = function submitted() {
//         var gich_select = document.getElementById("bodum-select");
//         var gich = gich_select.options[gich_select.selectedIndex].value;
//         localStorage.setItem("gich", gich);
//         alert("You have added " + localStorage.gich + " Bodum French Press to cart!");
//     };
// }
