import React from 'react';

// data
const heroData = {
  title: "Contact Us",
  backgroundImage: "assets/img/breadcrumb/01.jpg",
  breadcrumbItems: [
    { label: 'Home', path: 'index.html' },
    { label: 'Contact Us', path: '/contact', active: true }
  ]
};

const HeroSection = () => {
  // render
  return (
    <div className="site-breadcrumb" style={{ background: `url(${heroData.backgroundImage})` }}>
      <div className="container">
        <h2 className="breadcrumb-title">{heroData.title}</h2>
        <ul className="breadcrumb-menu">
          {heroData.breadcrumbItems.map((item, index) => (
            <li key={index} className={item.active ? 'active' : ''}>
              {item.active ? (
                item.label
              ) : (
                <a href={item.path}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;