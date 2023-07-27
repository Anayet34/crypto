import React from 'react';
import './Partner.css';

const PartnerSection = () => {
  return (
    <section className="partner-section">
      <h2 className="section-title">Partners</h2>
      <div className="partner-grid">
        <div className="partner-item">
          <img src={require('./images//partner1.jpeg')} alt="Partner 1" />
        </div>
        <div className="partner-item">
          <img src={require('./images/partner2.jpeg')} alt="Partner 2" />
        </div>
        <div className="partner-item">
          <img src={require('./images/partner3.jpeg')} alt="Partner 3" />
        </div>
        <div className="partner-item">
          <img src={require('./images/partner4.jpeg')} alt="Partner 4" />
        </div>
        <div className="partner-item">
          <img src={require('./images/partner5.jpeg')} alt="Partner 5" />
        </div>
        <div className="partner-item">
          <img src={require('./images/partner6.jpeg')} alt="Partner 6" />
        </div>
        <div className="partner-item">
          <img src={require('./images/partner7.jpeg')} alt="Partner 6" />
        </div>
        <div className="partner-item">
          <img src={require('./images/partner8.jpeg')} alt="Partner 6" />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
