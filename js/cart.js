const currency = "RM "

//database of all items
var data = {
    "karinga": {
        name: "Karinga Coffee Beans",
        qty: localStorage.karinga,
        price: 45,
        total: localStorage.karinga * 45
    },
    "sasaba": {
        name: "Sasaba Coffee Beans",
        qty: localStorage.sasaba,
        price: 45,
        total: localStorage.sasaba * 45
    },
    "gich": {
        name: "Gichathaini Coffee Beans",
        qty: localStorage.gich,
        price: 40,
        total: localStorage.gich * 40
    },
    "bodum": {
        name: "Bodum French Press",
        qty: localStorage.bodum,
        price: 120,
        total: localStorage.bodum * 120
    },
    "chemex": {
        name: "Eight Cup Classic Chemex",
        qty: localStorage.chemex,
        price: 180,
        total: localStorage.chemex * 180
    },
    "delong": {
        name: "De'Longhi Manual Espresso Machine",
        qty: localStorage.delong,
        price: 890,
        total: localStorage.delong * 890
    },
    "hami": {
        name: "Hamilton Beach Programmable Coffee Maker",
        qty: localStorage.hami,
        price: 1090,
        total: localStorage.hami * 1090
    },
    "icona": {
        name: "Icona Manual Espresso Machine",
        qty: localStorage.icona,
        price: 890,
        total: localStorage.icona * 890
    },
    "mr": {
        name: "Mr Coffee Coffee Maker",
        qty: localStorage.mr,
        price: 125,
        total: localStorage.mr * 125
    },
}

//Initialise userdata
var userdata = {
    name: localStorage.name,
    email: localStorage.email,
    city: localStorage.city,
    address: localStorage.address,
    postcode: localStorage.postcode,
    country: localStorage.country
}

const added = "You have added ";
const tocart = " to cart!";

if (document.getElementById("karinga-submit") != null) {
    document.getElementById("karinga-submit").onclick = function submitted() {
        var karinga_select = document.getElementById("karinga-select");
        var karinga = karinga_select.options[karinga_select.selectedIndex].value;
        localStorage.setItem("karinga", karinga);
        alert(added + localStorage.karinga + " " + data.karinga.name + tocart);
    };
}

if (document.getElementById("sasaba-submit") != null) {
    document.getElementById("sasaba-submit").onclick = function submitted() {
        var sasaba_select = document.getElementById("sasaba-select");
        var sasaba = sasaba_select.options[sasaba_select.selectedIndex].value;
        localStorage.setItem("sasaba", sasaba);
        alert(added + localStorage.sasaba + " " + data.sasaba.name + tocart);
    }
}

if (document.getElementById("gich-submit") != null) {
    document.getElementById("gich-submit").onclick = function submitted() {
        var gich_select = document.getElementById("gich-select");
        var gich = gich_select.options[gich_select.selectedIndex].value;
        localStorage.setItem("gich", gich);
        alert(added + localStorage.gich + " " + data.gich.name + tocart);
    };
}

if (document.getElementById("bodum-submit") != null) {
    document.getElementById("bodum-submit").onclick = function submitted() {
        var bodum_select = document.getElementById("bodum-select");
        var bodum = bodum_select.options[bodum_select.selectedIndex].value;
        localStorage.setItem("bodum", bodum);
        alert(added + localStorage.gich + " " + data.gich.name + tocart);
    };
}

if (document.getElementById("chemex-submit") != null) {
    document.getElementById("chemex-submit").onclick = function submitted() {
        var chemex_select = document.getElementById("chemex-select");
        var chemex = chemex_select.options[chemex_select.selectedIndex].value;
        localStorage.setItem("chemex", chemex);
        alert(added + localStorage.chemex + " " + data.chemex.name + tocart);
    };
}

if (document.getElementById("delong-submit") != null) {
    document.getElementById("delong-submit").onclick = function submitted() {
        var delong_select = document.getElementById("delong-select");
        var delong = delong_select.options[delong_select.selectedIndex].value;
        localStorage.setItem("delong", delong);
        alert(added + localStorage.delong + " " + data.delong.name + tocart);
    };
}

if (document.getElementById("hami-submit") != null) {
    document.getElementById("hami-submit").onclick = function submitted() {
        var hami_select = document.getElementById("hami-select");
        var hami = hami_select.options[hami_select.selectedIndex].value;
        localStorage.setItem("hami", hami);
        alert(added + localStorage.hami + " " + data.hami.name + tocart);
    };
}

if (document.getElementById("icona-submit") != null) {
    document.getElementById("icona-submit").onclick = function submitted() {
        var icona_select = document.getElementById("icona-select");
        var icona = icona_select.options[icona_select.selectedIndex].value;
        localStorage.setItem("icona", icona);
        alert(added + localStorage.icona + " " + data.icona.name + tocart);
    };
}

if (document.getElementById("mr-submit") != null) {
    document.getElementById("mr-submit").onclick = function submitted() {
        var mr_select = document.getElementById("mr-select");
        var mr = mr_select.options[mr_select.selectedIndex].value;
        localStorage.setItem("mr", mr);
        alert(added + localStorage.mr + " " + data.mr.name + tocart);
    };
}

// clear button clears localstorage and forces reload
if (document.getElementById("cart-items") != null) {
    var cart = document.getElementById("cart-items");
    var i = 0; //item type counter to create table rows

    if(document.getElementById("clear-btn") != null){
        document.getElementById("clear-btn").onclick = function clearAll() {
            location.reload();
            localStorage.clear();
        }
    }

    window.onload = function () {
        var total = 0; //reset every time cart is loaded

        if (localStorage.karinga != null) {
            var row = cart.insertRow(i);
            var td1 = row.insertCell(0);
            var td2 = row.insertCell(1);
            var td3 = row.insertCell(2);
            td1.innerHTML = data.karinga.name;
            td2.innerHTML = data.karinga.qty;
            td3.innerHTML = currency + data.karinga.total;
            total += data.karinga.total;
            i++;
        }

        if (localStorage.sasaba != null) {
            var row = cart.insertRow(i);
            var td1 = row.insertCell(0);
            var td2 = row.insertCell(1);
            var td3 = row.insertCell(2);
            td1.innerHTML = data.sasaba.name;
            td2.innerHTML = data.sasaba.qty;
            td3.innerHTML = currency + data.sasaba.total;
            total += data.sasaba.total;
            i++;
        }

        if (localStorage.gich != null) {
            var row = cart.insertRow(i);
            var td1 = row.insertCell(0);
            var td2 = row.insertCell(1);
            var td3 = row.insertCell(2);
            td1.innerHTML = data.gich.name;
            td2.innerHTML = data.gich.qty;
            td3.innerHTML = currency + data.gich.total;
            total += data.gich.total;
            i++;
        }

        if (localStorage.bodum != null) {
            var row = cart.insertRow(i);
            var td1 = row.insertCell(0);
            var td2 = row.insertCell(1);
            var td3 = row.insertCell(2);
            td1.innerHTML = data.bodum.name;
            td2.innerHTML = data.bodum.qty;
            td3.innerHTML = currency + data.bodum.total;
            total += data.bodum.total;
            i++;
        }

        if (localStorage.chemex != null) {
            var row = cart.insertRow(i);
            var td1 = row.insertCell(0);
            var td2 = row.insertCell(1);
            var td3 = row.insertCell(2);
            td1.innerHTML = data.chemex.name;
            td2.innerHTML = data.chemex.qty;
            td3.innerHTML = currency + data.chemex.total;
            total += data.chemex.total;
            i++;
        }

        if (localStorage.delong != null) {
            var row = cart.insertRow(i);
            var td1 = row.insertCell(0);
            var td2 = row.insertCell(1);
            var td3 = row.insertCell(2);
            td1.innerHTML = data.delong.name;
            td2.innerHTML = data.delong.qty;
            td3.innerHTML = currency + data.delong.total;
            total += data.delong.total;
            i++;
        }

        if (localStorage.hami != null) {
            var row = cart.insertRow(i);
            var td1 = row.insertCell(0);
            var td2 = row.insertCell(1);
            var td3 = row.insertCell(2);
            td1.innerHTML = data.hami.name;
            td2.innerHTML = data.hami.qty;
            td3.innerHTML = currency + data.hami.total;
            total += data.hami.total;
            i++;
        }

        if (localStorage.icona != null) {
            var row = cart.insertRow(i);
            var td1 = row.insertCell(0);
            var td2 = row.insertCell(1);
            var td3 = row.insertCell(2);
            td1.innerHTML = data.icona.name;
            td2.innerHTML = data.icona.qty;
            td3.innerHTML = currency + data.icona.total;
            total += data.icona.total;
            i++;
        }

        if (localStorage.mr != null) {
            var row = cart.insertRow(i);
            var td1 = row.insertCell(0);
            var td2 = row.insertCell(1);
            var td3 = row.insertCell(2);
            td1.innerHTML = data.mr.name;
            td2.innerHTML = data.mr.qty;
            td3.innerHTML = currency + data.mr.total;
            total += data.mr.total;
            i++;
        }

        var stotal = document.getElementById("stotal");
        stotal.innerHTML = currency + total;
    }
}

if (document.getElementById("submit") != null) {
    document.getElementById("submit").onclick = function submitted() {

        var name = document.getElementsByTagName("input")[0].value;
        localStorage.setItem("name", name);

        var email = document.getElementsByTagName("input")[1].value;
        localStorage.setItem("email", email);

        var city = document.getElementsByTagName("input")[2].value;
        localStorage.setItem("city", city);

        var address = document.getElementsByTagName("input")[3].value;
        localStorage.setItem("address", address);

        var postcode = document.getElementsByTagName("input")[4].value;
        localStorage.setItem("postcode", postcode);

        var country = document.getElementsByTagName("input")[5].value;
        localStorage.setItem("country", country);
    }
}

if (document.getElementById("details") != null) {
    var details = document.getElementById("details");
    details.innerHTML = userdata.name + "<br/>" + userdata.email + "<br/>" +
        userdata.address + "<br/>" + userdata.city + "<br/>" +
        userdata.postcode + "<br/>" + userdata.country + "<br/>";
}
