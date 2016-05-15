import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');

    // require the logo image both from client and server
    // const logoImage = require('./logo.png');

    return (
      <div className={styles.home}>
        <Helmet title="Home"/>

        <div className="container">
          <p>Home page</p>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
  }
}
