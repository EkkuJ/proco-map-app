import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {

    const { isAuthenticated, loginWithRedirect, logout} = useAuth0();

    function LoginButton(props) {
        return (
          <button className="btn btn-outline-dark" onClick={props.onClick}>
            Login
          </button>
        );
      }
      
      function LogoutButton(props) {
        return (
          <button className="btn btn-outline-dark" onClick={props.onClick}>
            Logout
          </button>
        );
      }

      let button;

      if (!isAuthenticated) {
          button = <LoginButton onClick={() => loginWithRedirect()} />
      } else {
          button = <LogoutButton onClick={() => logout()} />
      }

    return (
        <header className="masthead p-2">
            <nav className="navbar">
                <span className="masthead-brand">Project Connect</span>
                {button}
            </nav>
        </header>
    )
}

export default Header;