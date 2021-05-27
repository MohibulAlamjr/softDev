import React ,{Component} from 'react';

class Welcome extends Component {
    render(){
        return <h1>Hi,I am from {this.props.city}</h1>

    }
}
export default Welcome;