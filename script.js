const questions = [
    {
        question:"Who is the Home Minister Of India?",
        a:"Rajnath Singh",
        b:"Digvijay Singh",
        c:"Amit Shah",
        d:"Venkaiya Naidu",
        correct:"c"
    }, 
    {
        question:"JavaScript is also known as: ",
        a:"Typescript",
        b:"ECMA Script",
        c:"Java Sister",
        d:"None Of These",
        correct:"b"
    },
    {
        question:"The scientific name of King Cobra is: ",
        a:"Serpentes",
        b:"Snake",
        c:"Naja naja",
        d:"Rattle sorus",
        correct:"c"
    },
    {
        question:"Which one is the CAPF of India?",
        a:"Indian Army",
        b:"SSB",
        c:"Indian Air Force",
        d:"Indian Navy",
        correct:"b"
    },
    {
        question:"Which is the static typed language?",
        a:"C++",
        b:"Python",
        c:"JavaScript",
        d:"Ruby",
        correct:"a"
    },
    {
        question:"The Author of book `Ramayana` is? ",
        a:"Ramdhari Singh Dinkar",
        b:"Munshi Premchand",
        c:"Shri Balmiki",
        d:"None Of These",
        correct:"c"
    },
    {
        question:"The `Green Planet` in solar system is: ",
        a:"Venus",
        b:"Jupiter",
        c:"Earth",
        d:"Uranus",
        correct:"d"
    },
    {
        question:"Sin^2(A) + Cos^2(A) = ?",
        a:"0",
        b:"1",
        c:"-1",
        d:"2",
        correct:"b"
    },
    {
        question:"The Boiling point of water is:",
        a:"100deg",
        b:"90deg",
        c:"0deg",
        d:"None Of These",
        correct:"a"

    },
    {
        question:"Chief Minister of Uttar Pradesh is: ",
        a:"Kamalnath",
        b:"Yogi Adityanath",
        c:"Harish Rawat",
        d:"Manohar Lal Khattar",
        correct:"b"


    }
    
]

let counter = 0;
let b = document.getElementById("text_a");
let c = document.getElementById("text_b");
let d = document.getElementById("text_c");
let e = document.getElementById("text_d");
let a = document.getElementById("questionn");


function quiz(){
    let object = questions[counter]
    a.innerText =  object.question;
    b.innerText = object.a;
    c.innerText = object.b;
    d.innerText = object.c;
    e.innerText = object.d;


}

function getSelected(){
    let answer = undefined;
    let ele = document.getElementsByName("answer");
    ele.forEach((element) =>{
        if(element.checked){
           answer = element.id;

        }
       
    })
    return answer;
}
function deSelected(){
    let ele = document.getElementsByName("answer");
    ele.forEach((element) =>{
        element.checked = false;
    })
}

quiz();
let score = 0;
let submit = document.getElementById("submitt");
submit.addEventListener("click", function(){
   let answer = getSelected();
   if(answer === questions[counter].correct){
       score++;
   }
   if(counter == questions.length-1){
       alert(`Quiz completed!!!  ----->>>>  Your Score : ${score}/10`)
   }

//     for(let i = 0;i<ele.length;i++)
// {
//     if(ele[i].checked){
//         console.log(ele[i].value)
//     }



counter++;
quiz();
deSelected();
console.log(counter)
})