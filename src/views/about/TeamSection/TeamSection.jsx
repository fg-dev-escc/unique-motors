import React from 'react';

import { teamConfig } from './teamConfig';

const TeamSection = () => {
  // config
  const { data } = teamConfig;

  // render
  return (
    <div className="team-area pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                {data.header.tagline}
              </span>
              <h2 className="site-title">
                {data.header.title.before} <span>{data.header.title.highlight}</span>
              </h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {data.teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="team-item">
                <div className="team-img">
                  <img src={member.photo} alt="thumb" />
                </div>
                <div className="team-social">
                  {member.socialLinks.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.url}>
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5>
                      <a href={member.profileUrl}>{member.name}</a>
                    </h5>
                    <span>{member.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;