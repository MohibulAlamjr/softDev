import React from 'react';


    
        function Hello(props){
            function DoThis(a){
                alert(a)
            }
            return (
                
                    <div>
                        
                        <button onClick={DoThis.bind(this,"Hello I Am From para")}>Click Me</button>
                        <h1>Hello I am {props.name} , my age is {props.age} and I am from {props.home}.</h1></div>
               
            );
        }
           
export default Hello;