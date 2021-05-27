import react from 'react';


function Hello(props){

    function TryIt(a,b){
        alert(a+b)
    }
    return (


        <div>
            <button className="btn btn-success m-5" onClick= {TryIt.bind(this,props.name,props.age)}>Click Function</button>
              <h1>Name :{props.name} and Age : {props.age}</h1>
        </div>
      
    )
}

export default Hello;