function scuberGreetingForFeet(rideDistance) {
  // Write your code here!
  let greeting;
  if (rideDistance <= 400) {
    greeting = 'This one is on me!';
  } else if (rideDistance > 2000 && rideDistance <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (rideDistance > 400 && rideDistance <= 2000) {
    greeting = 'That will be twenty bucks.';
  } else {
    greeting = 'No can do.';
  }
  return greeting;
}

function ternaryCheckCity(destinationCity) {
  // Write your code here!
  return destinationCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipAmount) {
  // Write your code here!
  let response;
  switch (tipAmount) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }
  return response;
}