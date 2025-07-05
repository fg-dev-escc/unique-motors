export const contactConfig = {
  // data
  data: {
    breadcrumb: {
      title: "Contact Us",
      currentPage: "Contact Us"
    },
    contactInfo: [
      {
        icon: "fal fa-map-marker-alt",
        title: "Office Address",
        content: "25/B Milford, New York, USA"
      },
      {
        icon: "fal fa-phone",
        title: "Call Us",
        content: "+2 123 4565 789"
      },
      {
        icon: "fal fa-envelope",
        title: "Email Us",
        content: "info@example.com"
      },
      {
        icon: "fal fa-clock",
        title: "Open Time",
        content: "Mon - Sat (10.00AM - 05.30PM)"
      }
    ],
    form: {
      title: "Get In Touch",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don't look even slightly when looking at its layout.",
      placeholders: {
        name: "Your Name",
        email: "Your Email",
        subject: "Your Subject",
        message: "Write Your Message"
      },
      buttons: {
        submit: "Send Message",
        submitting: "Sending..."
      }
    },
    messages: {
      success: "Thank you! Your message has been sent successfully.",
      error: "Sorry, there was an error sending your message. Please try again."
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s",
      title: "Contact Location Map"
    },
    image: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Contact"
    }
  },

  // styles
  styles: {
    sectionContainer: {
      padding: '120px 0',
      backgroundColor: '#f8f9fa'
    },
    contactInfo: {
      backgroundColor: 'white',
      padding: '30px 20px',
      borderRadius: '10px',
      textAlign: 'center',
      marginBottom: '20px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    contactInfoHover: {
      transform: 'translateY(-5px)'
    },
    contactIcon: {
      width: '60px',
      height: '60px',
      backgroundColor: '#6c63ff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      fontSize: '24px',
      color: 'white'
    },
    contactTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '10px'
    },
    contactContent: {
      color: '#666',
      fontSize: '14px'
    },
    formContainer: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '15px'
    },
    formDescription: {
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '30px'
    },
    formInput: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '14px',
      marginBottom: '20px',
      transition: 'border-color 0.3s ease'
    },
    formInputFocus: {
      borderColor: '#6c63ff',
      boxShadow: '0 0 0 2px rgba(108, 99, 255, 0.2)'
    },
    submitButton: {
      backgroundColor: '#6c63ff',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background-color 0.3s ease'
    },
    submitButtonDisabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed'
    },
    mapContainer: {
      height: '400px',
      border: 0,
      width: '100%'
    },
    image: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '15px'
    }
  }
};