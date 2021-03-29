function AlertName(name3){
  var name3 = prompt('What is your name?');
  alert("Hello " + name3);

}

function PercentageCalculator(number, percentage, total) {
  var total = ( ( percentage / 100 ) * number);
  return (total);
}

    console.log(total);

function rollif(){
  var number = rollDie(6);
  if (number === 6 ) {
    message = 'Wow, Lucky!';
  }
  else if ( number === 1 ) {
    message = 'Oof, unlucky!';
  }
  else {
    message = ' ';
  }
  console.log(message);

}

function rollswitch(){
  var number = rollDie(6);
  var message = ' You rolled a ${number}.';

    switch (number) {
        case "6":
        message = message + ' Wow! Lucky!';
        break;

    case 1:
        message = message + ' Oof! Unlucky....';
        break;

    default:
        message = message + ' Nothing special here.';
    }

  console.log(message);

}

function drinkOrder(){
  var size = (small, medium, large);
  var drink = (cola, orange, lemon);
  var message = ' You ordered a ${size} ${drink},';
  
  switch (size) {
    case "small":
      messagesize = message + ' you sure you dont want a bigger one? ';
      break;

    case "medium":
      messagesize = message + ' Medium coming right up! ';
      break;

    case "large":
      messagesize = message + ' Careful not to spill, mate. ';
      break;
  }

  switch (drink) {
    case "cola":
      messageorder = messagesize + ' cola, classic :) ';
      break;

    case "orange":
      messageorder = messagesize + 'You want a trump card with that?';
      break;

    case "lemon":
      messageorder = messagesize + 'Sour today are we?';
      break;

    return messageorder;

  }
    console.log(messageorder);

}

function Calculator(){
  var number1 = (x);
  var number2 = (y);
  var operator = ("add", "sub", "mul", "div");
  var value = (number1 + operator + number2);
  var message = ("The answer is ${value}!");
  
  switch (operator) {
    case "add":
      operator = number1 + number2;
      break;

    case "sub":
      operator = number1 - number2;
      break;

    case "mul":
      operator = number1 * number2;
      break;

    case "div":
      operator = number1 / number2;

    return message;

  }
    console.log(message);

}

function fizzbuzz() {
      // FOR function to add 1 between 1 and 100    
  for (var i = 1; i <= 60; i++)  {
      // IF number is divisible by 3 AND 5
    if (i % 3 === 0 && i % 5 === 0)  {
      // Print FizzBuzz
      console.log('FizzBuzz');
    }
      // ELSE IF number is divisible by 3
    else if (i % 3 === 0)  {
      // Print Fizz
      console.log('Fizz');
    }
      // ELSE IF number is divisible by 5
    else if (i % 5 === 0)  {
      // Print Buzz
      conesole.log('Buzz');
    }
      // Otherwise ELSE
    else {
      // Print number
      console.log(i);
    }
  }
}
function myArray() {
  var myThings = [Food, Games, Devices];
    var Food = ['Pasta', 'Meat', 'Pizza'];
    var Games = ['Terraria', 'World of Kings', 'Tree of Savior'];
    var Devices = ['PC', 'Phone', 'Hybrid'];
    for (var i = 0; i <= Food.length; i++)  {
      console.log("Want to eat " + i);
      console.log(Food[i]);
    }
}

/*

var myThings = [Food, Games, Devices];
    var Food = ['Pasta', 'Meat', 'Pizza'];
    var Games = ['Terraria', 'World of Kings', 'Tree of Savior'];
    var Devices = ['PC', 'Phone', 'Hybrid'];
    for (var Food of Food)  {
      console.log("Want to eat " + Food + " today.");
    }

*/

/* 

var shoppingCart = [
  {
      name:"loaf of bread",
      type:"food",
      quantity:1,
      price:.85
  },
  {
      name:"multipack beans",
      type:"food",
      quantity:2,
      price:1
  },
  {
      name:"mushrooms",
      type:"food",
      quantity:10,
      price:.1
  },
  {
      name:"can of beer",
      type:"alcohol",
      quantity:4,
      price:1.1
  },
  {
      name:"prosecco",
      type:"alcohol",
      quantity:1,
      price:8.99
  },
  {
      name:"steak",
      type:"food",
      quantity:2,
      price:3.99
  },
  {
      name:"blue cheese",
      type:"food",
      quantity:1,
      price:2.99
  },
  {
      name:"candles",
      type:"home",
      quantity:3,
      price:1.99
  },
  {
      name:"cheesecake",
      type:"food",
      quantity:1,
      price:4.99
  },
  {
      name:"onions",
      type:"food",
      quantity:3,
      price:.4
  },
];

*/

// Task 1 Start

/*

function shoppingTotal (cart) {
  let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
    let itemPrice = cart[i].price;
    let itemQuantity = cart[i].quantity;
    let itemTotalPrice = itemPrice * itemQuantity;
    totalPrice = totalPrice + itemTotalPrice;
}
return totalPrice.toFixed(2);
}

console.log(shoppingTotal(shoppingCart));

*/

// Task 1 Ends

// Task 2 Start

/*

function shoppingTotal (cart) {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    let itemPrice = cart[i].price;
    let itemQuantity = cart[i].quantity;
    let itemTotalPrice = itemPrice * itemQuantity;
    if (cart(i).type === 'food') {
      itemTotalPrice = 0.8 * itemTotalPrice;
    }
    if (cart(i).type === 'alcohol') {
      itemTotalPrice = 0.1 * itemTotalPrice;
    }
    totalPrice = totalPrice + itemTotalPrice;
  }
  return totalPrice.toFixed(2);
}
  
console.log(shoppingTotal(shoppingCart));

*/

// Task 2 Ends

// Task 3 Start

/*

function shoppingTotalBetter (cart, discountAmount,type) {
  let totalPrice = 0;
   for (let i = 0; i < cart.length; i++) {
    let itemPrice = cart[i].price;
    let itemQuantity = cart[i].quantity;
    let itemTotalPrice = itemPrice * itemQuantity;
    if (type === 'any') {
      itemTotalPrice = (100 - discountAmount) / 100 * itemTotalPrice;
    }
    else {
     if (cart[i].tyoe === type) {
      itemTotalPrice = (100 - discountAmount) / 100 * itemTotalPrice;
        }

      }
    totalPrice = totalPrice + itemTotalPrice;
    }
    return totalPrice.toFixed(2);
  }
    
console.log(shoppingTotalBetter(shoppingCart, 0, 'home'));
console.log(shoppingTotalBetter(shoppingCart, 30, 'home'));
console.log(shoppingTotalBetter(shoppingCart, 50, 'food'));
console.log(shoppingTotalBetter(shoppingCart, 15, 'alcohol'));
console.log(shoppingTotalBetter(shoppingCart, 50, 'any'));

*/

/*

// <>

function priceRangeItems(cart, lowPrice, highPrice) {
  let arrItems = [];
  for (let i = 0; i < cart.length; i++) {
    if (quantity === true) {
      if (cart[i].price * cart[i].quantity >= lowPrice && cart[i].price * cart[i].quantity <= highPrice) {

      }
    }

      if (cart[i].price >= lowPrice && cart[i].price <= highPrice) {
        arrItems.push(cart[i]);
      }
  }
  return arrItems:
}

console.log(priceRangeItems(shoppingCart, 0.1, 2));
console.log(priceRangeItems(shoppingCart, 0.1, 2, true));

*/

// Task 3 Ends

// Task 4 Starts

/*

// <>

var myNumbers = [3, 5, 4, 4, 1, 1, 2, 3];

function mean(numbers) {
  let total = 0;
  for (let i = < numbers.length; i++) {
    total = total + numbers[i];
    console.log(total);
  }
  return total / numbers.length;
}  

console.log(mean(myNumbers));

*/

// Task 4 Ends


// Task 5 Starts

/*

var myNumbers = [10, 3, 90, 35, 24, 1];
var myNumbers2 = [78, 21, 999, 1, 90];

function median(numbers) {
  let numbersLength = numbers.length;
  let median = 0;
  // [10, 3, 90, 35, 24, 1] becomes [1, 3, 10, 24, 35, 90]
  // [78, 21, 999, 1, 90] becomes [1, 21, 78, 90, 999]
  numbers.sort(compare);
  // Even number of items.
  if (numbersLength % 2 === 0) {
    median = (numbers[numbersLength / 2 - 1] + numbers[numbersLength / 2]) / 2;
  }
  //Odd number of items.
  else {
    median = numbers[numbersLength - 1 / 2];
  }

  return median;

}

function compare(a, b) {
  return a - b;

}

console.log(median(myNumbers));
console.log(median(myNumbers2));

*/

// Task 5 Ends

// Task 6 Starts

// <> ||

var myModeNumbers = [1, 1, 2, 3, 3, 4, 4, 5];

function mode(numbers) {
  let modes = [];
  let count = [];
  let number = 0;
  for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];
    count[number] = (count[number] || 0) + 1;
    // Possibly increase the max number of occurencies
    // (applies to all numbers in the array).
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }
  for (let i in count) {
    if (count[i] === maxIndex) {
      modes.push(Number(i));
    }
  }
  return modes;
}
console.log(mode(myModeNumbers));