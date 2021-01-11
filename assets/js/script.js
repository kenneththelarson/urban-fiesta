// ***** START - GET RANDOM DRINK *****
var ingredientListEl = document.querySelector("#ingredients-list");
var ingredientListName = document.querySelector("#ingredient-name")
var drinkNameEl = document.querySelector("#drink-title");
var drinkMeasureEl = document.querySelector("#measure-list");
var drinkInstructionsEl = document.querySelector("#instructions-list")
var clearSearchEl = document.querySelector("#clear-search")
var drinkNameH2El = document.querySelector("#drink-name")
var measureListName = document.querySelector("#measure-name")
var instructionListName = document.querySelector("#instruction-name")

function getDrinkRecipe() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getDrinkTitle()
            getDrinkName(data);
            getIngredients(data);
            getMeasure(data);
            getInstructions(data);
            ingredientName();
            MeasureName();
            instructionsName();
        })
}

// Creating drink name call 
function getDrinkTitle(){

    
    var drinkNameH2 = document.createElement('h3');
    var drinkNameH2Text = document.createTextNode("Drink Name:")
    drinkNameH2.appendChild(drinkNameH2Text);
    drinkNameH2El.appendChild(drinkNameH2)

    var itemTwo = document.getElementById("drink-name");
    itemTwo.replaceChild(drinkNameH2, itemTwo.childNodes[0]);

}

function getDrinkName(data) {
    var drinks = data.drinks[0].strDrink;
    var drinkNameDiv = document.createElement('p');
    drinkNameDiv.classList.add('drink-name', 'container')
    var drinkNameText = document.createTextNode(drinks);

    drinkNameDiv.appendChild(drinkNameText);
    drinkNameEl.appendChild(drinkNameDiv);

    var item = document.getElementById("drink-title");
    item.replaceChild(drinkNameDiv, item.childNodes[0]);

}

// Creating drink ingredient call 
function ingredientName() {
    var drinkIngredientName = document.createElement('h3');
    var drinkIngredientTextName = document.createTextNode("Ingredients:");
    drinkIngredientName.appendChild(drinkIngredientTextName);
    ingredientListName.appendChild(drinkIngredientName);

    var item = document.getElementById("ingredient-name");
    item.replaceChild(drinkIngredientName, item.childNodes[0]);
}


function getIngredients(data) {
    const list = document.getElementById("ingredients-list");
    list.childNodes.forEach((n) => n.remove());
    const drink = data.drinks[0];

    for (let i = 1; i <= 15; i++) {
        if (drink[`strIngredient${i}`]) {
            const drinkIngredientDiv = document.createElement("li");
            drinkIngredientDiv.classList.add('drink-ingredients');
            const drinkIngredientText = document.createTextNode(drink[`strIngredient${i}`]);
            drinkIngredientDiv.appendChild(drinkIngredientText);
            ingredientListEl.appendChild(drinkIngredientDiv);
        }
    }
}

// Creating measurements call 
function MeasureName() {
    var drinkMeasureName = document.createElement('h3');
    var drinkMeasureTextName = document.createTextNode("Measurements:");
    drinkMeasureName.appendChild(drinkMeasureTextName);
    measureListName.appendChild(drinkMeasureName);

    var item = document.getElementById("measure-name");
    item.replaceChild(drinkMeasureName, item.childNodes[0]);
}

function getMeasure(data) {
    const list = document.getElementById("measure-list");
    list.childNodes.forEach((n) => n.remove());
    const drink = data.drinks[0];

    for (let i = 1; i <= 15; i++) {
        if (drink[`strMeasure${i}`]) {
            const drinkMeasureDiv = document.createElement("li");
            drinkMeasureDiv.classList.add("drink-measure");
            const drinkMeasureText = document.createTextNode(drink[`strMeasure${i}`]);
            drinkMeasureDiv.appendChild(drinkMeasureText);
            drinkMeasureEl.appendChild(drinkMeasureDiv)
        }
    }
}

// Creating drink instructions call 
function instructionsName() {
    var drinkInstructionName = document.createElement('h3');
    var drinkInstructionTextName = document.createTextNode("Instructions:");
    drinkInstructionName.appendChild(drinkInstructionTextName);
    instructionListName.appendChild(drinkInstructionName);

    var item = document.getElementById("instruction-name");
    item.replaceChild(drinkInstructionName, item.childNodes[0]);
}

function getInstructions(data) {
    var instructions = data.drinks[0].strInstructions;
    var drinkInstructions = document.createElement('div')
    drinkInstructions.classList.add('drink-instructions')
    var drinkInstructionsText = document.createTextNode(instructions)
    drinkInstructions.appendChild(drinkInstructionsText)
    drinkInstructionsEl.appendChild(drinkInstructions)

    var item = document.getElementById("instructions-list");
    item.replaceChild(drinkInstructions, item.childNodes[0]);
}
// ***** END - GET RANDOM DRINK *****

// ***** START - SEARCH FOR DRINK *****
function drinkSearch() {
    // When search is clicked
    var inputElement = document.getElementById('search-input')
    var searchTerm = inputElement.value;
    // Calling fetch 
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchTerm)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getDrinkName(data);
            getIngredients(data);
            getMeasure(data);
            getInstructions(data);
            getDrinkTitle()
            ingredientName();
            MeasureName();
            instructionsName();
        });

}
// ***** END - SEARCH FOR DRINK *****

// start random meme generator

var memeEl = document.querySelector("#meme-main");

function getMemes() {
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(function (response) {
        return response.json();
    })
        .then(function (data) {
            createMeme(data);
        })
};

function createMeme(data) {
    var meme = data.preview[2];
    var memeImg = document.createElement("img");
    memeImg.setAttribute("src", meme);
    memeEl.appendChild(memeImg);

    var item = document.getElementById("meme-random");
    item.replaceChild(memeImg, item.childNodes[0]);

}