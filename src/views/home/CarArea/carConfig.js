export const carConfig = {
  // data
  data: {
    sectionTitle: {
      tagline: "Cars",
      title: "Featured",
      titleSpan: "Cars"
    },
    searchPlaceholder: "Search",
    sortOptions: [
      { value: "1", label: "Sort By Default" },
      { value: "5", label: "Sort By Featured" },
      { value: "2", label: "Sort By Latest" },
      { value: "3", label: "Sort By Low Price" },
      { value: "4", label: "Sort By High Price" }
    ],
    labels: {
      model: "Model",
      people: "People",
      perMonth: "/ month",
      loadMore: "Load More",
      rentNow: "Ver Subasta"
    },
    messages: {
      loading: "Loading cars...",
      noResults: "No cars found."
    },
    defaults: {
      image: '/assets/img/car/01.jpg',
      capacity: '4',
      fuel: 'Hybrid',
      efficiency: '10.15km / 1-litre',
      transmission: 'Automatic',
      price: '$390',
      rating: '5.0'
    }
  },

  // styles
  styles: {
    sectionContainer: {
      padding: '120px 0'
    },
    sortContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '30px'
    },
    searchInput: {
      padding: '12px 45px 12px 15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '14px',
      width: '250px'
    },
    searchButton: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#6c63ff',
      cursor: 'pointer'
    },
    sortSelect: {
      padding: '12px 15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '14px',
      minWidth: '200px'
    }
  },

  // helpers
  helpers: {
    getCarImage: (car) => {
      if (car.urlImgPrincipal) return car.urlImgPrincipal;
      return carConfig.data.defaults.image;
    },

    getTimeLeft: (fechaFin) => {
      if (!fechaFin) return '';
      const end = new Date(fechaFin);
      const now = new Date();
      let diff = end - now;
      if (diff <= 0) return 'Subasta terminada';
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / 1000);
      
      const pad = (n) => n.toString().padStart(2, '0');
      return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    },

    getStatus: (car) => {
      if (car.fechaFin) {
        const end = new Date(car.fechaFin);
        if (end <= new Date()) return 'Inactivo';
        return 'Activo';
      }
      if (car.activo !== undefined) return car.activo ? 'Activo' : 'Inactivo';
      return 'Inactivo';
    },

    formatPrice: (price) => {
      return price ? `$${Number(price).toLocaleString('en-US')}` : carConfig.data.defaults.price;
    }
  }
};