import React from 'react';

function Hi(props){
    return(
        <p>My name is {props.fname+" " + props.lname}. your age is {props.age}(functioncomponent)</p>
    )
}
export default Hi;