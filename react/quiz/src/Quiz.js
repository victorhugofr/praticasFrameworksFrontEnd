import React from 'react'
import Question from './Question';
import Results from './Results';

class Quiz extends React.Component {
    questions = [
        {
            statement: 'Qual a cor do cavalo branco de Napoleão?',
            options: ['preto','branco','azul','verde']
        },
        {
            statement: 'Qual a cor do cavalo Azul de Napoleão?',
            options: ['preto','branco','azul','verde']
        }
    ]

    render(){
        const results = this.showResults? <Results></Results> : null;
        return(
        <>
        <div>
            <h2>Quiz</h2>
            <Question statement={this.questions[0]}></Question>
            <Results></Results>
        </div>
        </>
        )
    }
}

export default Quiz;