function oneThroughTwenty() {

  let retorno = [];

  for (let counter = 1; counter <= 20; counter++) {
    retorno.push(counter)
  }

  return retorno;



}
console.log(oneThroughTwenty());



function evensToTwenty() {

  let retorno = [];


  for (let contador = 1; contador <= 20; contador++) {

    if (contador % 2 == 0) {

      retorno.push(contador)

    } else { }


  }

  return retorno;

}

console.log(evensToTwenty());


function oddsToTwenty() {

  let retorno = [];


  for (let contador = 1; contador <= 20; contador++) {

    if (contador % 2 != 0) {

      retorno.push(contador)

    } else { }


  }

  return retorno;

}
console.log(oddsToTwenty())


function multiplesOfFive() {

  let retorno = []

  for (let contador = 5; contador <= 100; contador = contador + 5) {

    retorno.push(contador)

  }
  return retorno

}

console.log(multiplesOfFive())

function squareNumbers() {

  let retorno = []

  for (let contador = 1; contador <= 10; contador++) {

    let num = (contador * contador)

    retorno.push(num)

  }

  return retorno
}

console.log(squareNumbers())

function countingBackwards() {

  let retorno = [];

  for (let counter = 20; counter >= 1; counter--) {
    retorno.push(counter)
  }

  return retorno;


}

console.log(countingBackwards())

function evenNumbersBackwards() {

  let retorno = [];


  for (let contador = 20; contador >= 1; contador--) {

    if (contador % 2 == 0) {

      retorno.push(contador)

    } else { }


  }

  return retorno;


}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {

  let retorno = [];


  for (let contador = 20; contador >= 1; contador--) {

    if (contador % 2 != 0) {

      retorno.push(contador)

    } else { }


  }

  return retorno;
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {

  let retorno = []

  for (let contador = 100; contador >= 5; contador = contador - 5) {

    retorno.push(contador)

  }
  return retorno


}

console.log(multiplesOfFiveBackwards())


function squareNumbersBackwards() {
  let retorno = []

  for (let contador = 10; contador >= 1; contador--) {

    let num = (contador * contador)

    retorno.push(num)

  }

  return retorno
}

console.log(squareNumbersBackwards())
