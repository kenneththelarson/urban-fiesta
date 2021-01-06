// ***** START - GET RANDOM DRINK *****
var ingredientListEl = document.querySelector("#ingredients");
var drinkNameEl = document.querySelector("#drink-title");
var drinkMeasureEl = document.querySelector("#measure");
var drinkInstructionsEl = document.querySelector("#instructions")

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
        })
}

function getDrinkName(data) {
    var drinks = data.drinks[0].strDrink;
    // console.log(drinks)
    var drinkNameDiv = document.createElement('div');
    drinkNameDiv.classList.add('drink-name', 'container')
    var drinkNameText = document.createTextNode(drinks);
    drinkNameDiv.appendChild(drinkNameText);
    drinkNameEl.appendChild(drinkNameDiv);
}

function getIngredients(data) {
    for (i = 1; i <= 15; i++) {

        if (data.drinks[0][`strIngredient${i}`]) {
            // console.log(data.drinks[0][`strIngredient${i}`])
            var drinkIngredientDiv = document.createElement('li');
            drinkIngredientDiv.classList.add('drink-ingredients')
            var drinkIngredientText = document.createTextNode(data.drinks[0][`strIngredient${i}`]);
            drinkIngredientDiv.appendChild(drinkIngredientText);
            ingredientListEl.appendChild(drinkIngredientDiv);
        }
    }
}

function getMeasure(data) {
    for (i = 1; i <= 15; i++) {

        if (data.drinks[0][`strMeasure${i}`]) {
            // console.log(data.drinks[0][`strMeasure${i}`])
            var drinkMeasureDiv = document.createElement('li');
            drinkMeasureDiv.classList.add('drink-measure')
            var drinkMeasureText = document.createTextNode(data.drinks[0][`strMeasure${i}`]);
            drinkMeasureDiv.appendChild(drinkMeasureText);
            drinkMeasureEl.appendChild(drinkMeasureDiv);
        }
    }
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
    drinkNameEl.removeChild()
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
    var meme = data.preview[2.5];
    var memeImg = document.createElement("img");
    memeImg.setAttribute("src", meme);
    memeEl.appendChild(memeImg);

}

function clearSearch() {
    drinkNameEl.removeChild()
}

