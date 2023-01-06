const rabbits = document.querySelectorAll('.touch-rabbit')
const countRabbit = document.querySelector('.count')
const btnReset = document.querySelector('.btn-reset')

let count = 0;

const handleRabbit = (event) => {
    event.preventDefault()
    count++
    countRabbit.innerHTML = count
}

const handleReset = (event) => {
    event.preventDefault()
    count = 0
    countRabbit.innerHTML = count
}

const addRabbitEvents = () => {
    rabbits.forEach((rabbit) => {
        rabbit.addEventListener('click', handleRabbit)
    })
}

addRabbitEvents();
btnReset.addEventListener("click", handleReset);