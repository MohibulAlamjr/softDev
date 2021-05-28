import React,{Component} from 'react';
    class Select1 extends Component{
        constructor(){
            super();
            this.state={
                city1 :"Dhaka",
                city2 :"Barisal",
                city3 :"Rajshahi",
                city4 :"Rongpur",
                show :" ",
                auto :"Barisal"
            }
        }
        onChangeHandler=(event)=>{
            var SelectedValue = event.target.value;
            this.setState({show:SelectedValue,auto:SelectedValue})
        }


        render(){
            return(
                <div>
                    <h1>{this.state.show}</h1><br/>
                    <select onChange={this.onChangeHandler}value={this.state.auto}>
                        <option>{this.state.city1}</option>
                        <option>{this.state.city2}</option>
                        <option>{this.state.city3}</option>
                        <option>{this.state.city4}</option>
                        
                    </select>
                </div>
            )
        }
    }  
    export default Select1