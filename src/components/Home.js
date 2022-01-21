import React from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';

    function Home(props) {
        return (
          <div>
          <img src="https://res.cloudinary.com/andreahabib/image/upload/v1642026304/React_Bank_dk7n1a.png" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link>
          <Link to="/debits">Debits</Link>
          <Link to="/login">Login</Link>
          <AccountBalance accountBalance={props.accountBalance}/>
        </div>
        );
      }
    
    export default Home;