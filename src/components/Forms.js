import React, { Component } from 'react';
 



//initialiser le state
const initialState = {
    image: "",
    name: "",
    title: "",
    description: "",
    email: "",
    //valider formulaire 
    imageError: "",
    nameError: "",
    titleError: "",
    descriptionErr: "",
    emailError: ""
};

class Forms extends Component {
    
 

        state = initialState;

    
    handleSubmit = (event) => {
       
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            console.log(this.state);
            this.setState(initialState)
        }

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    validate = () => {
        let imageError = "";
        let nameError = "";
        let titleError = "";
        let descriptionErr = "";
        let emailError = "";

        if(!this.state.image && 
            !this.state.name &&
            !this.state.title &&
            !this.state.description &&
            !this.state.email ){

            imageError = "image is required";
            nameError = "name required";
            titleError = "title required";
            descriptionErr = "description required";
            emailError = "email is required";
        }
        if(imageError || nameError || titleError || descriptionErr || emailError ) {
            this.setState({ imageError, nameError, titleError, descriptionErr, emailError });
            return false;
        }
        return true;
    };





    render() {
        return (<div>
           





            <form className="formulair" onSubmit={this.handleSubmit}>
                <div className="form-items">

                    <div className="form-group">

                        <label for="image" >Image</label>
                        <input type="text" name="image" placeholder="Image url" className="form-control"
                            value={this.state.image}
                            onChange={this.handleChange}

                        />
                    </div>


                    {this.state.imageError ? (
                        <div style={{ borderRadius: 5, backgroundColor: "red", padding: 10, color: 'white' }}
                        className=" alert-danger" >
                           {this.state.imageError}
   
                       </div>

                    ): null}


                    <div className="form-group">

                        <label for="name" >Name</label>
                        <input type="text" name="name" placeholder="your name here" className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange}

                        />
                    </div>

                    {this.state.nameError ? (
                          <div style={{ borderRadius: 5, backgroundColor: "red", padding: 10, color: 'white' }} className=" alert-danger" >
                          {this.state.nameError}</div>

                    ): null}
                   
                    <div className="form-group">

                        <label for="name" >title</label>
                        <input type="text" name="title" placeholder="your title here" className="form-control"
                            value={this.state.title}
                            onChange={this.handleChange}


                        />
                    </div>

                    {this.state.titleError ? (
                         <div style={{  borderRadius: 5, backgroundColor: "red", padding: 10, color: 'white' }} className=" alert-danger" >
                         {this.state.titleError}</div>

                    ) :null}
                    
                    <div className="form-group">
                        <label for="name" >description</label>
                        <textarea name="description" placeholder="your description" className="form-control"
                            value={this.state.description}
                            onChange={this.handleChange}
                        >
                        </textarea>




                    </div>
                    {this.state.descriptionErr ? (
                        <div style={{  borderRadius: 5, backgroundColor: "red", padding: 10, color: 'white'  }} className=" alert-danger" >
                        {this.state.descriptionErr}</div>

                    ): null}
                     

                    <div className="form-group">
                        <label for="name" >Email</label>
                        <input type="email" name="email" placeholder="your emal here" className="form-control"
                            value={this.state.email}
                            onChange={this.handleChange}


                        />
                    </div>
                    {this.state.emailError ? (
                          <div style={{ marginBottom: 10, borderRadius: 5, backgroundColor: "red", padding: 10, color: 'white'  }} className="alert-danger" >
                          {this.state.emailError}</div>

                    ):null}
                   

                    <button type="submit" className="button">Add Profil</button>
                </div>
            </form>

           

                       
                           

              


              </div>
      
        )
    }

}

export default Forms;