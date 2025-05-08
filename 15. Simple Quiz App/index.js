
let questions = {
    1: {
        question: "What is the name of the South African who blew up a German warship with a tin can during WW2?",
        options: ["Job Maseko", "Jacob Zuma", "Shaka Zulu"],
        answer: "Job Maseko",
        explanation: "https://en.wikipedia.org/wiki/Job_Maseko"
    },

    2: {
            question: "Who led the 1808 slave revolt in Cape Town?",
            options: ["Louis Vuitton", "Louis Botha", "Louis of Mauritius"],
            answer: "Louis of Mauritius",
            explanation: "https://www.capetownmuseum.org.za/they-built-this-city/louis-of-mauritius"
    },

    3: {
        question: "Who campained against the British consentration camps during the Second Boer War?",
        options: ["Florence Nightingale", "Emily Hobhouse", "Mary Seacole"],
        answer: "Emily Hobhouse",
        explanation: "https://en.wikipedia.org/wiki/Emily_Hobhouse"
}

}

let current = 1
let selected = ""
let score = 0
let nxt = false

const displayQuestion = ()=>{
    let quest = document.getElementById("quest")
    quest.innerHTML= questions[current].question

    let r1Label = document.getElementById("rad1L")
    r1Label.innerHTML = questions[current].options[0]

    let r1 = document.getElementById("rad1")
    r1.setAttribute("value",questions[current].options[0])


    let r2Label = document.getElementById("rad2L")
    r2Label.innerHTML = questions[current].options[1]

    let r2 = document.getElementById("rad2")
    r2.setAttribute("value",questions[current].options[1])


    let r3Label = document.getElementById("rad3L")
    r3Label.innerHTML = questions[current].options[2]

    let r3 = document.getElementById("rad3")
    r3.setAttribute("value",questions[current].options[2])


    

    
}

const reset = ()=>{
    if(current==3){
        scoreOut.innerHTML = "The end. Your Score: "+score
    }else{
        current++

        nxtBtn.classList.add("hidden")
        enterBtn.classList.remove("hidden")
        
        displayQuestion()
        innerCard.style.transform=""
  
    }
}


const reveal = ()=>{
 
nxt=true   
const passOrFail = document.getElementById("passOrFail")
const card = document.getElementById("backCard")
if(answer == questions[current].answer){
    score++
    passOrFail.innerHTML="Correct!"
    card.style.backgroundColor="rgb(2,209,26)"
}else{
    passOrFail.innerHTML="Incorrect!"
    card.style.backgroundColor="rgb(209,2,12)"
}    


scoreOut.innerHTML="Score: "+score

const exp = document.getElementById("exp")
exp.setAttribute("href", questions[current].explanation)



enterBtn.classList.add("hidden")

innerCard.style.transform="rotateY(180deg)"

btnFun()

}

const setAnswer = ()=>{

radios.forEach((e)=>{
    if(e.checked){
        answer = e.value
    
    }
})
}

const btnFun = ()=>{
    const btnDiv = document.getElementById("btnDiv")
    
    if(!nxt){
        
        enterBtn.classList.remove("hidden")

        enterBtn.addEventListener("click", ()=>{
            setAnswer()
            reveal()
        } )

    }else{

       
        nxtBtn.classList.remove("hidden")

        
        nxtBtn.addEventListener("click", reset)
    }
    
    
    
    
}

const scoreOut = document.getElementById("score")

const innerCard = document.getElementById("innerCard")

const radios = document.getElementsByName("radOp")

radios.forEach((e)=>{
    e.addEventListener("change", setAnswer)
})

const enterBtn = document.getElementById("enterBtn")
const nxtBtn = document.getElementById("nxt")

const expLink = document.getElementById("exp")
expLink.addEventListener("click", (e)=>{
    e.preventDefault();
    window.open(expLink.href)
    
} )

displayQuestion()
btnFun()