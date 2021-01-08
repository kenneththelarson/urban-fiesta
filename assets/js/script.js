// ***** START - GET RANDOM DRINK *****
var ingredientListEl = document.querySelector("#ingredients");
var ingredientListName = document.querySelector("#ingredient-name")
var drinkNameEl = document.querySelector("#drink-title");
var drinkMeasureEl = document.querySelector("#measure");
var drinkInstructionsEl = document.querySelector("#instructions")
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
            getDrinkName(data);
            getIngredients(data);
            getMeasure(data);
            getInstructions(data);
            ingredientName();
            MeasureName();
            instructionsName();
        })
}

function getDrinkName(data) {
    var drinks = data.drinks[0].strDrink;
    // console.log(drinks)
    var drinkNameH2 = document.createElement('h3');
    var drinkNameH2Text = document.createTextNode("Drink Name:")
    var drinkNameDiv = document.createElement('div');
    drinkNameDiv.classList.add('drink-name', 'container')
    var drinkNameText = document.createTextNode(drinks);
    drinkNameH2.appendChild(drinkNameH2Text);
    drinkNameH2El.appendChild(drinkNameH2)
    drinkNameDiv.appendChild(drinkNameText);
    drinkNameEl.appendChild(drinkNameDiv);
}

function ingredientName() {
    var drinkIngredientName = document.createElement('h3');
    var drinkIngredientTextName = document.createTextNode("Ingredients:");
    drinkIngredientName.appendChild(drinkIngredientTextName);
    ingredientListName.appendChild(drinkIngredientName);
}

function getIngredients(data) {
    for (i = 1; i <= 15; i++) {

        if (data.drinks[0][`strIngredient${i}`]) {
            // console.log(data.drinks[0][`strIngredient${i}`])

            var drinkIngredientDiv = document.createElement('li');
            drinkIngredientDiv.classList.add('drink-ingredients');
            var drinkIngredientText = document.createTextNode(data.drinks[0][`strIngredient${i}`]);

            drinkIngredientDiv.appendChild(drinkIngredientText);
            ingredientListEl.appendChild(drinkIngredientDiv);
        }
    }
}

function MeasureName() {
    var drinkMeasureName = document.createElement('h3');
    var drinkMeasureTextName = document.createTextNode("Measurements:");
    drinkMeasureName.appendChild(drinkMeasureTextName);
    measureListName.appendChild(drinkMeasureName);
}

function getMeasure(data) {
    for (i = 1; i <= 15; i++) {

        if (data.drinks[0][`strMeasure${i}`]) {
            // console.log(data.drinks[0][`strMeasure${i}`])
            var drinkMeasureDiv = document.createElement('li');
            drinkMeasureDiv.classList.add('drink-measure')
            var drinkMeasureText = document.createTextNode(data.drinks[0][`strMeasure${i}`] );
            drinkMeasureDiv.appendChild(drinkMeasureText);
            drinkMeasureEl.appendChild(drinkMeasureDiv);
        }
    }
}

function instructionsName() {
    var drinkInstructionName = document.createElement('h3');
    var drinkInstructionTextName = document.createTextNode("Instructions:");
    drinkInstructionName.appendChild(drinkInstructionTextName);
    instructionListName.appendChild(drinkInstructionName);
}

function getInstructions(data) {
    var instructions = data.drinks[0].strInstructions;
    // console.log(instructions)
    var drinkInstructions = document.createElement('div')
    drinkInstructions.classList.add('drink-instructions')
    var drinkInstructionsText = document.createTextNode(instructions)
    drinkInstructions.appendChild(drinkInstructionsText)
    drinkInstructionsEl.appendChild(drinkInstructions)
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
        });

}
// ***** END - SEARCH FOR DRINK *****


function clearSearch() {
    clearSearchEl.removeChild(data)
}

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

}

function clearSearch() {
    drinkNameEl.removeChild()
}