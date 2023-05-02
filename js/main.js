function get(val) {
    return document.getElementById(val);
}

// Some stupid variables

const number = get("number");
const buttonI = get("btn");
const inputN = get("typeNumber");
const warBtn = get("warBtn");
const einzelPrice = get("numPrice");
const insgesamt = get("insgesamt");
const mainName = get("burgerBold");
const dumbText = get("dumbText");

const totalArrayDB = [];
let sum = 0;


// Changing totalprice of one specific burger and storing them in array. In case of buying more than 1 type of burger,then the total price won't be lost. But still shitty


warBtn.addEventListener("click", () => {
    const currentTotal = Number(einzelPrice.textContent * inputN.value);
	warBtn.innerHTML = "Schon gelegt";

    if(!isNaN(currentTotal)) {
        totalArrayDB.push(currentTotal);
        sum += currentTotal;
        insgesamt.textContent = sum.toFixed(2);
    }

    setTimeout(() => {
    warBtn.innerHTML = "In den Warenkorb ";
  }, 1000);
})


// function for choosing the main burger


function imgSlider(anything) {
    document.getElementById("imgBurgers").src = anything; 
}

let menu = [get("bigKing"), get("crispy"), get("whopper")];


// Changing Img, Price, name and content of the burger


menu.forEach(el => {
    el.addEventListener("click", () => {
        imgSlider("./img/" + el.alt + ".png")

        switch(el.alt) {
            case "crispy":
                inputN.value = 1;
                einzelPrice.innerHTML = "4.99";
                mainName.textContent = "Crispy"
                dumbText.textContent = "MMMMMM. Einfach lecker. Dieser kann der König des Monats werden. Nur wenn Sie diese Woche kommen, um Crispy zu kaufen, kostet es Sie die Hälfte des Preises. Wahnsinn. + Nur am Freitag nimmt Herr Samadov Bestellungen persönlich ein. Verpassen Sie es nicht."
                break;
            case "whopper":
                inputN.value = 1;
                einzelPrice.innerHTML = "6.49";
                mainName.textContent = "Whopper"
                dumbText.textContent = "Einmal beißen, zweimal genießen, denn dieser Whopper ist flammgegrillt. Der beste Burger der Welt, aber wenn Frankie diesen Burger macht, werden Sie auf keinen Fall unzufrieden sein, denn was auch immer er anfasst, es wird zu bester Qualität und bestem Geschmack."
                break;
            case "bigKing":
                inputN.value = 1;
                einzelPrice.innerHTML = "5.49";
                mainName.textContent = "Big King"
                dumbText.textContent = "Sie müssen verrückt sein, wenn Sie diese Woche die Gelegenheit verpassen, unseren neuen Promo-Burger zu probieren. Sie können alles vermissen, aber nicht das. + Exklusive Selfies mit Herrn Samadov"
                break;
        }
        
    })
});






