function myFunction() {
    fetch('https://cors-anywhere.herokuapp.com/')

    .then(function(randomeName) {
        return randomeName;
    })
    .then(function(randomeName) {
        console.log(randomeName)
    })
}

