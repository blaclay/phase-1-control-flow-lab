function scuberGreetingForFeet(distanceFeet){
  // Write your code here!
  let greeting;

  if(distanceFeet <= 400) {
    greeting = 'This one is on me!';
  } else if(distanceFeet <= 2000) {
    greeting = 'That will be twenty bucks.';
  } else if(distanceFeet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else {
    greeting = 'No can do.';
  }

  return greeting
}

function ternaryCheckCity(city){
  // Write your code here!
  const cityMessage = city == 'NYC' ? 'Ok, sounds good.' : 'No go.';

  return cityMessage
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipResponse;

  switch (tip) {
    case "generous":
      tipResponse = "Thank you so much.";
      break;
    case "not as generous":
      tipResponse = "Thank you.";
      break;
    default:
      tipResponse = "Bye.";
      break;
  }

  return tipResponse;

}