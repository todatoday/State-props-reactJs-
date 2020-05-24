import React, { Component } from 'react';
import Test from './Test';
import ClientForm from './ClientForm';

class ListTest extends Component {

    constructor(props){
        super();

        this.state = {
            clients : [
                {id: 1, name: "steav", age: 25},
                {id: 2, name: "Locas", age: 40},
                {id: 3, name: "Molkid", age: 58},
                {id: 4, name: "Vlod", age: 12},
            ],

         

            title: "Liste ds cilents"
        }
    }


    handeleDelete = (index) => {
    const clients = this.state.clients.slice();
    clients.splice(index, 1);
    this.setState({
        clients: clients
    })
        
    }

    handelAdd = (client) =>{
        const clients = [...this.state.clients];
        clients.push(client);
        this.setState({
            clients
        });

    }
   



  
 


        render(){

            return(
                <div style={{margin: "200px 500px", height: "50vh"}}  >
                    <h1>{this.state.title}</h1>
                    <ul >

                   
                        {this.state.clients.map((client, index) => 
                             // I have to pass my client list into this component called Test
                             //here i am gonna use Props which are used as html attributes
                             //here i gave it an attribute called name and inside i gave it the name of client
                     
                        <Test  name = {client.name}
                        age = {client.age}
                        key={index}
                        onDelete={this.handeleDelete}
                        />                       
                 
                               
                        )}
                    </ul>
                    <ClientForm onClientAdd={this.handelAdd}
                    
                    />

 
                   

                </div>
            )
        }

     

}
export default ListTest;