const gameBotFunction = function () {

    function randomGenerate(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
            
      }

      let mysteryNumber = randomGenerate (0, 100)
      let answerNumber = ''
      let numberAttempts = 3

      const checkIsNumber = function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
      }

      return function result () {

        answerNumber = prompt('Угадайте число от 0 до 100')
        
        if (answerNumber === null) {
            alert ('Игра завершена')
            return
      }

      while (!checkIsNumber (answerNumber) || answerNumber.trim() === '' ) {
            alert ('Вы ввели строку:')
            answerNumber = prompt('Угадайте число от 0 до 100')
      }

      answerNumber = Number(answerNumber)

      if (mysteryNumber > answerNumber) {
        alert ('Загаданное число больше: ' + 'Еще попыток: ' + numberAttempts)
      } else if (mysteryNumber < answerNumber) {
        alert ('Загаданное число меньше: ' + 'Еще попыток: ' + numberAttempts)
      } else if (mysteryNumber === answerNumber) {
        const isUserWantNewGame = confirm ('Ура! Угадали! Еще разок?')
        if (isUserWantNewGame) {
            numberAttempts = 3
            mysteryNumber = randomGenerate (0, 100)

        } else {
            numberAttempts = 0
        }
      } 

      if (numberAttempts > 0) {
        numberAttempts --
        result();
      } else {
        const again = confirm ('Попытки кончились, гейм овер) Еще разок?')
        if (again) {
            numberAttempts = 3
            result();
        } else {
            alert('GAME OVER')
            return
        }
      }


      }

}

let startBot = gameBotFunction();
startBot ();

   