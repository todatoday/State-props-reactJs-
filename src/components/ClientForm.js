import React, { Component } from 'react';


class ClientForm extends Component {

    state= {
        nvClients : " ",
    }

    
    hadeleChange = (event) => {

        const value = event.currentTarget.value;
        this.setState({ nvClients: value});


    }

    handeleSubmit = (event) =>{
        event.preventDefault();
        const id = new Date().getTime();
        const name = this.state.nvClients;
    
        this.props.onClientAdd({id, name});
        this.setState({
            nvClients: ""
        });
 

    }
    render(){
   
    return(
        <div>

    
        <form onSubmit={this.handeleSubmit}>

        <input type="text"  value={this.state.nvClients}
         onChange={this.hadeleChange}/>

       

        <button>Add</button>
    </form>
    </div>

    )
}
}
export default ClientForm;