let originalText = "I love my Pakistan <br> I love my city Faisalabad <br> I love my homeland"

// Lower Case
function convertToLowerCase() {
    let lowerText = originalText.toLowerCase()
    document.getElementById("output").innerHTML = lowerText
}


// Upper Case
function convertToUpperCase() {
    let upperText = originalText.toUpperCase()
    document.getElementById("output").innerHTML = upperText
}



// Capitalize Case
function convertToCapitalize() {
    document.getElementById("output").innerHTML = " "
    document.getElementById("output").style.textTransform = "capitalize"
    document.getElementById("output").innerHTML = originalText
}



// Better Formatting
function betterFormatting() {
    document.getElementById("output").innerHTML = " "
    let word = document.getElementById("inputText").value
    if (!word){
        alert("Please Enter Your Word: ")
        return
    }
    let format = word.toLowerCase()
    document.getElementById("output").style.textTransform = "capitalize"
    document.getElementById("output").innerHTML = format
}



//  Print All Cities

let cities = ["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Shekhupura","Kashmir"]
function printAllCities() {
    document.getElementById("output").innerHTML = " "
    for (let i = 0; i < cities.length; i++){
        document.getElementById("output").innerHTML += i + 1 + ")" + cities[i] + "<br>"
        
    }
}


//  Add Your City In List


function addYourCityInList() {
    let city = document.getElementById("inputText").value
    if (!city){
        alert("Enter Your City: ")
        return;
    }
    let firstLetter = city.slice(0,1).toUpperCase()
    let cityAllLetter = city.slice(1).toLowerCase()
    let cityWordCapitalize = firstLetter + cityAllLetter
    let isCityFound = false
    for (let i = 0; i < cities.length; i++){
        if (cities[i] == cityWordCapitalize){
            isCityFound = true
            let html = "<span style = 'color: red; font:size; 20px'>" + cityWordCapitalize + "</span> 'is already in list'"
            document.getElementById("output").innerHTML = html
        }
    }

    if (isCityFound === false){
        cities.push(cityWordCapitalize)
        let html = "<span style = 'color : green; font-size : 20px;'>" + cityWordCapitalize + "</span>has Successfully Added in List" 
        document.getElementById("output").innerHTML = html
    }
}




// Check Your City In List



function checkYourCityInList() {
    let city = document.getElementById("inputText").value
    if (!city){
        alert("Enter Your City: ")
        return;
    }
    let firstLetter = city.slice(0,1).toUpperCase()
    let cityAllLetter = city.slice(1).toLowerCase()
    let cityWordCapitalize = firstLetter + cityAllLetter
    let isCityFound = false
    for (let i = 0; i < cities.length; i++){
        if (cities[i] == cityWordCapitalize){
            isCityFound = true
            let html = "<span style = 'color: red; font:size; 20px'>" + cityWordCapitalize + "</span> 'is already in list'"
            document.getElementById("output").innerHTML = html
        }
    }

    if (isCityFound === false){
        let html = "<span style = 'color : green; font-size : 20px;'>" + cityWordCapitalize + "</span>has Successfully Added in List" 
        document.getElementById("output").innerHTML = html
    }
}


// Find The Word

function findTheWord() {
    document.getElementById("output").innerHTML = " "
    let newOriginalText = originalText.toLowerCase()
    let word = document.getElementById("inputText").value
    if (!word){
        alert("Please Enter Your Word: ")
        return
    }
    word = word.toLowerCase()
    let indexFind = newOriginalText.indexOf(word)
    if (indexFind !== -1){
        let html = "<span style = 'color : green; font-size : 20px;'>" + word + "</span> has found at index " + indexFind 
        document.getElementById("output").innerHTML = html
    }else {
        let html = "<span style = 'color : red; font-size : 20px;'>" + word + "</span> has not found at index " + indexFind 
        document.getElementById("output").innerHTML = html

        }

}


// Replace The Word

function replaceTheWord() {
    document.getElementById("output").innerHTML = " "
    let newOriginalText = originalText.toLowerCase()
    let word = document.getElementById("inputText").value
    if (!word){
        alert("Please Enter Your Word: ")
        return
    }
    word = word.toLowerCase()
    let replaceWith = prompt("Enter a Word that You Want to Replace With: ")
    if (!replaceTheWord){
        alert("Please Enter Your Word: ")
        return
    }
    replaceWith = replaceWith.toLowerCase()
    word = new RegExp(word,'g')
    let replaceWord = newOriginalText.replace(word,replaceWith)
    document.getElementById("output").innerHTML = replaceWord
}

// Clear Output

document.getElementById("clearOutput").onclick = function(){
    let output = document.getElementById("output").innerHTML;
    if (!output.length){
        toastifyError("It's already empty:");
    } else {
        document.getElementById("output").innerHTML = " ";
        toastifySuccess("Successfully Clear:");
    }
}

function toastifySuccess(msg) {
    new Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function toastifyError(msg) {
    new Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}






