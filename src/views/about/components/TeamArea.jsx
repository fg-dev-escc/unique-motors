import React from 'react';

const TeamArea = () => {
  const team = [
    {
      name: 'Juan Pérez',
      position: 'CEO & Fundador',
      image: '/assets/img/team/01.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Ana López',
      position: 'Directora de Ventas',
      image: '/assets/img/team/02.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Carlos Ruiz',
      position: 'Especialista en Subastas',
      image: '/assets/img/team/03.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Laura Martín',
      position: 'Gerente de Atención al Cliente',
      image: '/assets/img/team/04.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <div className="team-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Nuestro Equipo</span>
              <h2 className="site-title">Conoce a nuestro <span>equipo</span></h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {team.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    <a href={member.social.facebook}><i className="fab fa-facebook-f"></i></a>
                    <a href={member.social.twitter}><i className="fab fa-twitter"></i></a>
                    <a href={member.social.linkedin}><i className="fab fa-linkedin-in"></i></a>
                    <a href={member.social.instagram}><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="team-content">
                  <h4>{member.name}</h4>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamArea;