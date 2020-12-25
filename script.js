const cracker = document.getElementById("crackerWrapper");
const leftCracker = document.getElementById("leftCracker");
const rightCracker = document.getElementById("rightCracker");
const message = document.getElementById("message");
const jokeWrap = document.getElementById("jokeWrap");
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");

let counter = 0
let jokes =[{Q: "Wishing You and Your family a Merry Christmas!!!" ,A: ""}]
let num = Math.floor(Math.random() * jokes.length)

cracker.addEventListener('click', () => {
  if(counter < 13){
    counter++
  } else{
    joke.textContent = jokes[num].Q
    punchline.textContent = jokes[num].A
    leftCracker.style.animation = "left 1s forwards"
    rightCracker.style.animation = "right 1s forwards"
    message.style.animation = "title 1s forwards"
    jokeWrap.style.animation = "joke 2s forwards"
    cracker.style.transform = "scaleX(1)"
  }
})

function Loop(){      
  window.requestAnimationFrame(Loop);
  if(counter > 0 && counter < 13){
    cracker.style.transform = `scaleX(${1 + (counter / 100)})`
    counter -= 0.05
  }
}
Loop()