const flashcards = [

    {
        question: 'Qual primeiro nome do presidente',
        answer: 'Lula'
    },
    {
        question: 'Qual presidente esta preso',
        answer: 'Bozo'
    },
    {
        question: 'Qual a cor do céu',
        answer: 'Azul'
    },
    {
        question: 'Quem é o maior do rio',
        answer: 'Botafofo'
    },
    {
        question: 'Qual meu nome',
        answer: 'Felipe'
    },
    {
        question: 'Qual Qual meu nQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomeQual meu nomemeu nome',
        answer: 'Felipe'
    }

]

function changeFlashCards (arr) {

    const cardtextElem = document.getElementById('text')
    const nextElem = document.getElementById('next')
    const showElem = document.getElementById('show')
    const previousElem = document.getElementById('previous')
    const arrLen = arr.length
    let isClicked = false

    let idx = 0
    cardtextElem.innerText = arr[idx].question

    previousElem.addEventListener('click', () => {
        if (idx > 0) {
            idx--;
        }
        cardtextElem.innerText = arr[idx].question
    })

    nextElem.addEventListener('click', () => {
        if (idx < (arrLen-1)) {
            idx++;
        }
        cardtextElem.innerText = arr[idx].question
    })

    showElem.addEventListener('click', () => {
        if (isClicked === false){
            cardtextElem.innerText = arr[idx].answer
            showElem.innerText = 'Hide Answer'
            isClicked = true
        }
        else {
            cardtextElem.innerText = arr[idx].question
            showElem.innerText = 'Show Answer'
            isClicked = false
        }
        
    })

}

changeFlashCards(flashcards)