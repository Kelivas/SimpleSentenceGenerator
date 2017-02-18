// Function to generate a sentence
function sentenceGenerator() {
  // Verb Array
  var verbs = [
    'bitten',
    'bumped',
    'grumbled',
    'insisted',
    'wobbled',
    'bamboozled'
  ];
  // Noun Array
  var nouns = [
    'bird',
    'lake',
    'oatmeal',
    'governer',
    'pocket'
  ];
  // Adjective Array
  var adjectives = [
    'forceful',
    'flamboyant',
    'muttering',
    'knobby',
    'sizzling'
  ];

  // Grabbing the html input element used for displaying the sentence
  var display = document.getElementById('display');
  // Sentence structure!
  var structure = structurer(getRandomArbitrary(1, 5));
  // Make the sentence!
  for(var n = 0; n < structure.length; n++){
    switch (structure[n]) {
    	case 'noun':
      	structure[n] = nouns[getRandomArbitrary(1,nouns.length-1)];
        break;
      case 'verb':
      	structure[n] = verbs[getRandomArbitrary(1,verbs.length-1)];
        break;
      case 'adjective':
      	structure[n] = adjectives[getRandomArbitrary(1,adjectives.length-1)];
        break;
      default:
      	break;
    }
  }
  //Calls structurer and then returns the value to the input element
  display.value = structure.join(' ').concat('.');

  // Generates a random numbe
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Generates sentence itself
  function structurer(number) {
    switch (number) {
      case 1:
        return ['The','noun','verb','over','the','adjective','noun'];
      case 2:
        return ['A','adjective','verb','noun','verb','noun'];
      case 3:
        return ['Mr','noun',',','the','noun','is','adjective'];
      case 4:
        return ['noun','the','noun','is','adjective'];
      case 5:
        return ['Excuse','me','Mr. President','your','noun','is','verb'];
    }
  }
}
