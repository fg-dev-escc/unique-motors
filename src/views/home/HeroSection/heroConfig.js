export const heroConfig = {
  // data
  data: {
    buttons: {
      aboutMore: "About More",
      learnMore: "Learn More"
    },
    routes: {
      about: "/about",
      cars: "/cars"
    },
    slides: [
      {
        image: '/assets/img/slider/slider-1.jpg',
        subtitle: '50% Off Reserved Now!',
        title: 'Car Rental In Your <span>Desired</span> Destination',
        description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don\'t look even making it look like readable slightly believable.'
      },
      {
        image: '/assets/img/slider/slider-2.jpg',
        subtitle: '50% Off Reserved Now!',
        title: 'Car Rental In Your <span>Desired</span> Destination',
        description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don\'t look even making it look like readable slightly believable.'
      },
      {
        image: '/assets/img/slider/slider-3.jpg',
        subtitle: '50% Off Reserved Now!',
        title: 'Car Rental In Your <span>Desired</span> Destination',
        description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don\'t look even making it look like readable slightly believable.'
      }
    ]
  },

  // styles
  styles: {
    heroSingle: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    },
    heroContent: {
      color: 'white',
      textAlign: 'left'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#ffb300',
      marginBottom: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      lineHeight: '1.2',
      marginBottom: '1.5rem'
    },
    heroDescription: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '2rem',
      opacity: '0.9',
      maxWidth: '500px'
    },
    heroButtons: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    primaryButton: {
      backgroundColor: '#6c63ff',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      border: '2px solid white',
      padding: '12px 30px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease'
    }
  }
};