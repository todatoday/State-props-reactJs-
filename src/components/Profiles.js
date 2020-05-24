import React from 'react';




function Profiles(props) {


    return (
        <div className="contenu">

            <img  src={props.img} alt="Image de profil" className="image"/>

            <ul className="profilLisst">
                <li className="name"><strong>{props.name}</strong></li>
                <li className="title">{props.ti}</li>
                <li className="paragraph">{props.descri}</li>
                <li className="contact"><i className="fas fa-envelope"></i>{props.email}</li>

            </ul>
            {props.children}

        </div>


    
    

    )
}
   
    





export default Profiles;