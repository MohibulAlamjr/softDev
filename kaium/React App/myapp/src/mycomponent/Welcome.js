import react,{Component} from 'react'
class welcome extends Component{
    render(){
        return <h1>I am from class Component (Name{this.props.value})</h1>,
        <h1></h1>
    }
}

export default welcome