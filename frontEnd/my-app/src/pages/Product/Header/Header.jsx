import React from 'react';
import './header.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contextapi/Authentication/Authentication';

const Header = () => {
  const { Sname } = useContext(AuthContext);
  return (
    <div className="Header">
      <section className="sec-I">
        <div>
          <p className="pra">Good night, {Sname}!</p>
          <h3 className="hih3">
            Hi night owl! We're always glad to see you here :){' '}
          </h3>
        </div>
        <div>
          {' '}
          <img
            src="https://cdn.monday.com/images/homepage-desktop/header-background-v2.svg"
            alt="Girl in a jacket"
            width="150"
            height="100"
          />
        </div>
      </section>
      <section className="sec-II">
        <div>
          {' '}
          <Button variant="light">Give feedback</Button>{' '}
        </div>
        <div>
          <Button variant="primary">Quick Search</Button>{' '}
        </div>
      </section>
    </div>
  );
};

export default Header;
