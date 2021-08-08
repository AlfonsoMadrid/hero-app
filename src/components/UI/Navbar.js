import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {

    const {user: {name}, dispatch} = useContext(AuthContext);
    const history = useHistory();
    
    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        });
    }

    return (
        

        
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Hero League
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav ">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div>
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-warning">
                        Hi! {name}
                    </span>

                    <button 
                        className="nav-item nav-link btn btn-outline-dark ml-2" 
                        style={{color: 'greenyellow'}}
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
            </div>
        </nav>
        
    )
}