import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Diego"
                lastName="Marquez"
                twitter="diego_marquezEC"
                jobTitle="Frontend Engineer"
                avatarUrl="https://s.gravatar.com/avatar/6ff72d2b26549147831dae808bf78e81?s=80"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
