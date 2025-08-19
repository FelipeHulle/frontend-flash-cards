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

qtd_questions = flashcards.length

function setFlashCards() {
    let progressbarElem = document.getElementById('myBar')
    let counterElem = document.getElementById('counter')
    let percentage = 100/qtd_questions
    progressbarElem.style.width = percentage + '%'
    progressbarElem.innerText = Math.trunc(percentage) + '%'
    counterElem.innerText = `1 de ${qtd_questions}`
}

setFlashCards()

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
            progressBar(idx+1)
        }
        cardtextElem.innerText = arr[idx].question
    })

    nextElem.addEventListener('click', () => {
        if (idx < (arrLen-1)) {
            idx++;
            progressBar(idx+1)
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

function progressBar(idx) { 
    let progressbarElem = document.getElementById('myBar')
    let counterElem = document.getElementById('counter')
    let percentage = 100/qtd_questions
    progressbarElem.style.width = idx*percentage + '%'
    progressbarElem.innerText = Math.trunc(idx*percentage) + '%'
    counterElem.innerText = `${idx} de ${qtd_questions}`
}

changeFlashCards(flashcards)

