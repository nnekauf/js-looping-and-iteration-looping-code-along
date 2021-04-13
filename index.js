// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);




function writeCards(nameArray, holiday) {
    let thankYouCards = []
  for (let i = 0; i < nameArray.length; i++) {
    thankYouCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${holiday} gift!`);
  }

  return thankYouCards
}


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moved OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);



function countDown(number) {
   // the initialization moved OUTSIDE the body of the loop!
  while (0 < number) {
    console.log(number );
    number -= 1; // the iteration moves INSIDE the body of the loop!
  }

  console.log( number );
}

