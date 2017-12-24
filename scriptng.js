function onProcessing() {
    var flavor = document.getElementById('flavor').value;
    var sizecheck = document.getElementsByName('sizes');
    var size, price, Salted, SugarFree;
    var quantity = document.getElementById('quantity').value;
    var topping = document.getElementsByName('extras');

    for (var i = 0; i < sizecheck.length; i++) {
        if (sizecheck[i].checked) {
            size = sizecheck[i].value;
            break;
        }
    }


    for (var i = 0; i < topping.length; i++) {
        if (topping[i].checked) {
            if (i == 0)
                Salted = true;
            if (i == 1)
                SugarFree = true;
        }
    }
    const priceList = {
        small: 6.00,
        medium: 9.00,
        large: 11.00,
        chocolate: 1.00,
        mintchocolatechip: 1.25,
        strawberry: 1.50,
        vanilla: 1.50,
        salted: 0.50,
        sugarfree: 0.70


    };


    var checkflavor = document.getElementById("flavor")
    checkflavor.addEventListener("input", function (event) {
        if (checkflavor.validity.typeMismatch) {
            checkflavor.setCustomValidity("please enter a choice");
        } else {
            checkflavor.setCustomValidity("");
        }

    });


    const map = new Map(Object.entries(priceList));
    if (flavor && size && quantity) {

        price = quantity * (map.get(flavor) + map.get(size));
        if (Salted)
            price = price + map.get("salted");
        if (SugarFree)
            price = price + map.get("sugarfree");
    }


    if (price) {
        document.getElementById('pricecal').innerText = "The total cost is $ " + price.toFixed(2);
        document.getElementById('timecal').innerText = "Your order will be delivered in about "
            + (Math.floor(Math.random() * (45 - 25 + 1)) + 25) + " minutes"
        document.getElementById('estimate').innerText = "You selected " + flavor +
            "flavor of size " + size;
        if(flavor == "chocolate")
        {
          document.getElementById('image').innerHTML= '<img src="choc.jpg">'
         }
         if(flavor =="mintchocolatechip")
         {
             document.getElementById('image').innerHTML='<img src="mintchoclate.jpg">'
         }
         if(flavor == "strawberry")
         {
             document.getElementById('image').innerHTML='<img src="strawberry.jpg">'
         }
    }

}

function  disableOrder() {

    var input = document.getElementsByTagName("INPUT");
    var select = document.getElementsByTagName("SELECT");
    var result = true;
    for ( var i = 0; i < input.length; i++) {
        if (input[i].type == "checkbox") {
            continue;
        }
        if (input[i].value=="" ) {

            result = false;
        }
    };
    for (var j = 0; j < select.length; j++) {
        if (select[j].value == "" ) {
            result = false;
        }

    };
    if (result) {
        document.getElementById('order').disabled = false;
    }
    else {
        document.getElementById('order').disabled = true;
    }
}