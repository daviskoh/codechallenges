function fizzBuzz(n) {
  // print 0 - n 
  for (var i = 1; i <= n; i++) {
    if (i / 15 === 1) { // if n divisble evenly by 15, output fizzbuzz
      console.log('fizzbuzz');
    } else if (i / 5 === 1) { // if n divisble evenly by 5, output buzz
      console.log('buzz');
    } else if (i / 3 === 1) { // if n divisible evenly by 3, output fizz
      console.log('fizz')
    } else {
      console.log(i);
    }
  }

  // account for fact that n can be divisible by 15 & 3 || 5
}

fizzBuzz(15);