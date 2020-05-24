import React, { Component } from 'react';

function Test(props){
    return(
        <div>
           
               <li>{props.name}{props.age}
               
               <button onClick={() => props.onDelete(props.index)}>X</button>
               </li>
        
           

        </div>
    )

}

export default Test;