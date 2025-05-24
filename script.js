const diceBtn = document.querySelector('.dice-icon')
const advice = document.querySelector('.advice-text')
const adviceId = document.querySelector('.advice-id')

diceBtn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
        advice.textContent = `"${data.slip.advice}"`
        adviceId.textContent = `ADVICE #${data.slip.id}`
    }) .catch((err) => {
        console.log('Something went wrong', err);
    })
       
    
})