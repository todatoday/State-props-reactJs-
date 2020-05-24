import React, { Component } from 'react';
import Profiles from './Profiles';
 



class ProfilList extends Component {

    state = {



        profiles: [
            {
                id : 1,
                image: "/image/girl-3626901_1280.jpg",
                name: "Sarah Soldid",
                title: "this is my first component",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit , autem soluta facere excepturi doloribus, alias delectus. Voluptatum ipsum at libero nobis facere dicta, aliquid vel adipisci, explicabo ut sint voluptatibus voluptate perferendis inventore reiciendis velit maxime? Ab necessitatibus a harum temporibus soluta?",
                adresmail: "msrt.smith@live.fr",
            },
            {
               

                id : 2,
                image: "/image/adult-1850703_1280.jpg",
                name: "Bintha Melvin",
                title: "this is my first component",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore debitis exercitationem porro atque nesciunt rem ad, placeat, autem soluta facere excepturi doloribus, alias delectus. Voluptatum ipsum at libero nobis facere dicta, aliquid vel adipisci, explicabo ut sint voluptatibus voluptate perferendis inventore reiciendis velit maxime? Ab necessitatibus a harum temporibus soluta?",
                adresmail: "msrt.smith@live.fr",
            },
            {
               

                id : 3,
                image: "/image/profile-461076_1280.jpg",
                name: "Karin Larare",
                title: "this is my first component",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore debitis exercitationem porro atque nesciunt rem ad, placeat, autem soluta facere excepturi doloribus, alias delectus. Voluptatum ipsum at libero nobis facere dicta, aliquid vel adipisci, explicabo ut sint voluptatibus voluptate perferendis inventore reiciendis velit maxime? Ab necessitatibus a harum temporibus soluta?",
                adresmail: "msrt.smith@live.fr",
            },
            {
              

                id : 4,
                image: "/image/girl-3626901_1280.jpg",
                name: "Nova Ulstat",
                title: "this is my first component",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore debitis exercitationem porro atque nesciunt rem ad, placeat, autem soluta facere excepturi doloribus, alias delectus. Voluptatum ipsum at libero nobis facere dicta, aliquid vel adipisci, explicabo ut sint voluptatibus voluptate perferendis inventore reiciendis velit maxime? Ab necessitatibus a harum temporibus soluta?",
                adresmail: "msrt.smith@live.fr",
            }
        ],


       


    }



    deleteProfile = (index) => {
        const profiles = this.state.profiles.slice();
        profiles.splice(index, 1);
        this.setState({ profiles: profiles});
    }


    // deleteProfile = (index, e) => {
    //     //il faut creer une coper de state 
    //     //prned le stat creer une réference mais avec l Object permet de creer 
    //     //un tableau vide
    //     const profiles = Object.assign([], this.state.profiles);
    //     //pour supprimze on utilise splice
    //     profiles.splice(index, 1);
    //     this.setState({ profiles: profiles });
       


    // }
  

    render(){

   

        return (


            <div>
            
                   {this.state.profiles.map((profile, index) => (
                       <Profiles 
                       name={profile.name}
                       img={profile.image} 
                       ti={profile.title}
                       descri={profile.description}
                       email={profile.adresmail}
                       key={profile.id}
                       >
                           <div>

                          <button onClick={this.deleteProfile.bind(this, index)}><i className="fas fa-trash"></i></button>
                         <button onClick={this.ajouterProfil}><i className="fas fa-user-edit"></i></button> 
                           </div>


                        </Profiles>

                 
                ))}


           </div>


        )
    }  


}



export default ProfilList;