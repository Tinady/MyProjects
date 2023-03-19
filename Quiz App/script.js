const  quizData= [
    {
        question:"How old are u?",
        a_1:19,
        a_2:29,
        a_3:39,
        a_4:49,
         },
    
         {
            question:"What is your favourite coloe",
            a_1:'green',
            a_2:'blue',
            a_3:'yellow',
            a_4:'pink',
             },

       {
                question:"what is my name",
                 a_1:'green',
                 a_2:'blue',
                 a_3:'yellow',
                 a_4:'Brown',
             },
                
]

const questionEl= document.getAnimations('question')
 const a_text= document.getElementById('a-text')
 const b_text=document.getElementById('b-text')
 const c_text=document.getElementById('c-text')
 const d_text=document.getElementById('d-text')

let cuurentQuestion=0;

loadQuiz();



function loadQuiz(){

    const currentQuizData=  quizData;
    questionEl.innerHTML= quizData[currentQuestion]



    currentQuestion++;
}

