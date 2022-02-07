let first = document.getElementById('1');
let second = document.getElementById('2');
let third = document.getElementById('3');
let fourth = document.getElementById('4');
let fifth = document.getElementById('5');
let nextBtn = document.getElementById('nextBtn');
let playBtn = document.getElementById('playBtn');
let resetBtn = document.getElementById('resetBtn');
let step = document.getElementById('step');
let count = 1;
let burgerMenu = document.getElementById('burger-menu');
let sideBar = document.getElementById('sideBar');
let counter = 1;
let selector = document.getElementById('selector');
let selectValue;
let submitBtn = document.getElementById('submitBtn');


nextBtn.addEventListener('click', () => {
  count++;
  step.innerText = 'Step : ' + count;


  if(count===2){
    second.style.left = 40 + "vw";
    first.style.left = 30 + "vw";
    second.style.transitionDuration = 1 + "s";
    first.style.transitionDuration = 1 + "s";
  }

  if(count===3){
    fifth.style.left = 60 + "vw";
    third.style.left = 50 + "vw";
    fifth.style.transitionDuration = 1 + "s";
    third.style.transitionDuration = 1 + "s";
  }

  if(count===4){
    fifth.style.left = 70 + "vw";
    fourth.style.left = 60 + "vw";
    fifth.style.transitionDuration = 1 + "s";
    fourth.style.transitionDuration = 1 + "s";
  }
})

playBtn.addEventListener('click', () => {
    second.style.left = 40 + "vw";
    first.style.left = 30 + "vw";
    second.style.transitionDuration = 1 + "s";
    first.style.transitionDuration = 1 + "s";

    setTimeout(()=>{
      fifth.style.left = 60 + "vw";
      third.style.left = 50 + "vw";
      fifth.style.transitionDuration = 1 + "s";
      third.style.transitionDuration = 1 + "s";
    },1000)


    setTimeout(()=>{
      fifth.style.left = 70 + "vw";
      fourth.style.left = 60 + "vw";
      fifth.style.transitionDuration = 1 + "s";
      fourth.style.transitionDuration = 1 + "s";
    },2000)


})

resetBtn.addEventListener('click', () => {

  fifth.style.left = 60 + "vw";
  fourth.style.left = 70 + "vw";
  fifth.style.transitionDuration = 1 + "s";
  fourth.style.transitionDuration = 1 + "s";

  setTimeout(()=>{
    fifth.style.left = 50 + "vw";
    third.style.left = 60 + "vw";
    fifth.style.transitionDuration = 1 + "s";
    third.style.transitionDuration = 1 + "s";
  },1000)


  setTimeout(()=>{
    second.style.left = 30 + "vw";
    first.style.left = 40 + "vw";
    second.style.transitionDuration = 1 + "s";
    first.style.transitionDuration = 1 + "s";
  },2000)


})

burgerMenu.addEventListener('click', () => {
  counter++;
  if(counter%2===0){
    sideBar.style.transitionDuration = 500 + "ms";
    sideBar.style.left = 0 + "vw";
  } else{
    sideBar.style.transitionDuration = 1 + "s";
    sideBar.style.left = -20 + "vw";
  }
})

submitBtn.addEventListener('click', (e)=>{

  e.preventDefault();

  if(selector.value === "Temps réel"){
    playBtn.style.display = "block";
    nextBtn.style.display = "none";
  }else{
    playBtn.style.display = "none";
    nextBtn.style.display = "block";
  }
})


