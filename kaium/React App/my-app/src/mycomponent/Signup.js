import React,{Component} from 'react';
    class Signup extends Component{
        constructor(){
            super();
            this.state={
                fname :" "
                lname :" "
                email :" "
                mobile :" "
            }
        }
        onChangeHandler=(event)=>{
            var inputName =event.Target.name;
            var inputValue=event.Target.value;

            this.setState({[inputName]:inputValue})
        }
        render(){
            return(
                <div>
                    <p>First Name :{this.state.fname}</p>
                    <p>Last Name :{this.state.lname}</p>
                    <p>Email :{this.state.email}</p>
                    <p>Mobile :{this.state.mobile}</p>
                    <form>
                        <input onChange= {this.onChangeHandler} name ="fname" type="" placeholder ="First Name"></input>
                        <input onChange= {this.onChangeHandler} name ="lname" type="text" placeholder ="Last Name"></input>
                        <input onChange= {this.onChangeHandler} name ="email" type="email" placeholder ="email"></input>
                        <input onChange= {this.onChangeHandler} name ="mobile" type="" placeholder ="Mobile Number"></input>
                    </form>
                </div>
            );
        }

    }
     export default Signup