import React from 'react';

class Root extends React.Component {
  render() {
    return (
      <div className="landing-container">
        {/* Description Section */}
        <div className="drawing-description">
          <p>
            Book lovers frequently accumulate a collection of books they have read and look for other recommendations. 
            They are always eager to explore new reading material. Traditional methods of exchanging books, such as local 
            book swaps or lending among friends, are limited in scope and accessibility. Therefore, it is imperative to have 
            a digital platform that can facilitate book exchanges on a larger scale. This platform should connect users with 
            similar reading interests, enabling them to trade books easily and efficiently. This project aims to develop a 
            full-stack web application that serves as a centralized platform for users to exchange, lend, and borrow books 
            with other users. The platform should provide a user-friendly interface, robust search and recommendation features, 
            and secure transaction capabilities.
          </p>
        </div>

        {/* Logo Section */}
        <div className="logo-container">
          <img 
            src="images/full-stack-logo.png" 
            alt="Full Stack Dev Logo" 
            className="full-stack-logo"
          />
        </div>
      </div>
    );
  }
}

export default Root;
