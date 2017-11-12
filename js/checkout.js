var userdata = {
    name: localStorage.name,
    email: localStorage.email,
    city: localStorage.city,
    address: localStorage.address,
    postcode: localStorage.postcode,
    country: localStorage.country
}

if(document.getElementById("submit") != null){
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

        alert("Your order has been sent. Here is your summary.")
    }
 }


