import React from 'react';

// data
const contactMapData = {
  map: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s",
    title: "Contact Location Map"
  }
};

const ContactMap = () => {
  // render
  return (
    <div className="contact-map">
      <iframe 
        src={contactMapData.map.src}
        style={{ height: '400px', border: 0, width: '100%' }} 
        allowFullScreen="" 
        loading="lazy"
        title={contactMapData.map.title}
      />
    </div>
  );
};

export default ContactMap;