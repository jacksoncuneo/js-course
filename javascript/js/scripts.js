var greeting = "Hello, ";
var name = "Jackson";
var doButton = document.querySelector("#do_button");

function sayHello(){
console.info(greeting+name)
alert(greeting+name)
}


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  console.info("Hello from wordBlanks");
  var result = "The "+myAdjective+" "+name+" "+myVerb+" "+myAdverb+". "+greeting+name+"!";
  alert(result);
  return result;
}

// Change the words here to test your function
doButton.onclick = function() {
  console.info("HELLLOOOO");
  //sayHello();
wordBlanks("dog", "big", "ran", "quickly");
}
