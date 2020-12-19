var ingredientListEl = document.querySelector("#ingredients");
var drinkNameEl = document.querySelector("#drink-title");

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
    drinkNameDiv.classList.add('drink-name')
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
            document.body.appendChild(drinkMeasureDiv);
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
    document.body.appendChild(drinkInstructions)
}