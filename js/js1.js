alert ('Hello World!')
console.log('Secret Message')

function PercentageCalculator(number, percentage) {
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
      break:
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
  var message = ("The answer is ${value}"!);
  
  switch (operator) {
    case "add":
      operator = number1 + number2;
      break;

    case "sub":
      operator = number1 - number2;
      break;

    case "mul":
      operator = number1 * number2;
      break:

    case "div":
      operator = number1 / number2;

    return message;

  }
    console.log(message);

}

function fizzbuzz () {
    // FOR function to add 1 between 1 and 100
  for (let i = 1; i <= 100; i++) {
    // IF number is divisible by 3 AND 5
    if (((i % 3) === 0) $$ ((i % 5) === 0))); {
      // Print FizzBuzz
      console.log('FizzBuzz');
    }
    // ELSE IF number is divisible by 3
    else if ((i % 3) === 0); {
      // Print Fizz
      conesole.log('Fizz');
    }
    // ELSE IF number is divisible by 5
    else if ((i % 5) === 0); {
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