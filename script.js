const skills = document.getElementsByClassName("skills");
const age = document.getElementsByName("age1"); // node_list
var reputation = document.getElementsByClassName("reputation");
var networth = document.getElementById("networth"); 
var education = document.getElementById("education"); 
var button = document.getElementById("result");
const bid = document.getElementById("startingBid")
const loveLetter = document.getElementById("loveLetter");

const calculate = () => {
    let groomsName = document.getElementById("groomsName").value;
    let price = Number(bid.value)
    if (groomsName != "" && price > 0) {
        price = price * Number(education.value)
        price = price * Number(networth.value)
        price = getCheckboxValuesForLoop(skills, price);
        price = getRadioValue(age, price);
        price = getCheckboxValuesForLoop(reputation, price);

        let person = {

        groom_name: groomsName,
        
        groom_price: price,
        
        letter_to_groom: loveLetter.value
        }
    
    document.getElementById("show").innerHTML = `The price for your groom ${person.groom_name} is ${person.groom_price}. Your love letter is "${person.letter_to_groom}"`;
    }
    else {
        alert()
    }
}

const getCheckboxValuesForLoop = (html_collection, price) => { 
    for (let i=0; i < html_collection.length; i++) {  
        if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
            price = price + Number(html_collection[i].value)
        }
        else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
            price = price * Number(html_collection[i].value)
        }
    }
    return price;
}

const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

button.addEventListener("click", calculate)