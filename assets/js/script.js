function getDrinkRecipe() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getDrinkName(data);
            getInstructions(data);
            getIngredients(data);
            getMeasure(data);
        })
}

function getDrinkName(data) {
    var drinks = data.drinks[0].strDrink;
    // console.log(drinks)
    
}

function getInstructions(data) {
    var instructions = data.drinks[0].strInstructions;
    // console.log(instructions)

}


function getIngredients(data) {
    for (i = 1; i <= 15; i++) {

        if (data.drinks[0][`strIngredient${i}`]) {
            // console.log(data.drinks[0][`strIngredient${i}`])

        }
    }
}

function getMeasure(data) {
    for (i = 1; i <= 15; i++) {

        if (data.drinks[0][`strMeasure${i}`]) {
            // console.log(data.drinks[0][`strMeasure${i}`])

        }
    }
}