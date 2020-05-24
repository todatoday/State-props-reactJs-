
import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class NavBar extends Component {





    render() {
        const linkStyle = {
            color: 'white'
        };
        return (<div >

            <nav className="navbar">

                <ul className="navbarList">

                    <Link style={linkStyle} to="/">
                        <li> Home</li>

                    </Link>
                    <Link style={linkStyle} to="/forms">
                        <li> Register</li>
                    </Link>
                    <Link style={linkStyle} to="/profilList">

                        <li> ProfilList</li>
                    </Link>

                    <Link style={linkStyle} to="/addProfil">

                        <li> ListTest</li>
                    </Link>

                </ul>
            </nav>



        </div>);
    }
}

export default NavBar;