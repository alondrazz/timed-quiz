
let questions = [
    {
        numb: 1,
        questions: "How do you change directories in your terminal?",
        answer: "Using cd ",
        options: [
            "Using cd ..",
            "Using cd",
            "Using ls"    
        ]
    },
    {
        numb: 2,
        question: "How do you add changes to Github? ",
        answer: " git add -A",
        options: [
            " Using git add -A",
            " Using git push",
            " Using git clone"
        ]
    },
    {
        numb: 3,
        question: "How to add a paragraph in html? ",
        answer: "Using <p>",
        options: [
            "Using <li>",
            "Using <body>",
            "Using <p>"
        ]
    },
    {
        numb: 4,
        question: "What does line-height do in css? ",
        answer: "Sets the distance between lines of text",
        options: [
            "Specifies that a line will be displayed under the text",
            "Sets the line to be displayed through text",
            " Sets the distance between lines of text"
        ]
    }
]
const start_btn= document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .restart");
const continue_btn= info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".buttons .restart");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.oneclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    
}