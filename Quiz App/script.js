const  quizData= [
    {
        question:"How old are u?",
        a:19,
        b:29,
        c:39,
        d:49,
         },
    
         {
            question:"What is your favourite coloe",
            a:'green',
            b:'blue',
            c:'yellow',
            d:'pink',
             },

       {
                question:"what is my name",
                 a:'green',
                 b:'blue',
                 c:'yellow',
                 d:'Brown',
             },
                
]

const questionEl= document.getElementById('question')
 const a_text= document.getElementById('a-text')
 const b_text=document.getElementById('b-text')
 const c_text=document.getElementById('c-text')
 const d_text=document.getElementById('d-text')
 const submitbtn=document.getElementById('submit')

let currentQuiz=0;


loadQuiz();


function loadQuiz(){

    const currentQuizData=  quizData[currentQuiz];
    questionEl.innerText= currentQuizData.question;
    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;




    
}


submitbtn.addEventListener("click", ()=>{

    currentQuiz++;

    loadQuiz();


});


