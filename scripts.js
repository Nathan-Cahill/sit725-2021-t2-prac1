function ChangeText(){
    var textsArray = ["text 1","text 2","text 3","text 4","text 5",]
    var index = getrandomnumberbetween(0,textsArray.length - 1)
    console.log("index: ", index)
    document.getElementById("heading").innerHTML = textsArray[index];
}

function getrandomnumberbetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}