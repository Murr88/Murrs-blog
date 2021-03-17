---
layout: layouts/home.njk
title: Fizz Buzz
templateClass: tmpl-post
eleventyNavigation:
  key: Fizz Buzz
  order: 11
---

<script>

function fizzbuzz () {
    // FOR function to add 1 between 1 and 100
  for (let i = 1; i <= 100; i++) {
    // IF number is divisible by 3 AND 5
    if (((i % 3) === 0) $$ ((i % 5) === 0)) {
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

</script>