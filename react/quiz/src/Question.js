import React from 'react'

class Question extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    render(){
    const options = this.props.statement.options.map(opt => {
        return <button key={opt} onClick = {() => alert('aaa')}>{opt}</button>
    })
        return(
        <div>
            <h2>Question</h2>
            {this.props.statement.statement}
            <br/>

            {options}
        </div>
        )
    }
}

export default Question;