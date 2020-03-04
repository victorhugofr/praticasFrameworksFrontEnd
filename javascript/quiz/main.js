const questions = [
    {
        statement: '1ª questão',
        options: [
            'opção1',
            'opção2',
            'opção3',
            'opção4',
            'opção5',
        ]
    },
    {
        statement: '2ª questão',
        options: [
            'opção1',
            'opção2',
            'opção3',
            'opção4',
            'opção5',
        ]
    }
]
const quiz = document.getElementById("quiz");
let qativo = 0;
const respostas = [];
function gerador(question){
    
    if(!question){
       questions.forEach((q,i,a)=>{
        const p = document.createElement("p");
        p.innerText = `${q.statement}: ${respostas[i]}`;
        quiz.appendChild(p);
       })
       return
    }
    quiz.innerHTML = "";
    const statement = document.createElement("h1");
    statement.innerText = question.statement;
    quiz.appendChild(statement);
    const grupo = document.createElement("p");
    for(const option of question.options){
        const botao = document.createElement("button");
        botao.innerText = option;
        botao.onclick = () => {respostas[qativo] = option}
        grupo.appendChild(botao); 
    }
    quiz.appendChild(grupo);
    const submit = document.createElement("button");
    submit.innerText = "enviar";
    submit.onclick = () => respostas[qativo] && gerador(questions[++qativo]);
    quiz.appendChild(submit);
}
gerador(questions[0])