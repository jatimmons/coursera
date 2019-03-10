(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(var name in names)  {
    var thisName = names[name];
    var firstLetter = thisName.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(thisName);
      } else {
      helloSpeaker.speak(thisName);
    }

  }
})();
