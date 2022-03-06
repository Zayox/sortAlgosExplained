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
let selector2 = document.getElementById('selector2');
let selector3 = document.getElementById('selector3');
let selectValue;
let selectValue2;
let selectValue3;
let submitBtn = document.getElementById('submitBtn');
let submitBtn2 = document.getElementById('submitBtn2');
let submitBtn3 = document.getElementById('submitBtn3');
let firstFor = document.getElementById('firstFor');
let secondFor = document.getElementById('secondFor');
let ifCondition = document.getElementById("ifCondition");
let firstFor2 = document.getElementById('firstFor2');
let secondFor2 = document.getElementById('secondFor2');
let ifCondition2 = document.getElementById("ifCondition2");
let javaC = document.getElementById("javaCode");
let cCode = document.getElementById("c#Code");
let speed1 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
let speed2 = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500];



nextBtn.addEventListener('click', () => {
    count++;
    step.innerText = 'Etape : ' + count;
    ifCondition.style.backgroundColor = "";
    ifCondition2.style.backgroundColor = "";

    if(count===2){
        firstFor.style.backgroundColor = "yellow";
        firstFor2.style.backgroundColor = "yellow";

        setTimeout(()=>{
            firstFor.style.backgroundColor = "";
            firstFor2.style.backgroundColor = "";
            secondFor.style.backgroundColor = "yellow";
            secondFor2.style.backgroundColor = "yellow";
        },selector3.value === "x1" ? speed1[0] : speed2[0])

        setTimeout(()=>{
            secondFor.style.backgroundColor = "";
            secondFor2.style.backgroundColor = "";
            ifCondition.style.backgroundColor = "yellow";
            ifCondition2.style.backgroundColor = "yellow";
        },selector3.value === "x1" ? speed1[1] : speed2[1])

        setTimeout(()=>{
            second.style.left = 70 + "vw";
            first.style.left = 30 + "vw";
            second.style.transitionDuration = 1 + "s";
            first.style.transitionDuration = 1 + "s";
        },selector3.value === "x1" ? speed1[1] : speed2[1])

    }

    if(count===3){

        ifCondition.style.backgroundColor = "";
        ifCondition2.style.backgroundColor = "";
        firstFor.style.backgroundColor = "yellow";
        firstFor2.style.backgroundColor = "yellow";

        setTimeout(()=>{
            firstFor.style.backgroundColor = "";
            firstFor2.style.backgroundColor = "";
            secondFor.style.backgroundColor = "yellow";
            secondFor2.style.backgroundColor = "yellow";
        },selector3.value === "x1" ? speed1[0] : speed2[0])

        setTimeout(()=>{
            secondFor.style.backgroundColor = "";
            secondFor2.style.backgroundColor = "";
            ifCondition.style.backgroundColor = "yellow";
            ifCondition2.style.backgroundColor = "yellow";
        },selector3.value === "x1" ? speed1[1] : speed2[1])

        setTimeout(()=>{
            fourth.style.left = 70 + "vw";
            second.style.left = 40 + "vw";
            fourth.style.transitionDuration = 1 + "s";
            second.style.transitionDuration = 1 + "s";
        },selector3.value === "x1" ? speed1[1] : speed2[1])

    }

    if(count===4){

        ifCondition.style.backgroundColor = "";
        ifCondition2.style.backgroundColor = "";
        firstFor.style.backgroundColor = "yellow";
        firstFor2.style.backgroundColor = "yellow";

        setTimeout(()=>{
            firstFor.style.backgroundColor = "";
            firstFor2.style.backgroundColor = "";
            secondFor.style.backgroundColor = "yellow";
            secondFor2.style.backgroundColor = "yellow";
        },selector3.value === "x1" ? speed1[0] : speed2[0])

        setTimeout(()=>{
            secondFor.style.backgroundColor = "";
            secondFor2.style.backgroundColor = "";
            ifCondition.style.backgroundColor = "yellow";
            ifCondition2.style.backgroundColor = "yellow";
        },selector3.value === "x1" ? speed1[1] : speed2[1])

        setTimeout(()=>{
            fifth.style.left = 60 + "vw";
            third.style.left = 50 + "vw";
            fifth.style.transitionDuration = 1 + "s";
            third.style.transitionDuration = 1 + "s";
        },selector3.value === "x1" ? speed1[1] : speed2[1])

    }

    if(count===5){

        ifCondition.style.backgroundColor = "";
        ifCondition2.style.backgroundColor = "";
        firstFor.style.backgroundColor = "yellow";
        firstFor2.style.backgroundColor = "yellow";

        setTimeout(()=>{
            firstFor.style.backgroundColor = "";
            firstFor2.style.backgroundColor = "";
            secondFor.style.backgroundColor = "yellow";
            secondFor2.style.backgroundColor = "yellow";
        },selector3.value === "x1" ? speed1[0] : speed2[0])

        setTimeout(()=>{
            secondFor.style.backgroundColor = "";
            secondFor2.style.backgroundColor = "";
            ifCondition.style.backgroundColor = "yellow";
            ifCondition2.style.backgroundColor = "yellow";
        },selector3.value === "x1" ? speed1[1] : speed2[0])

        setTimeout(()=>{
            fifth.style.left = 70 + "vw";
            fourth.style.left = 60 + "vw";
            fifth.style.transitionDuration = 1 + "s";
            fourth.style.transitionDuration = 1 + "s";
        },selector3.value === "x1" ? speed1[1] : speed2[1])

    }
})

playBtn.addEventListener('click', () => {

    firstFor.style.backgroundColor = "yellow";
    firstFor2.style.backgroundColor = "yellow";

    setTimeout(()=>{
        firstFor.style.backgroundColor = "";
        firstFor2.style.backgroundColor = "";
        secondFor.style.backgroundColor = "yellow";
        secondFor2.style.backgroundColor = "yellow";
    },selector3.value === "x1" ? speed1[0] : speed2[0])

    setTimeout(()=>{
        secondFor.style.backgroundColor = "";
        secondFor2.style.backgroundColor = "";
        ifCondition.style.backgroundColor = "yellow";
        ifCondition2.style.backgroundColor = "yellow";
    },selector3.value === "x1" ? speed1[1] : speed2[1])

    setTimeout(()=>{
        second.style.left = 70 + "vw";
        first.style.left = 30 + "vw";
        second.style.transitionDuration = 1 + "s";
        first.style.transitionDuration = 1 + "s";
    },selector3.value === "x1" ? speed1[1] : speed2[1])



    setTimeout(()=>{
        ifCondition.style.backgroundColor = "";
        ifCondition2.style.backgroundColor = "";
        firstFor.style.backgroundColor = "yellow";
        firstFor2.style.backgroundColor = "yellow";
    },selector3.value === "x1" ? speed1[2] : speed2[2])

    setTimeout(()=>{
        firstFor.style.backgroundColor = "";
        firstFor2.style.backgroundColor = "";
        secondFor.style.backgroundColor = "yellow";
        secondFor2.style.backgroundColor = "yellow";
    },selector3.value === "x1" ? speed1[3] : speed2[3])

    setTimeout(()=>{
        secondFor.style.backgroundColor = "";
        secondFor2.style.backgroundColor = "";
        ifCondition.style.backgroundColor = "yellow";
        ifCondition2.style.backgroundColor = "yellow";
        second.style.left = 40 + "vw";
        fourth.style.left = 70 + "vw";
        second.style.transitionDuration = 1 + "s";
        fourth.style.transitionDuration = 1 + "s";
    },selector3.value === "x1" ? speed1[4] : speed2[4])



    setTimeout(()=>{
        ifCondition.style.backgroundColor = "";
        ifCondition2.style.backgroundColor = "";
        firstFor.style.backgroundColor = "yellow";
        firstFor2.style.backgroundColor = "yellow";
    },selector3.value === "x1" ? speed1[5] : speed2[5])

    setTimeout(()=>{
        firstFor.style.backgroundColor = "";
        firstFor2.style.backgroundColor = "";
        secondFor.style.backgroundColor = "yellow";
        secondFor2.style.backgroundColor = "yellow";
    },selector3.value === "x1" ? speed1[6] : speed2[6])

    setTimeout(()=>{
        secondFor.style.backgroundColor = "";
        secondFor2.style.backgroundColor = "";
        ifCondition.style.backgroundColor = "yellow";
        ifCondition2.style.backgroundColor = "yellow";
        fifth.style.left = 60 + "vw";
        third.style.left = 50 + "vw";
        fifth.style.transitionDuration = 1 + "s";
        third.style.transitionDuration = 1 + "s";
    },selector3.value === "x1" ? speed1[7] : speed2[7])


    setTimeout(()=>{
        secondFor.style.backgroundColor = "";
        secondFor2.style.backgroundColor = "";
        ifCondition.style.backgroundColor = "yellow";
        ifCondition2.style.backgroundColor = "yellow";
        fifth.style.left = 70 + "vw";
        fourth.style.left = 60 + "vw";
        fifth.style.transitionDuration = 1 + "s";
        fourth.style.transitionDuration = 1 + "s";
    },selector3.value === "x1" ? speed1[8] : speed2[8])


    setTimeout(()=>{
        ifCondition.style.backgroundColor = "";
        ifCondition2.style.backgroundColor = "";
    },selector3.value === "x1" ? speed1[9] : speed2[9])



})

resetBtn.addEventListener('click', () => {

    count = 1;

    fifth.style.left = 60 + "vw";
    fourth.style.left = 40 + "vw";
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
        first.style.left = 70 + "vw";
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


submitBtn2.addEventListener('click', (e)=>{

    e.preventDefault();

    if(selector2.value === "Java"){
        javaC.style.opacity = 100 + "%";
        cCode.style.opacity = 0 + "%";
    }else{
        javaC.style.opacity = 0 + "%";
        cCode.style.opacity = 100 + "%";
    }
})

submitBtn3.addEventListener('click', (e)=>{

    e.preventDefault();

})

