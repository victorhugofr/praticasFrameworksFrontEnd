import React from 'react'

class Results extends React.Component {
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
        return(
        <>
        <div>
            <h2>Results</h2>
        </div>
        </>
        )
    }
}

export default Results;