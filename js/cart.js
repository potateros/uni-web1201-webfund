// var code = '<div class="my-class"> \
// <h1>The Header</h1> \
// <p>The paragraph of text</p> \
// <div class="my-quote"> \
// 	<p>The quote I\'d like to put in a div</p> \
// </div> \
// </div>';

var cart = document.getElementById("cart-items");

//item type counter to create table rows
var i = 0;

// clear button clears localstorage and forces reload
document.getElementById("clear-btn").onclick = function clearAll(){
    location.reload();
    localStorage.clear();
}

window.onload = function(){
    var total = 0; //reset every time cart is loaded

    if(localStorage.karinga != null){
        var row = cart.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        td1.innerHTML = "Karinga";
        td2.innerHTML = localStorage.getItem("karinga");
        td3.innerHTML = "RM " + 45 * localStorage.getItem("karinga");
        total += 45 * localStorage.getItem("karinga");
        i++;
    }

    if(localStorage.sasaba != null){
        var row = cart.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        td1.innerHTML = "Sasaba";
        td2.innerHTML = localStorage.getItem("sasaba");
        td3.innerHTML = "RM " + 45 * localStorage.getItem("sasaba");
        total += 45 * localStorage.getItem("sasaba");
        i++;
    }

    if(localStorage.gich != null){
        var row = cart.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        td1.innerHTML = "Gichathaini";
        td2.innerHTML = localStorage.getItem("gich");
        td3.innerHTML = "RM " + 40 * localStorage.getItem("gich");
        total += 40 * localStorage.getItem("gich");
        i++;
    }

    if(localStorage.bodum != null){
        var row = cart.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        td1.innerHTML = "Bodum French Press";
        td2.innerHTML = localStorage.getItem("bodum");
        td3.innerHTML = "RM " + 120 * localStorage.getItem("bodum");
        total += 120 * localStorage.getItem("bodum");
        i++;
    }

    if(localStorage.chemex != null){
        var row = cart.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        td1.innerHTML = "Eight Cup Classic Chemex";
        td2.innerHTML = localStorage.getItem("chemex");
        td3.innerHTML = "RM " + 180 * localStorage.getItem("chemex");
        total += 180 * localStorage.getItem("chemex");
        i++;
    }

    if(localStorage.delong != null){
        var row = cart.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        td1.innerHTML = "De'Longhi Manual Espresso Machine";
        td2.innerHTML = localStorage.getItem("delong");
        td3.innerHTML = "RM " + 890 * localStorage.getItem("delong");
        total += 890 * localStorage.getItem("delong");
        i++;
    }

    if(localStorage.karinga != null){
        var row = cart.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        td1.innerHTML = "Bodum French Press";
        td2.innerHTML = localStorage.getItem("bodum");
        td3.innerHTML = "RM " + 120 * localStorage.getItem("bodum");
        total += 120 * localStorage.getItem("bodum");
        i++;
    }

    if(localStorage.karinga != null){
        var row = cart.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        td1.innerHTML = "Bodum French Press";
        td2.innerHTML = localStorage.getItem("bodum");
        td3.innerHTML = "RM " + 120 * localStorage.getItem("bodum");
        total += 120 * localStorage.getItem("bodum");
        i++;
    }

    if(localStorage.karinga != null){
        var row = cart.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        td1.innerHTML = "Bodum French Press";
        td2.innerHTML = localStorage.getItem("bodum");
        td3.innerHTML = "RM " + 120 * localStorage.getItem("bodum");
        total += 120 * localStorage.getItem("bodum");
        i++;
    }

    var stotal = document.getElementById("stotal");
    stotal.innerHTML = "RM " + total;
}



