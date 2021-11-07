let newArival = document.querySelector('.newarival')
let analog = document.querySelector('.analog')
let finalStock = document.querySelector('.finalstock')

let newsArrivalCards = document.querySelector('.onenewsarrival')
let analongCards = document.querySelector('.oneanalog')
let finalstockCards = document.querySelector('.onefinalstock')


newArival.addEventListener('click', ()=> {
    newArival.classList.add("active");
    analog.classList.remove("active")
    finalStock.classList.remove("active")
    newsArrivalCards.style.display = 'block'
    analongCards.style.display = 'none'
    finalstockCards.style.display = 'none'
})

analog.addEventListener('click', ()=> {
    analog.classList.add("active");
    newArival.classList.remove("active")
    finalStock.classList.remove("active")
    newsArrivalCards.style.display = 'none'
    finalstockCards.style.display = 'none'
    analongCards.style.display = 'block'
})

finalStock.addEventListener('click', ()=> {
    finalStock.classList.add("active");
    newArival.classList.remove("active")
    analog.classList.remove("active")
    newsArrivalCards.style.display = 'none'
    analongCards.style.display = 'none'
    finalstockCards.style.display = 'block'
})