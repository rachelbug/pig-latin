var vowels = ["a","e","i","o","u"];
var firstLetter;
var pigLatin;




$(document).ready(function() {
  $("form#translate").submit(function(event){
    event.preventDefault();

    pigLatin = $("input#pig-latin").val();
    firstLetter = pigLatin.charAt(0)
    pigLatin = pigLatin.slice(1).concat(firstLetter);

    var conSonant = function(pigLatin) {
      for (i=0; i <= pigLatin.length; i++){
        if (firstLetter !== vowels) {
          pigLatin += "ay";
        }
      };
    };
    console.log(pigLatin)

    alert(pigLatin);
});
});
//
// vowels.forEach(function(vowel) {
//   if (pigLatin.charAt(0) === vowel) {
//   pigLatin += "ay";
// }
// } else if (pigLatin.charAt(0) !== vowel) {
//   pigLatin += "ay";
// } else {
// alert("ur dumb!");
// }

// });
// vowels.forEach(function(vowel) {
//   if (pigLatin.charAt(0) !== vowel) {
//   pigLatin += "ay";
// }
