var sentence = prompt("What do you have to say?") 
  console.log(sentence)

  var firstLast = function() {
    
  var lastLetter = sentence.charAt(sentence.length-1);
  var firstLetter = sentence.charAt(0);
  return lastLetter
}
  // console.log(firstLetter);
  // console.log(lastLetter);
    
  var upperFist = firstLetter.toUpperCase();
  var upperLast = lastLetter.toUpperCase();
  // console.log(upperFist);
  // console.log(upperLast);
firstLast()
  // console.log(firstLetter);
  console.log(lastLetter);