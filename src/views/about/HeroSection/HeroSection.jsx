import React from 'react';

import { heroConfig } from './heroConfig';

const HeroSection = () => {
  // config
  const { data } = heroConfig;

  // render
  return (
    <div className="site-breadcrumb" style={{ background: `url(${data.backgroundImage})` }}>
      <div className="container">
        <h2 className="breadcrumb-title">{data.title}</h2>
        <ul className="breadcrumb-menu">
          {data.breadcrumbItems.map((item, index) => (
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